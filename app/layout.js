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
