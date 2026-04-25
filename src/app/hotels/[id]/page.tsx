import HotelHeaderDetail from "@/components/features/detail/HotelHeaderDetail";
import ImageGallery from "@/components/features/detail/ImageGallery";
import HotelInfoSection from "@/components/features/detail/HotelInfoSection";
import RoomTable from "@/components/features/detail/RoomTable";
import ReviewSection from "@/components/features/detail/ReviewSection";
import { hotelDetail } from "@/data/hotel-detail";

export default function HotelDetailPage({ params }: { params: { id: string } }) {
  // In a real app, we would fetch data based on params.id
  const hotel = hotelDetail;

  return (
    <div className="bg-white min-h-screen font-jakarta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <HotelHeaderDetail hotel={hotel} />
        <ImageGallery images={hotel.images} />
        <HotelInfoSection hotel={hotel} />
        <RoomTable rooms={hotel.rooms} />
        <ReviewSection reviews={hotel.reviews} />
      </div>
    </div>
  );
}
