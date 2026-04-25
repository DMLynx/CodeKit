import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import RefineSearchBox from "@/components/features/search/RefineSearchBox";
import FilterSidebar from "@/components/features/search/FilterSidebar";
import FlashDealsContainer from "@/components/features/search/FlashDealsContainer";
import HotelCard from "@/components/features/search/HotelCard";
import { flashDeals, normalProperties } from "@/data/search-results";

export default function SearchResultPage() {
  return (
    <div className="flex flex-col w-full bg-gray-50 min-h-screen">
      <RefineSearchBox />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <div className="w-full lg:w-72 shrink-0">
            <FilterSidebar />
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
              <h1 className="text-xl font-medium text-gray-900">
                <span className="font-bold">245 properties</span> in Bali
              </h1>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">Sort by:</span>
                <button className="flex items-center gap-1 font-semibold text-primary bg-blue-50 px-3 py-1.5 rounded-md hover:bg-blue-100 transition-colors">
                  Recommended <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            </div>

            <FlashDealsContainer deals={flashDeals} />

            <div className="flex flex-col gap-4">
              {normalProperties.map((property) => (
                <HotelCard key={property.id} variant="normal" data={property} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-10 flex justify-center items-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded border border-gray-200 bg-white text-gray-500 hover:bg-gray-50">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded border border-primary bg-primary text-white font-medium">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 font-medium">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 font-medium">
                3
              </button>
              <span className="text-gray-500 mx-1">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 font-medium">
                12
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded border border-gray-200 bg-white text-gray-500 hover:bg-gray-50">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
