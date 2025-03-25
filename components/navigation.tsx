"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { BeefIcon as Burger, Menu, X, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useToast } from "@/components/ui/use-toast"

export default function Navigation() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) {
      toast({
        title: "Search Error",
        description: "Please enter a search term",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Searching",
      description: `Searching for: ${searchQuery}`,
    })
    setSearchQuery("")
  }

  return (
    <header className="relative w-full h-[657px] bg-[url('/placeholder.svg?height=657&width=1200')] bg-cover bg-center bg-no-repeat text-white">
      {/* Desktop Navigation */}
      <nav
        className={`hidden md:flex justify-between items-center w-full p-5 ${isScrolled ? "fixed top-0 left-0 z-50 bg-black/80 transition-all duration-300" : "absolute top-0 left-0 z-10 shadow-[inset_0px_50px_50px_-10px_rgba(0,0,0,1),inset_0px_100px_100px_-50px_rgba(0,0,0,0.5),inset_0px_150px_150px_-100px_rgba(0,0,0,0.2)]"}`}
        aria-label="Main navigation"
      >
        <div className="flex items-center text-2xl font-bold ml-5">
          <Burger className="mr-2 text-white" size={30} aria-hidden="true" />
          <span>Burger Business</span>
        </div>

        <ul className="flex mr-5 items-center">
          <li className="mx-4">
            <Link
              href="#"
              className="text-white uppercase font-semibold text-xl hover:text-[#F64B3C] transition-colors"
            >
              Home
            </Link>
          </li>
          <li className="mx-4">
            <Link
              href="#"
              className="text-white uppercase font-semibold text-xl hover:text-[#F64B3C] transition-colors"
            >
              Product
            </Link>
          </li>
          <li className="mx-4">
            <Link
              href="#"
              className="text-white uppercase font-semibold text-xl hover:text-[#F64B3C] transition-colors"
            >
              Promo
            </Link>
          </li>
          <li className="mx-4">
            <Link
              href="#"
              className="text-white uppercase font-semibold text-xl hover:text-[#F64B3C] transition-colors"
            >
              About
            </Link>
          </li>
          <li className="mx-4">
            <Link
              href="#"
              className="text-white uppercase font-semibold text-xl hover:text-[#F64B3C] transition-colors"
            >
              Contact
            </Link>
          </li>
          <li className="mx-4">
            <form onSubmit={handleSearch} className="flex items-center" role="search" aria-label="Site search">
              <Input
                type="search"
                placeholder="Search..."
                className="h-8 w-32 bg-transparent border-white text-white placeholder:text-gray-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search the site"
              />
              <Button type="submit" variant="ghost" size="icon" className="ml-1" aria-label="Submit search">
                <Search className="h-4 w-4 text-white" aria-hidden="true" />
              </Button>
            </form>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden flex justify-between items-center p-4 ${isScrolled ? "fixed bg-black/90" : "fixed bg-black/80"} top-0 left-0 w-full z-50 transition-all duration-300`}
        aria-label="Mobile navigation"
      >
        <div className="flex items-center text-xl font-bold">
          <Burger className="mr-2 text-white" size={24} aria-hidden="true" />
          <span className="text-red-500">Burger Business</span>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white" aria-label="Open menu">
              <Menu size={24} aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black/90 text-white">
            <div className="flex justify-end">
              <Button variant="ghost" size="icon" className="text-white" aria-label="Close menu">
                <X size={24} aria-hidden="true" />
              </Button>
            </div>
            <nav className="flex flex-col space-y-4 mt-8">
              <Link href="#" className="text-lg font-medium py-2 hover:text-[#F64B3C] transition-colors">
                Home
              </Link>
              <Link href="#" className="text-lg font-medium py-2 hover:text-[#F64B3C] transition-colors">
                Menu
              </Link>
              <Link href="#" className="text-lg font-medium py-2 hover:text-[#F64B3C] transition-colors">
                Chefs
              </Link>
              <Link href="#" className="text-lg font-medium py-2 hover:text-[#F64B3C] transition-colors">
                Contact
              </Link>
              <form
                onSubmit={handleSearch}
                className="flex items-center mt-4"
                role="search"
                aria-label="Mobile site search"
              >
                <Input
                  type="search"
                  placeholder="Search..."
                  className="h-10 bg-transparent border-white text-white placeholder:text-gray-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search the site"
                />
                <Button type="submit" variant="ghost" size="icon" className="ml-1" aria-label="Submit search">
                  <Search className="h-4 w-4 text-white" aria-hidden="true" />
                </Button>
              </form>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

