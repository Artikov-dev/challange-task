"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Statistics() {
  const [customerCount, setCustomerCount] = useState(0);
  const [outletCount, setOutletCount] = useState(0);
  const [countryCount, setCountryCount] = useState(0);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  useEffect(() => {
    if (isInView) {
      const customerDuration = 2000; // 2 seconds
      const outletDuration = 2500;
      const countryDuration = 1500;
      
      const customerIncrement = 7000 / (customerDuration / 16); // 16ms is approx one frame at 60fps
      const outletIncrement = 109 / (outletDuration / 16);
      const countryIncrement = 35 / (countryDuration / 16);
      
      const customerInterval = setInterval(() => {
        setCustomerCount(prev => {
          const newValue = prev + customerIncrement;
          return newValue >= 7000 ? 7000 : newValue;
        });
      }, 16);
      
      const outletInterval = setInterval(() => {
        setOutletCount(prev => {
          const newValue = prev + outletIncrement;
          return newValue >= 109 ? 109 : newValue;
        });
      }, 16);
      
      const countryInterval = setInterval(() => {
        setCountryCount(prev => {
          const newValue = prev + countryIncrement;
          return newValue >= 35 ? 35 : newValue;
        });
      }, 16);
      
      return () => {
        clearInterval(customerInterval);
        clearInterval(outletInterval);
        clearInterval(countryInterval);
      };
    }
  }, [isInView]);

  return (
    <section 
      ref={ref}
      aria-labelledby="statistics-heading"
      className="flex flex-col items-center justify-center text-center py-12 bg-[#E63946] text-white"
    >
      <motion.h2 
        id="statistics-heading"
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Statistics
      </motion.h2>
      
      <motion.p 
        className="text-lg md:text-2xl lg:text-[27px] mb-14 max-w-[685px] px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Our growth and reach across the globe. We're proud to serve thousands of customers in multiple countries.
      </motion.p>
      
      <div className="flex flex-col md:flex-row justify-evenly items-center gap-10 w-full px-4">
        <motion.div 
          className="border-4 border-white rounded-full w-[200px] h-[200px] md:w-[232px] md:h-[231px] flex flex-col justify-center items-center text-2xl font-bold"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.5)" }}
        >
          <span aria-label="7 thousand customers">{Math.round(customerCount / 1000)}k</span> <br /> CUSTOMER
        </motion.div>
        
        <motion.div 
          className="border-4 border-white rounded-full w-[200px] h-[200px] md:w-[232px] md:h-[231px] flex flex-col justify-center items-center text-2xl font-bold"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.5)" }}
        >
          <span aria-label="109 outlets">{Math.round(outletCount)}</span> <br /> OUTLETS
        </motion.div>
        
        <motion.div 
          className="border-4 border-white rounded-full w-[200px] h-[200px] md:w-[232px] md:h-[231px] flex flex-col justify-center items-center text-2xl font-bold"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.5)" }}
        >
          <span aria-label="35 countries">{Math.round(countryCount)}</span> <br /> COUNTRY
        </motion.div>
      </div>
    </section>
  );
}
