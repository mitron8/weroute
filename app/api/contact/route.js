import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Simple email regex for validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, message, _honeypot } = body;

    // 1. Honeypot check for bots
    if (_honeypot) {
      // Silently accept without sending email
      return NextResponse.json({ success: true, message: 'Message received' }, { status: 200 });
    }

    // 2. Validate required fields
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ error: 'Please provide your full name.' }, { status: 400 });
    }

    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return NextResponse.json({ error: 'Please enter a message of at least 5 characters.' }, { status: 400 });
    }

    const cleanName = name.trim().slice(0, 100);
    const cleanEmail = email.trim().toLowerCase();
    const cleanCompany = (company || '').trim().slice(0, 100);
    const cleanMessage = message.trim().slice(0, 5000);

    const apiKey = process.env.RESEND_API_KEY;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || 'info@weroute.com';
    const senderEmail = process.env.CONTACT_SENDER_EMAIL || 'WeRoute Contact <onboarding@resend.dev>';

    // 3. Fallback for local development if RESEND_API_KEY is not yet added
    if (!apiKey) {
      console.warn(
        '[Contact API] RESEND_API_KEY is not set in environment variables. Simulating email send.\n',
        { cleanName, cleanEmail, cleanCompany, cleanMessage }
      );
      return NextResponse.json(
        {
          success: true,
          message: 'Message processed (simulated in development: add RESEND_API_KEY in .env.local to send live emails)',
        },
        { status: 200 }
      );
    }

    // 4. Send email via Resend
    const resend = new Resend(apiKey);

    const emailSubject = `New Contact Inquiry from ${cleanName}${cleanCompany ? ` (${cleanCompany})` : ''}`;

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
            .header { background-color: #080357; padding: 28px 32px; color: #ffffff; }
            .header h2 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.02em; }
            .header p { margin: 6px 0 0; font-size: 13px; color: #94a3b8; }
            .content { padding: 32px; }
            .field-row { margin-bottom: 20px; }
            .label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin-bottom: 6px; }
            .value { font-size: 15px; color: #0f172a; font-weight: 500; }
            .message-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap; }
            .footer { background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 20px 32px; font-size: 12px; color: #64748b; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Inquiry Received</h2>
              <p>Submitted via WeRoute Website Contact Form</p>
            </div>
            <div class="content">
              <div class="field-row">
                <div class="label">Client Name</div>
                <div class="value">${cleanName}</div>
              </div>
              <div class="field-row">
                <div class="label">Email Address</div>
                <div class="value"><a href="mailto:${cleanEmail}" style="color: #2563eb; text-decoration: none;">${cleanEmail}</a></div>
              </div>
              ${cleanCompany ? `
              <div class="field-row">
                <div class="label">Company</div>
                <div class="value">${cleanCompany}</div>
              </div>
              ` : ''}
              <div class="field-row" style="margin-bottom: 0;">
                <div class="label">Message</div>
                <div class="message-box">${cleanMessage.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
              </div>
            </div>
            <div class="footer">
              This message was sent from the WeRoute Contact Page. You can reply directly to this email to contact ${cleanName}.
            </div>
          </div>
        </body>
      </html>
    `;

    const plainText = `
New Contact Inquiry from WeRoute Website:

Name: ${cleanName}
Email: ${cleanEmail}
Company: ${cleanCompany || 'N/A'}

Message:
${cleanMessage}
    `;

    const { data, error } = await resend.emails.send({
      from: senderEmail,
      to: [receiverEmail],
      replyTo: cleanEmail,
      subject: emailSubject,
      text: plainText,
      html: emailHtml,
    });

    if (error) {
      console.error('[Resend Error]', error);
      return NextResponse.json(
        { error: error.message || 'Failed to send message via email provider. Please try again later.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
  } catch (err) {
    console.error('[Contact API Unhandled Error]', err);
    return NextResponse.json(
      { error: 'An unexpected server error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
