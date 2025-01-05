'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { heroImages } from '@/constants';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Automatically change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Handlers for manual image navigation
  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % heroImages.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? heroImages.length - 1 : prevImage - 1
    );
  };

  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={heroImages[currentImage]}
        alt="Hero background"
        className="absolute inset-0 object-cover w-full h-full transition-opacity duration-1000"
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl font-serif text-white text-5xl md:text-6xl lg:text-7xl"
        >
            Modern Art
          <br />
          Photography
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="max-w-2xl mt-3 text-lg text-white/90"
        >
          Join with us to make your life successful.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col mt-6 sm:flex-row gap-4"
        >
          <Button asChild size="lg" variant="outline" className="text-white bg-transparent hover:bg-white/10 hover:text-white rounded-none">
            <Link href="#Consultation">Contact Us</Link>
          </Button>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevImage}
        className="absolute left-2 sm:left-4 top-[47%] sm:top-1/2 transform -translate-y-1/2 text-zinc-200 p-3 rounded-full hover:bg-black/70 transition"
      >
        <ChevronLeft /> 
      </button>
      <button
        onClick={handleNextImage}
        className="absolute right-2 sm:right-4 top-[47%] sm:top-1/2 transform -translate-y-1/2 text-zinc-200 p-3 rounded-full hover:bg-black/70 transition"
      >
        <ChevronRight />
      </button>
    </section>
  );
};

export default Hero;


