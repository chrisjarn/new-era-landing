import SiteNavbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SiteNavbar />
      <main className="pt-16">
        <Hero />
        <Stats />
        <Services />
        <Process />
        <About />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
