import { MapPin, Star, Share2, Heart, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

interface HotelHeaderDetailProps {
  hotel: any;
}

export default function HotelHeaderDetail({ hotel }: HotelHeaderDetailProps) {
  const renderStars = (count: number) => {
    return Array(count).fill(0).map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <div className="mb-6">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-[13px] text-gray-500 mb-6">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link href="/hotels" className="hover:text-primary transition-colors">Greece</Link>
        <ChevronRight className="h-3 w-3" />
        <Link href="/hotels" className="hover:text-primary transition-colors">Crete Hotels</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="font-bold text-gray-900">Grand Azure Resort & Spa</span>
      </nav>

      {/* Stars and Badge */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex">
          {renderStars(hotel.stars)}
        </div>
        <span className="bg-[#003580] text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">
          {hotel.type}
        </span>
      </div>

      {/* Title & Actions Row */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{hotel.name}</h1>
          <div className="flex items-center gap-1 text-[13px] text-gray-600">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{hotel.location}</span>
            <button className="text-primary font-bold hover:underline ml-2">Show on map</button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="rounded-lg border-gray-300 h-10 px-6 text-gray-700">
            <Share2 className="h-4 w-4 mr-2" /> Share
          </Button>
          <Button variant="outline" size="sm" className="rounded-lg border-gray-300 h-10 px-6 text-gray-700">
            <Heart className="h-4 w-4 mr-2" /> Save
          </Button>
          <Button className="bg-secondary hover:bg-[#c2185b] h-10 px-10 rounded-lg font-bold text-white">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}
