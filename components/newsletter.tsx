"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";  
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Bell, CheckCircle2 } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    if (!phone.trim()) {
      toast({
        title: "Error",
        description: "Please enter your phone number for SMS notifications.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate SMS notification
      console.log(`SMS sent to ${phone}: Thank you for subscribing to Burger Business updates!`);
      
      setIsSuccess(true);
      
      toast({
        title: "Success!",
        description: `Thank you for subscribing! We've sent a confirmation to ${email} and an SMS to your phone.`,
      });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setEmail("");
        setPhone("");
        setIsSuccess(false);
      }, 3000);
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      aria-labelledby="newsletter-heading"
      className="py-12 bg-[#FCE8D5] text-center relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 
          id="newsletter-heading"
          className="text-3xl md:text-4xl font-bold text-[#E63946] mb-4"
        >
          Don't miss <span className="font-bold">Our Update</span>
        </h2>
        <p className="text-lg text-[#E63946] mb-2">
          Subscribe to our newsletter to receive updates on new menu items, promotions, and events.
        </p>
        <p className="text-lg text-[#E63946] mb-6">
          Be the first to know about our special offers and exclusive deals via email and SMS.
        </p>
      </motion.div>
      
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex flex-col items-center justify-center py-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.5 }}
              className="text-green-500 mb-4"
            >
              <CheckCircle2 size={60} />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl font-medium text-[#E63946]"
            >
              Thank you for subscribing!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center mt-2 text-[#E63946]"
            >
              <Bell className="mr-2" size={16} />
              <p>SMS notification sent to your phone</p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.form 
            key="form"
            onSubmit={handleSubmit} 
            className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-md mx-auto px-4"
            aria-labelledby="newsletter-form-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <span id="newsletter-form-heading" className="sr-only">Subscribe to our newsletter</span>
            <div className="w-full space-y-4">
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12"
                disabled={isSubmitting}
                aria-label="Email address"
                aria-required="true"
              />
              <Input
                type="tel"
                placeholder="Your Phone Number (for SMS)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full h-12"
                disabled={isSubmitting}
                aria-label="Phone number for SMS notifications"
                aria-required="true"
              />
            </div>
            <Button 
              type="submit"
              className="bg-[#E63946] hover:bg-[#d12836] text-white w-full md:w-auto h-12"
              disabled={isSubmitting}
              aria-label="Subscribe to newsletter"
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
              ) : "SUBSCRIBE"}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#E63946] opacity-10"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
}
