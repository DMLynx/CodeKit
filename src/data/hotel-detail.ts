export const hotelDetail = {
  id: "grand-azure-resort",
  name: "Grand Azure Resort & Spa, Elounda",
  type: "REORT", // As per user's request (typo from screenshot)
  stars: 5,
  location: "Elounda Bay, Crete, 72053, Greece",
  coordinates: { lat: 35.25, lng: 25.72 },
  breadcrumbs: ["Home", "Greece", "Crete Hotels", "Grand Azure Resort & Spa"],
  description: "Experience unparalleled luxury at the Grand Azure Resort & Spa, nestled on the pristine shores of Elounda Bay. This architectural masterpiece blends traditional Cretan charm with ultra-modern design, offering guests breathtaking panoramic views of the Mediterranean. Whether you're seeking a romantic getaway or a rejuvenation retreat, our world-class amenities and personalized service ensure a stay that transcends the ordinary.",
  images: [
    "/Image/MainImg3.png",
    "/Image/Img3-1.png",
    "/Image/Img3-2.png",
    "/Image/Img3-3.png",
    "/Image/Img3-4.png"
  ],
  amenities: [
    { icon: "Waves", label: "3 Outdoor Pools" },
    { icon: "Flower2", label: "Full-service Spa" },
    { icon: "Utensils", label: "5 Restaurants" },
    { icon: "Dumbbell", label: "Gym & Fitness" },
    { icon: "Wifi", label: "Free High-speed Wi-Fi" },
    { icon: "Umbrella", label: "Private Beach" }
  ],
  ratings: {
    overall: 9.2,
    label: "Excellent",
    reviewsCount: 1248,
    categories: [
      { name: "Cleanliness", score: 9.5 },
      { name: "Service", score: 9.2 },
      { name: "Location", score: 8.9 }
    ]
  },
  rooms: [
    {
      id: "presidential-suite",
      name: "Presidential Sea Front Suite",
      tag: "LIMITED TIME OFFER",
      size: "85m²",
      view: "Panoramic Sea View",
      extra: "Infinity Pool Access",
      sleeps: 4,
      originalPrice: 1295,
      price: 862,
      options: [
        "Free Airport Transfer",
        "All-Inclusive Premium"
      ],
      stock: "Only 1 room left!",
      buttonColor: "bg-secondary"
    },
    {
      id: "deluxe-garden",
      name: "Deluxe Garden View Room",
      size: "32m²",
      view: "Balcony • Garden View",
      extra: "1 King Bed",
      sleeps: 2,
      originalPrice: 345,
      price: 264,
      options: [
        "Free Cancellation",
        "Breakfast Included"
      ],
      buttonColor: "bg-primary"
    },
    {
      id: "junior-suite",
      name: "Junior Suite with Private Pool",
      size: "45m²",
      view: "Private Pool • Sea View",
      extra: "King Bed",
      sleeps: 3,
      originalPrice: 626,
      price: 445,
      options: [
        "Free Cancellation",
        "All-Inclusive"
      ],
      stock: "Only 2 rooms left!",
      buttonColor: "bg-primary"
    }
  ],
  reviews: [
    {
      id: 1,
      author: "Sophia Martinez",
      country: "United Kingdom",
      avatar: "SM",
      bgColor: "bg-blue-100",
      textColor: "text-blue-800",
      rating: 5,
      date: "May 12, 2024",
      comment: "An absolute paradise. The views from the Presidential Suite are unmatched. The service was impeccable from start to finish."
    },
    {
      id: 2,
      author: "James Wilson",
      country: "United States",
      avatar: "JW",
      bgColor: "bg-pink-100",
      textColor: "text-pink-800",
      rating: 5,
      date: "Apr 28, 2024",
      comment: "Excellent facilities and great breakfast selection. The private beach is beautiful, though the city center is a bit of a walk."
    },
    {
      id: 3,
      author: "Anna Kowalski",
      country: "Germany",
      avatar: "AK",
      bgColor: "bg-orange-100",
      textColor: "text-orange-800",
      rating: 5,
      date: "Apr 15, 2024",
      comment: "The spa treatments were heavenly. Truly a five-star experience. We will definitely be coming back next summer."
    }
  ]
};
