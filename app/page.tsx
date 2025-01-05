/* eslint-disable @typescript-eslint/no-unused-vars */
import AboutUs from "@/components/about-us";
import Albums from "@/components/albums";
import ContactUs from "@/components/contact-us";
import Hero from "@/components/hero";
import Hero2 from "@/components/hero2";
import Services from "@/components/services-section";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className="bg-[#f7f5ed] font-serif">
      <Hero />
      {/* <Hero2 /> */}
      <AboutUs />
      <Services />
      <Albums />
      <Testimonials />
      <ContactUs />
    </main>

  );
}
