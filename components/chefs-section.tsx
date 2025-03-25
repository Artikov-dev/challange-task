"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useMediaQuery } from "@/hooks/use-media-query";

interface Chef {
  id: number;
  name: string;
  role: string;
  image: string;
}

export default function ChefsSection() {
  const chefs: Chef[] = [
    {
      id: 1,
      name: "AIDEN HUNTER",
      role: "Founder",
      image: "/jigaa.png",
    },
    {
      id: 2,
      name: "ETHEL RAMSEY",
      role: "Co-Founder",
      image: "/jiga-qizi.png",
    },
    {
      id: 3,
      name: "FANNIE STEWART",
      role: "Co-Founder",
      image: "/jiga-qizi.png",
    },
    {
      id: 4,
      name: "GORDON RAMSAY",
      role: "Head Chef",
      image: "/jigaa.png",
    },
    {
      id: 5,
      name: "JULIA CHILD",
      role: "Executive Chef",
      image: "/jigaa.png",
    },
  ];

  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isMobile = useMediaQuery("(max-width: 767px)");
  
  const [startIndex, setStartIndex] = useState(0);
  const [chefsPerView, setChefsPerView] = useState(3);
  
  useEffect(() => {
    if (isMobile) {
      setChefsPerView(1);
    } else if (isTablet) {
      setChefsPerView(2);
    } else {
      setChefsPerView(3);
    }
  }, [isMobile, isTablet]);
  
  const visibleChefs = chefs.slice(startIndex, startIndex + chefsPerView);
  
  const handlePrev = () => {
    setStartIndex(Math.max(0, startIndex - 1));
  };
  
  const handleNext = () => {
    setStartIndex(Math.min(chefs.length - chefsPerView, startIndex + 1));
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300 } }
  };

  return (
    <section 
      aria-labelledby="chefs-heading"
      className="flex flex-col items-center justify-center text-center py-12 bg-[#f8f1e4] relative"
    >
      <motion.h2 
        id="chefs-heading"
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F54B3B] mb-5"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Our Chef
      </motion.h2>
      
      <motion.p 
        className="text-lg md:text-xl text-[#F54B3B] mb-14 max-w-[464px] px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Meet the talented culinary experts behind our delicious burgers. Our chefs bring years of experience and passion to every dish.
      </motion.p>
      
      <div className="relative w-full max-w-6xl px-4">
        <motion.div 
          className="flex overflow-hidden justify-around gap-5" 
          aria-live="polite"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {visibleChefs.map((chef) => (
            <motion.div 
              key={chef.id} 
              className="flex flex-col items-center gap-5 w-full max-w-[331px]"
              variants={item}
              whileHover={{ y: -10 }}
            >
              <motion.img 
                src={chef.image || "/placeholder.svg"} 
                alt={`${chef.name} - ${chef.role} at Burger Business`} 
                className="w-[180px] h-[180px] rounded-full object-cover"
                whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(245, 75, 59, 0.3)" }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-[#F54B3B] uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {chef.name}
              </motion.h3>
              <motion.p 
                className="text-sm md:text-base font-semibold text-[#F54B3B] mb-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {chef.role}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button 
            onClick={handlePrev} 
            disabled={startIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#F54B3B]/80 hover:bg-[#F54B3B] text-white rounded-full h-10 w-10 p-0"
            aria-label="Previous chef"
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous chef</span>
          </Button>
          
          <Button 
            onClick={handleNext} 
            disabled={startIndex >= chefs.length - chefsPerView}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#F54B3B]/80 hover:bg-[#F54B3B] text-white rounded-full h-10 w-10 p-0"
            aria-label="Next chef"
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next chef</span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
