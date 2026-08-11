import ContactHero from "./components/ContactHero";
import ContactInfo from "./components/ContactInfo";
import PartnersSection from "./components/PartnersSection";

export const metadata = {
  title: 'Contact Us | WeRoute',
  description: 'Get in touch with WeRoute. We are a global enterprise software and AI development partner.',
  keywords: 'contact weroute, weroute support, enterprise software partner, ai development contact',
};

export default function ContactPage() {
  return (
    <main className="bg-[#f7f9fc] flex flex-col min-h-screen">
      <ContactHero />
      <ContactInfo />
      <PartnersSection />
    </main>
  );
}
