export default function StructuredData() {
  const restaurantData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Burger Business",
    image: "https://www.example.com/images/burger-business.jpg",
    url: "https://www.example.com",
    telephone: "+1-123-456-7890",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Burger Street",
      addressLocality: "Burger City",
      addressRegion: "BC",
      postalCode: "12345",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.7128,
      longitude: -74.006,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "11:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "12:00",
        closes: "23:00",
      },
    ],
    menu: "https://www.example.com/menu",
    servesCuisine: ["American", "Burgers", "Fast Food"],
    priceRange: "$$",
    paymentAccepted: "Cash, Credit Card",
    currenciesAccepted: "USD",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "1024",
    },
    offers: [
      {
        "@type": "Offer",
        name: "Best Burger",
        description: "Our signature burger made with premium Angus beef, fresh vegetables, and our secret sauce.",
        price: "10.99",
        priceCurrency: "USD",
        availability: "InStock",
      },
      {
        "@type": "Offer",
        name: "Big Burger",
        description: "Double patty burger with melted cheese, crispy bacon, and all the fixings.",
        price: "14.99",
        priceCurrency: "USD",
        availability: "InStock",
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantData) }} />
}

