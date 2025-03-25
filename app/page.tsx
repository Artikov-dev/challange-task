import Hero from "@/components/hero"
import ChefsSection from "@/components/chefs-section"
import BurgerCard from "@/components/burger-card"
import Statistics from "@/components/statistics"
import Packages from "@/components/packages"
import Testimonial from "@/components/testimonial"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"
import StructuredData from "@/components/structured-data"

export default function Home() {
  return (
    <main className="min-h-screen">
      <StructuredData />
      <Hero />
      <ChefsSection />
      <BurgerCard
        title="Best Burger"
        description="Our signature burger made with premium Angus beef, fresh vegetables, and our secret sauce. A must-try for burger lovers!"
        imageSrc="/placeholder.svg?height=400&width=400"
        bgColor="bg-[#E63946]"
        buttonColor="bg-white text-[#E63946]"
      />
      <BurgerCard
        title="Big Burger"
        description="Double patty burger with melted cheese, crispy bacon, and all the fixings. Perfect for those with a big appetite!"
        imageSrc="/placeholder.svg?height=400&width=400"
        bgColor="bg-[#F4E1C1]"
        buttonColor="bg-[#E63946] text-white"
        textColor="text-[#E63946]"
        reverse={true}
      />
      <Statistics />
      <Packages />
      <Testimonial />
      <Newsletter />
      <Footer />
    </main>
  )
}

