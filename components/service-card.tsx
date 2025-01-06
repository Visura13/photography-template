/* eslint-disable @next/next/no-img-element */
'use client'

import { Card } from "@/components/ui/card"
import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface ServiceCardProps {
  service: {
    title: string
    image: string
  }
  index: number
}

export function ServiceCard({ service, }: ServiceCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.75, delay: 0.7 }}
      className="hover:z-10"
    >
      <Card className="rounded-none w-full min-w-80 max-w-sm overflow-hidden relative h-80 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md cursor-pointer hover:shadow-2xl">
        <img
          alt={service.title + ' image'}
          className="absolute inset-0 w-full h-full object-cover"
          src={service.image}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-[#FAF9F6] p-4">
          <h3 className="text-xl font-semibold text-black">{service.title}</h3>
        </div>
      </Card>
    </motion.div>
  )
}



