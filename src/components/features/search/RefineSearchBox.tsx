import { Button } from "@/components/ui/Button";
import { MapPin, Calendar, Users } from "lucide-react";

export default function RefineSearchBox() {
  return (
    <div className="bg-white border-b border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-4 items-center">

          <div className="flex-1 relative w-full">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              <MapPin className="h-5 w-5" />
            </div>
            <div className="w-full h-12 pl-10 pr-4 bg-gray-100 rounded-lg flex flex-col justify-center">
              <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider leading-none mb-1">Destination</span>
              <span className="text-sm font-medium text-gray-900 leading-none">Bali, Indonesia</span>
            </div>
          </div>

          <div className="flex-1 relative w-full">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              <Calendar className="h-5 w-5" />
            </div>
            <div className="w-full h-12 pl-10 pr-4 bg-gray-100 rounded-lg flex flex-col justify-center">
              <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider leading-none mb-1">Dates</span>
              <span className="text-sm font-medium text-gray-900 leading-none">Oct 12 - Oct 19, 2024</span>
            </div>
          </div>

          <div className="flex-1 relative w-full">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              <Users className="h-5 w-5" />
            </div>
            <div className="w-full h-12 pl-10 pr-4 bg-gray-100 rounded-lg flex flex-col justify-center">
              <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider leading-none mb-1">Travelers</span>
              <span className="text-sm font-medium text-gray-900 leading-none">2 Adults, 1 Room</span>
            </div>
          </div>

          <Button size="lg" className="w-full md:w-auto h-12 px-8 text-sm font-semibold shrink-0">
            Update Search
          </Button>

        </div>
      </div>
    </div>
  );
}
