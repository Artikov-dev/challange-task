"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BeefIcon as Burger } from "lucide-react"
import OrderModal from "./order-modal"

interface Package {
  id: number
  title: string
  price: string
  description: string
}

export default function Packages() {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null)
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)

  const packages: Package[] = [
    {
      id: 1,
      title: "PACKAGE I",
      price: "$10.00",
      description: "Single burger with fries and a drink. Perfect for a quick meal.",
    },
    {
      id: 2,
      title: "PACKAGE II",
      price: "$20.00",
      description: "Two burgers with fries, onion rings, and two drinks. Great for sharing.",
    },
    {
      id: 3,
      title: "PACKAGE III",
      price: "$30.00",
      description: "Family meal with four burgers, large fries, onion rings, and four drinks.",
    },
  ]

  const handleOrderPackage = (pkg: Package) => {
    setSelectedPackage(pkg)
    setIsOrderModalOpen(true)
  }

  return (
    <section aria-labelledby="packages-heading" className="py-12 bg-[#F4E1C1]">
      <h2 id="packages-heading" className="text-4xl md:text-5xl font-bold text-[#F54B3B] text-center mb-10">
        Popular Package
      </h2>

      <div className="flex flex-col md:flex-row justify-evenly gap-8 px-4">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md text-center max-w-[445px] w-full"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#F54B3B] mb-4">{pkg.title}</h3>
            <Burger size={50} className="text-[#e16f23] mb-4" aria-hidden="true" />
            <p className="text-xl text-[#F54B3B] font-medium mb-4">{pkg.price}</p>
            <p className="text-[#F54B3B] mb-6">{pkg.description}</p>
            <Button
              onClick={() => handleOrderPackage(pkg)}
              className="bg-[#E63946] hover:bg-[#d12836] text-white rounded-full px-10 py-4 uppercase font-bold"
              aria-label={`Order ${pkg.title} for ${pkg.price}`}
            >
              ORDER NOW
            </Button>
          </div>
        ))}
      </div>

      {selectedPackage && (
        <OrderModal
          isOpen={isOrderModalOpen}
          onClose={() => setIsOrderModalOpen(false)}
          productName={selectedPackage.title}
          productPrice={selectedPackage.price}
        />
      )}
    </section>
  )
}

