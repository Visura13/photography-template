"use client"

import { aboutUsPara } from "@/constants"
import { TextGenerateEffect } from "./text-generate"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const AboutUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  return (
    <section ref={ref} className="pt-12 pb-10 px-5" id="About">
      <motion.h2 
          className="text-5xl text-[#232323] font-semibold tracking-tighter text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.75, delay:0.3 }}
        >
          About Us.
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.75, delay:0.5 }}
          className="h-1 w-24 bg-gray-900 mb-12 mx-auto" 
        />

      <div className="flex flex-col items-center mt-10 md:mx-40">
        
        <TextGenerateEffect 
            className="text-balance text-center text-xl "
            words={aboutUsPara}
        />
       
      </div>
    </section>
  )
}

export default AboutUs