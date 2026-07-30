import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Nunito } from 'next/font/google';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`min-h-full flex flex-col ${nunito.className} ${nunito.variable}`}>
        {children}
        <Navbar/>
       
        <Footer/>
      </body>
    </html>
  );
}
