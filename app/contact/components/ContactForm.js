"use client";

import { useState } from 'react';
import { Send, User, Mail, MessageSquare, Building } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="clay-light bg-[#f7f9fc] border border-[#050849]/5 p-8 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
        <div className="w-16 h-16 bg-white clay-badge-light text-[#A7BF73] flex items-center justify-center mb-6">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#080357] mb-2">Message Sent!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for reaching out. Our team will get back to you shortly.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-[#080357] font-semibold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="clay-light bg-white border border-[#050849]/5 p-8 sm:p-10 relative overflow-hidden h-full">
      {/* Decorative background blur */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-100/50 rounded-full blur-3xl pointer-events-none" />
      
      <h3 className="text-2xl sm:text-3xl font-bold text-[#080357] mb-2 relative z-10">Get in Touch</h3>
      <p className="text-gray-500 mb-8 text-sm sm:text-base relative z-10">We'd love to hear from you. Fill out the form below.</p>
      
      <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="block w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#080357]/20 focus:border-[#080357] transition-colors bg-white/70 backdrop-blur-sm shadow-sm"
              placeholder="John Doe"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="block w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#080357]/20 focus:border-[#080357] transition-colors bg-white/70 backdrop-blur-sm shadow-sm"
              placeholder="you@company.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">Company (Optional)</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Building className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="block w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#080357]/20 focus:border-[#080357] transition-colors bg-white/70 backdrop-blur-sm shadow-sm"
              placeholder="Your Organization"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
          <div className="relative">
            <div className="absolute top-4 left-4 pointer-events-none">
              <MessageSquare className="h-5 w-5 text-gray-400" />
            </div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="block w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#080357]/20 focus:border-[#080357] transition-colors bg-white/70 backdrop-blur-sm shadow-sm resize-none"
              placeholder="How can we help you?"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center items-center py-4 px-4 text-base font-semibold text-white bg-[#080357] clay-btn-accent disabled:opacity-70 disabled:cursor-not-allowed group mt-4"
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            <span className="flex items-center">
              Send Message
              <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
          )}
        </button>
      </form>
    </div>
  );
}
