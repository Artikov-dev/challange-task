"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import OrderModal from "./order-modal"

export default function Hero() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)

  const handleOrderNow = () => {
    setIsOrderModalOpen(true)
  }

  return (
    <section aria-labelledby="hero-heading" className="relative">
      <div className="flex flex-col items-start justify-center pl-10 max-w-[600px] absolute top-1/2 left-0 transform -translate-y-1/2 md:pl-10 px-4 text-center md:text-left">
        <h1
          id="hero-heading"
          className="text-4xl md:text-6xl lg:text-[89px] font-bold text-white mb-6 md:mb-14 mt-5 leading-tight"
        >
          Get Cashback up to 50%
        </h1>
        <p className="text-lg md:text-2xl lg:text-3xl text-white mb-6 max-w-[529px]">
          Enjoy our delicious burgers and get up to 50% cashback on your first order. Limited time offer!
        </p>
        <Button
          onClick={handleOrderNow}
          className="bg-[#F64B3C] hover:bg-[#f01c2d] text-white rounded-full py-4 md:py-6 px-10 md:px-20 text-lg md:text-xl lg:text-2xl font-normal"
          aria-label="Order now and get cashback"
        >
          Order Now
        </Button>

        <OrderModal isOpen={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} productName="Special Burger" />
      </div>
    </section>
  )
}

