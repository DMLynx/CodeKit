import Image from "next/image";
import Link from "next/link";

export default function TrendingDestinations() {
  const destinations = [
    {
      id: "bangkok",
      name: "Bangkok, Thailand",
      price: 120,
      image: "/Image/Bangkok.png",
      isTopRated: true,
      description: "Experience the vibrant street life, ornate shrines, and bustling markets of Thailand's capital."
    },
    {
      id: "tokyo",
      name: "Tokyo, Japan",
      price: 250,
      image: "/Image/Tokyo,Japan.png",
      isTopRated: false,
      description: "Discover a perfect blend of futuristic technology and ancient tradition in the heart of Japan."
    },
    {
      id: "paris",
      name: "Paris, France",
      price: 180,
      image: "/Image/Paris.png",
      isTopRated: false,
      description: "Fall in love with the City of Light, home to world-class art, iconic landmarks, and cozy cafes."
    },
    {
      id: "london",
      name: "London, UK",
      price: 210,
      image: "/Image/London.png",
      isTopRated: false,
      description: "Explore the historic capital of the UK, famous for its royal heritage and diverse culture."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 font-jakarta">Trending Destinations</h2>
          <p className="text-sm text-gray-500 mt-1">Handpicked favorites for your next adventure</p>
        </div>
        <Link href="/hotels" className="text-sm font-semibold text-primary hover:underline">
          View all
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((dest) => (
          <Link href={`/hotels?destination=${dest.id}`} key={dest.id} className="group block cursor-pointer">
            <div className="relative h-[420px] rounded-2xl overflow-hidden mb-3">
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-white text-sm leading-relaxed mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {dest.description}
                </p>
                <span className="text-primary-foreground text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full w-fit">
                  Discover more
                </span>
              </div>

              {dest.isTopRated && (
                <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded text-[10px] font-bold tracking-wider uppercase shadow-sm group-hover:opacity-0 transition-opacity duration-300">
                  Top Rated
                </div>
              )}
            </div>
            <h3 className="text-base font-semibold text-gray-900 group-hover:text-primary transition-colors">{dest.name}</h3>
            <p className="text-sm text-gray-500">
              Starting from <span className="font-semibold text-primary">${dest.price}</span>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
