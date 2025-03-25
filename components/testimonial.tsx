export default function Testimonial() {
  return (
    <section
      aria-labelledby="testimonial-heading"
      className="py-16 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center text-white"
    >
      <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto px-4">
        <h2 id="testimonial-heading" className="text-3xl md:text-4xl font-normal mb-6 font-['Calistoga']">
          Barry Henderson
        </h2>
        <blockquote>
          <p className="text-lg md:text-2xl font-bold font-['Archivo']">
            "The burgers at Burger Business are simply amazing! The quality of ingredients and the taste are unmatched.
            I've been a regular customer for years and have never been disappointed."
          </p>
          <footer className="mt-4 text-sm md:text-base">
            <cite>- Barry Henderson, Loyal Customer</cite>
          </footer>
        </blockquote>
      </div>
    </section>
  )
}

