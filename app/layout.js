import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import { Darker_Grotesque } from 'next/font/google';

const darkerGrotesque = Darker_Grotesque({
  subsets: ['latin'],
  variable: '--font-darker-grotesque',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`min-h-full flex flex-col ${darkerGrotesque.className} ${darkerGrotesque.variable}`}>
        <SmoothScroll>
          {children}
          <Navbar/>
          <Footer/>
        </SmoothScroll>
      </body>
    </html>
  );
}
