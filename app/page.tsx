/* eslint-disable @typescript-eslint/no-unused-vars */
import AboutUs from "@/components/about-us";
// import Albums from "@/components/albums";
// import ContactUs from "@/components/contact-us";
// import Testimonials from "@/components/testimonials";
import Hero from "@/components/hero";
import Services from "@/components/services-section";

import dynamic from 'next/dynamic';
const Albums = dynamic(() => import('@/components/albums'), { ssr: false });
const Testimonials = dynamic(() => import('@/components/testimonials'), { ssr: false });
const ContactUs = dynamic(() => import('@/components/contact-us'), { ssr: false });

export default function Home() {
  return (
    <main className="bg-[#f7f5ed] font-serif">
      <Hero />
      <AboutUs />
      <Services />
      <Albums />
      <Testimonials />
      <ContactUs />
    </main>

  );
}
