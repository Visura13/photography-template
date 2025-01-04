"use client"
import { images } from "@/constants"
import { ParallaxScroll } from "./parallax-scroll"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const Albums = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  return (
    <section ref={ref} id="work" className="my-12 mx-4">
      <motion.h2 
          className="text-center text-5xl font-semibold tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.75, delay:0.3 }}
        >
          Our Work.
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.75, delay:0.5 }}
          className="h-1 w-24 bg-blue-950 mb-12 mx-auto" 
        />
        {/* <h2 className="text-center text-5xl font-semibold tracking-tight mb-10">Albums</h2> */}
        <ParallaxScroll images={images} />
    </section>
  )
}

export default Albums