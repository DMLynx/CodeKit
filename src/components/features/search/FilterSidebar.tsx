"use client";

import { useState } from "react";
import { SlidersHorizontal, Map } from "lucide-react";
import { Button } from "@/components/ui/Button";

const CheckboxLabel = ({ label }: { label: string }) => (
  <label className="flex items-center gap-3 cursor-pointer group mb-2.5">
    <div className="relative flex items-center justify-center w-5 h-5 border border-gray-300 rounded bg-white group-hover:border-primary transition-colors">
      <input type="checkbox" className="opacity-0 absolute w-full h-full cursor-pointer peer" />
      <svg className="w-3 h-3 text-primary hidden peer-checked:block pointer-events-none" viewBox="0 0 14 14" fill="none">
        <path d="M2 7L5.5 10.5L12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <span className="text-sm text-gray-700">{label}</span>
  </label>
);

const FilterSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="py-5 border-b border-gray-200 last:border-0">
    <h3 className="text-sm font-semibold text-gray-900 mb-4">{title}</h3>
    {children}
  </div>
);

export default function FilterSidebar() {
  // สร้าง State สำหรับเก็บค่าราคาเริ่มต้น และราคาสูงสุด
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  // Logic: เมื่อเลื่อนปุ่มทางซ้าย (ราคาต่ำสุด) 
  // ต้องเช็คไม่ให้เลื่อนจนเลยปุ่มทางขวา (maxPrice - 1)
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxPrice - 1);
    setMinPrice(value);
  };

  // Logic: เมื่อเลื่อนปุ่มทางขวา (ราคาสูงสุด)
  // ต้องเช็คไม่ให้เลื่อนต่ำลงมาจนเลยปุ่มทางซ้าย (minPrice + 1)
  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minPrice + 1);
    setMaxPrice(value);
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-xl border border-gray-200 p-5 mb-4">
        <div className="flex items-center gap-2 mb-6 text-primary">
          <SlidersHorizontal className="h-5 w-5" />
          <h2 className="font-semibold">Filters</h2>
        </div>

        <FilterSection title="Price Range">
          <div className="relative h-10 flex items-center group">
            {/* แถบพื้นหลังของ Slider */}
            <div className="absolute w-full h-1.5 bg-gray-200 rounded-full"></div>
            
            {/* แถบสีไฮไลท์ (Active Range) ที่จะเปลี่ยนความยาวตาม State minPrice และ maxPrice */}
            <div 
              className="absolute h-1.5 bg-primary rounded-full transition-all duration-75"
              style={{ 
                left: `${(minPrice / 1000) * 100}%`, 
                right: `${100 - (maxPrice / 1000) * 100}%` 
              }}
            ></div>

            {/* Input แบบ Range 2 อันที่วางซ้อนกัน เพื่อสร้างฟีเจอร์เลือกช่วงราคาแบบคู่ */}
            <input 
              type="range"
              min="0"
              max="1000"
              value={minPrice}
              onChange={handleMinChange}
              className="absolute w-full h-2 bg-transparent appearance-none pointer-events-none z-30 [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-primary [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:cursor-pointer active:[&::-webkit-slider-thumb]:scale-110"
            />
            <input 
              type="range"
              min="0"
              max="1000"
              value={maxPrice}
              onChange={handleMaxChange}
              className="absolute w-full h-2 bg-transparent appearance-none pointer-events-none z-30 [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-primary [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:cursor-pointer active:[&::-webkit-slider-thumb]:scale-110"
            />
          </div>
          
          <div className="flex justify-between text-[13px] font-bold text-gray-900 mt-2">
            <span>${minPrice}</span>
            <span>${maxPrice}{maxPrice === 1000 ? '+' : ''}</span>
          </div>
        </FilterSection>

        <FilterSection title="Property Type">
          <CheckboxLabel label="Hotels" />
          <CheckboxLabel label="Resorts" />
          <CheckboxLabel label="Apartments" />
          <CheckboxLabel label="Villas" />
        </FilterSection>

        <FilterSection title="Star Rating">
          <CheckboxLabel label="5 Stars (⭐⭐⭐⭐⭐)" />
          <CheckboxLabel label="4 Stars (⭐⭐⭐⭐)" />
        </FilterSection>

        <FilterSection title="Facilities">
          <CheckboxLabel label="Free Wi-Fi" />
          <CheckboxLabel label="Swimming Pool" />
          <CheckboxLabel label="Fitness Center" />
          <CheckboxLabel label="Spa" />
          <CheckboxLabel label="Parking" />
          <CheckboxLabel label="Pet Friendly" />
        </FilterSection>

        <FilterSection title="Review Score">
          <CheckboxLabel label="Superb 9+" />
          <CheckboxLabel label="Very Good 8+" />
          <CheckboxLabel label="Good 7+" />
        </FilterSection>

        <FilterSection title="Neighborhood">
          <CheckboxLabel label="Patong" />
          <CheckboxLabel label="Karon" />
          <CheckboxLabel label="Kata" />
          <CheckboxLabel label="Kamala" />
        </FilterSection>

        <FilterSection title="Bed Type">
          <CheckboxLabel label="Single" />
          <CheckboxLabel label="Double" />
          <CheckboxLabel label="King" />
        </FilterSection>
      </div>

      <div className="relative rounded-xl overflow-hidden border border-gray-200 h-48 bg-blue-50 flex items-center justify-center group cursor-pointer">
        <img 
          src="/Image/Map2.png" 
          alt="Map" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
        <Button className="relative z-10 bg-white text-primary border border-primary hover:bg-gray-50 shadow-md font-bold">
          <Map className="mr-2 h-4 w-4" />
          View on Map
        </Button>
      </div>
    </div>
  );
}
