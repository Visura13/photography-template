'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ServiceCard } from './service-card'
import { services } from '@/constants'


export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} id="Services" className="w-full max-w-7xl mx-auto pt-12 pb-20">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.h2 
          className="text-5xl text-[#232323] font-semibold tracking-tighter text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.75, delay:0.3 }}
        >
          Our Services.
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.75, delay:0.5 }}
          className="h-1 w-24 bg-gray-900 mb-12 mx-auto" 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}


