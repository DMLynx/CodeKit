import { Waves, Flower2, Utensils, Dumbbell, Wifi, Umbrella, ChevronDown } from "lucide-react";

interface HotelInfoSectionProps {
  hotel: any;
}

const AmenityIcons: any = {
  "3 Outdoor Pools": "/Image/OutdoorPools.png",
  "Full-service Spa": "/Image/Full-service.png",
  "5 Restaurants": "/Image/Restaurants.png",
  "Gym & Fitness": "/Image/GymFitness.png",
  "Free High-speed Wi-Fi": "/Image/FreeHigh-speed.png",
  "Private Beach": "/Image/PrivateBeach.png",
};

export default function HotelInfoSection({ hotel }: HotelInfoSectionProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
      {/* Left: Overview & Amenities */}
      <div className="lg:col-span-8 space-y-12">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-6">Overview</h2>
          <p className="text-gray-600 leading-relaxed text-[15px]">
            {hotel.description}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-8">Popular Amenities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4">
            {hotel.amenities.map((item: any, idx: number) => {
              const iconUrl = AmenityIcons[item.label];
              return (
                <div key={idx} className="flex items-center gap-4 text-[14px] text-gray-700 font-medium">
                  <div className="w-6 h-6 shrink-0 flex items-center justify-center">
                    {iconUrl ? (
                      <img src={iconUrl} alt={item.label} className="w-full h-full object-contain" />
                    ) : (
                      <Waves className="h-5 w-5 text-primary" />
                    )}
                  </div>
                  {item.label}
                </div>
              );
            })}
          </div>
          <button className="mt-10 text-primary font-bold text-sm flex items-center gap-1 hover:underline">
            See all 45 amenities <ChevronDown className="h-4 w-4" />
          </button>
        </section>
      </div>

      {/* Right: Rating & Map */}
      <div className="lg:col-span-4 space-y-8">
        {/* Rating Box */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          <div className="flex justify-between items-start mb-10">
            <div>
              <div className="text-xl font-bold text-gray-900 mb-1">{hotel.ratings.label}</div>
              <div className="text-[13px] text-gray-500">{hotel.ratings.reviewsCount} verified reviews</div>
            </div>
            <div className="bg-[#003580] text-white font-bold text-2xl h-14 w-14 flex items-center justify-center rounded-t-xl rounded-br-xl rounded-bl-sm">
              {hotel.ratings.overall}
            </div>
          </div>

          <div className="space-y-6">
            {hotel.ratings.categories.map((cat: any, idx: number) => (
              <div key={idx}>
                <div className="flex justify-between text-[13px] mb-2">
                  <span className="font-bold text-gray-900">{cat.name}</span>
                  <span className="font-bold text-gray-500">{cat.score}</span>
                </div>
                <div className="h-[3px] w-full bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary" 
                    style={{ width: `${(cat.score / 10) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Box */}
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm cursor-pointer group">
          <div className="h-52 bg-blue-50 relative">
            <img 
              src="/Image/MapPage3.png" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              alt="Map"
            />
          </div>
          <div className="p-5">
            <h3 className="font-bold text-gray-900 mb-1">Near Spinalonga Island</h3>
            <p className="text-[13px] text-gray-500">15 min walk to city center</p>
          </div>
        </div>
      </div>
    </div>
  );
}
