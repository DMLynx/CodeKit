import { Zap } from "lucide-react";
import HotelCard from "./HotelCard";

interface FlashDealsContainerProps {
  deals: any[];
}

export default function FlashDealsContainer({ deals }: FlashDealsContainerProps) {
  if (!deals || deals.length === 0) return null;

  return (
    <div className="bg-white rounded-xl border-2 border-secondary overflow-hidden mb-6 shadow-sm">
      <div className="bg-red-50 px-4 py-3 flex justify-between items-center border-b border-red-100">
        <div className="flex items-center gap-2 text-secondary font-semibold">
          <Zap className="h-5 w-5 fill-secondary" />
          Flash Deals for You
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-gray-700">
          Ends in:
          <div className="flex gap-1">
            <span className="bg-secondary text-white px-2 py-1 rounded">08</span> :
            <span className="bg-secondary text-white px-2 py-1 rounded">45</span> :
            <span className="bg-secondary text-white px-2 py-1 rounded">12</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        {deals.map((deal) => (
          <HotelCard key={deal.id} variant="flash" data={deal} />
        ))}
      </div>
    </div>
  );
}
