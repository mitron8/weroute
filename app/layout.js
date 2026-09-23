import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import { Plus_Jakarta_Sans, DM_Sans } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata = {
  title: "WeRoute | Engineering the Next Generation of Enterprise Technology",
  description:
    "WeRoute helps enterprises design, modernize, secure, integrate, and operate technology across networking, cloud, cybersecurity, AI, software, and automation. One team takes the work from architecture through production, so strategy and delivery never sit with different vendors.",
  keywords: [
    "Enterprise Technology Solutions",
    "Enterprise IT Services",
    "Technology Consulting Services",
    "Enterprise IT Solutions Company",
    "Digital Transformation Services",
    "Enterprise Technology Company",
    "IT Infrastructure Services",
    "Enterprise Technology Consulting",
    "Network Solutions",
    "Cybersecurity Services",
    "Cloud & DevOps Services",
    "AI & Automation Services",
    "Managed IT Services",
    "Professional IT Services",
    "Enterprise Software Development",
    "Technology Staffing Services",
    "Network Observability",
    "Infrastructure Automation",
  ],
  metadataBase: new URL("https://weroute.com"),
  openGraph: {
    title: "WeRoute | Engineering the Next Generation of Enterprise Technology",
    description:
      "WeRoute helps enterprises design, modernize, secure, integrate, and operate technology across networking, cloud, cybersecurity, AI, software, and automation.",
    url: "https://weroute.com",
    siteName: "WeRoute",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WeRoute | Engineering the Next Generation of Enterprise Technology",
    description:
      "WeRoute helps enterprises design, modernize, secure, integrate, and operate technology across networking, cloud, cybersecurity, AI, software, and automation.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`min-h-full flex flex-col ${plusJakartaSans.className} ${plusJakartaSans.variable} ${dmSans.variable} antialiased`}>
        <SmoothScroll>
          {children}
          <Navbar/>
          <Footer/>
        </SmoothScroll>
      </body>
    </html>
  );
}
