"use client";

import { testimonials } from "@/constants";
import { motion, useInView } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next testimonial
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to move to the previous testimonial
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-Swipe Logic
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000); // Auto slide every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} id="testimonials" className="max-w-6xl mx-auto mt-20">
      <div className="container mx-auto">
        {/* Section Title */}
        <motion.h2 
          className="text-5xl text-[#232323] font-semibold tracking-tighter text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.75, delay:0.3 }}
        >
          Notes From Our Clients.
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.75, delay:0.5 }}
          className="h-1 w-24 bg-blue-950 mb-12 mx-auto" 
        />

        {/* Testimonial Display */}
        <div className="bg-[#FAF9F6] shadow-lg relative text-center py-8 px-8 md:px-32 min-h-[540px] md:min-h-96">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="mx-auto w-24 h-24 object-cover rounded-full mb-4 shadow-lg"
          />

          {/* Testimonial Content */}
          <blockquote className="text-gray-600 text-lg leading-relaxed mb-4">
            “ {testimonials[currentIndex].feedback} ”
          </blockquote>

          {/* Name */}
          <p className="font-semibold text-sm uppercase text-gray-700">
            — {testimonials[currentIndex].name}
          </p>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 text-3xl text-gray-400 hover:text-gray-600"
            aria-label="Previous testimonial"
          >
            &larr;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 text-3xl text-gray-400 hover:text-gray-600"
            aria-label="Next testimonial"
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
