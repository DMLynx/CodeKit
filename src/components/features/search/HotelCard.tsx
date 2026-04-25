import { MapPin, Star, Wifi, Coffee, Car, Dumbbell, Waves, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

interface HotelCardProps {
  variant?: "normal" | "flash";
  data: any;
}

export default function HotelCard({ variant = "normal", data }: HotelCardProps) {
  const hotelId = data.id || "grand-azure-resort"; // Fallback for demo

  const renderStars = (count: number) => {
    return Array(count).fill(0).map((_, i) => (
      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
    ));
  };

  const getAmenityIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "free wi-fi": return <Wifi className="h-3 w-3" />;
      case "breakfast": return <Coffee className="h-3 w-3" />;
      case "airport shuttle": return <Car className="h-3 w-3" />;
      case "gym": return <Dumbbell className="h-3 w-3" />;
      case "pool":
      case "private beach": return <Waves className="h-3 w-3" />;
      default: return null;
    }
  };

  if (variant === "flash") {
    return (
      <div className="flex bg-white overflow-hidden border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
        <Link href={`/hotels/${hotelId}`} className="relative w-48 shrink-0 block">
          <img src={data.imageUrl} alt={data.name} className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" />
          <div className="absolute top-2 left-0 bg-secondary text-white text-[10px] font-bold px-2 py-1 rounded-r shadow">
            {data.discount}
          </div>
        </Link>
        <div className="flex-1 p-4 flex justify-between">
          <div>
            <div className="flex items-center gap-1 mb-1">
              <Link href={`/hotels/${hotelId}`}>
                <h3 className="text-base font-semibold text-gray-900 hover:text-primary transition-colors">{data.name}</h3>
              </Link>
              <div className="flex">{renderStars(data.stars)}</div>
            </div>
            <div className="flex items-center text-xs text-gray-500">
              <MapPin className="h-3 w-3 mr-1" />
              {data.location}
            </div>
          </div>
          <div className="flex flex-col items-end justify-between">
            <div className="text-right">
              <div className="text-xs text-gray-400 line-through">${data.originalPrice}</div>
              <div className="text-lg font-bold text-secondary">${data.price} <span className="text-[10px] text-gray-500 font-normal">/night</span></div>
            </div>
            <Link href={`/hotels/${hotelId}`}>
              <Button size="sm" className="bg-secondary hover:bg-[#c2185b] px-6 text-xs h-8">
                Claim
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row bg-white border-[3px] border-[#ffca00] overflow-hidden transition-all duration-300">
      <Link href={`/hotels/${hotelId}`} className="relative w-full sm:w-[320px] shrink-0 h-52 sm:h-auto block overflow-hidden cursor-pointer group">
        <img src={data.imageUrl} alt={data.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        {data.topChoice && (
          <div className="absolute top-3 left-3 bg-white text-[#006ce4] text-[11px] font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
            <div className="w-3.5 h-3.5 bg-[#006ce4] rounded-full flex items-center justify-center">
              <Check className="h-2 w-2 text-white stroke-[4px]" />
            </div>
            Top Choice
          </div>
        )}
      </Link>
      
      <div className="flex-1 p-5 flex flex-col justify-between">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <Link href={`/hotels/${hotelId}`}>
                <h3 className="text-xl font-bold text-gray-800 leading-tight hover:text-primary transition-colors cursor-pointer">{data.name}</h3>
              </Link>
              <div className="flex">{renderStars(data.stars)}</div>
            </div>
            <div className="flex items-center text-[13px] text-gray-500 mb-4">
              <MapPin className="h-4 w-4 mr-1 text-gray-600" />
              {data.location}
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {data.amenities?.map((amenity: string, idx: number) => (
                <span key={idx} className="flex items-center gap-1.5 bg-[#f0f2f5] text-gray-700 text-[11px] font-bold px-2.5 py-1.5 rounded-md">
                  {getAmenityIcon(amenity)}
                  {amenity}
                </span>
              ))}
            </div>
          </div>

          <div className="shrink-0 flex flex-col items-end">
            <div className="bg-[#ebf3ff] border border-[#d6e7ff] p-2 rounded-lg flex flex-col items-end min-w-[100px]">
              <span className="text-[13px] font-bold text-[#006ce4]">{data.ratingScore} {data.ratingText}</span>
              <span className="text-[11px] text-gray-500">{data.reviewsCount.toLocaleString()} reviews</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-end gap-4 mt-auto">
          <div className="text-[13px] text-gray-500 font-medium">
            {data.note}
          </div>
          
          <div className="flex flex-col items-end gap-1">
            {data.originalPrice && <div className="text-[13px] text-gray-500 line-through">${data.originalPrice}</div>}
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-secondary">${data.price}</span>
              <span className="text-[13px] text-gray-600 font-medium">/night</span>
            </div>
            <Link href={`/hotels/${hotelId}`}>
              <Button className="mt-2 bg-secondary hover:bg-[#c2185b] px-10 h-10 text-[15px] font-bold rounded-lg shadow-sm">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

