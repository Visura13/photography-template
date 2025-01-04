'use client'
import { motion } from 'framer-motion';

const Service = () => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
    >
      <motion.img
        src="/parallax1.jpg"
        alt="Card Image"
        className="w-full h-48 object-cover"
        initial={{ y: 100, opacity: 0 }}
        whileHover={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.3 }
        }}
      />
    </motion.div>
  );
};

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Service />
      <Service />
    </div>
  );
};

export default Services;
