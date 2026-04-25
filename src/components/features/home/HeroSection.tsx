"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Calendar as CalendarIcon, Search, X } from "lucide-react";
import Link from "next/link";
import { DayPicker, DateRange } from "react-day-picker";
import { format, addDays } from "date-fns";
import "react-day-picker/style.css";

export default function HeroSection() {
  // สร้าง State สำหรับเก็บช่วงวันที่ (เริ่ม-สิ้นสุด) โดยใช้ Blueprint จาก DateRange
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2024, 9, 12),
    to: new Date(2024, 9, 18),
  });
  
  // State สำหรับควบคุมการเปิด/ปิดหน้าต่างปฏิทิน
  const [showCalendar, setShowCalendar] = useState(false);
  
  // ใช้ useRef เพื่ออ้างอิงตำแหน่งของปฏิทินในหน้าจอ (เอาไว้เช็คตอนคลิกข้างนอก)
  const calendarRef = useRef<HTMLDivElement>(null);

  // ฟังก์ชันนี้จะคอยตรวจจับการ "คลิกเมาส์" นอกหน้าต่างปฏิทิน เพื่อสั่งให้มันปิดตัวเอง
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setShowCalendar(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ฟังก์ชันสำหรับจัดรูปแบบวันที่ให้นำไปแสดงผลในช่อง Input ได้สวยงาม
  const formatDateRange = () => {
    if (date?.from) {
      if (date.to) {
        return `${format(date.from, "MMM dd")} - ${format(date.to, "MMM dd")}`;
      }
      return format(date.from, "MMM dd");
    }
    return "Select dates";
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto mt-4 mb-16 rounded-3xl overflow-hidden">
      <div
        className="relative h-[500px] w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/Image/MainImg.png')" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight font-jakarta">
            Escape to Your Perfect<br />Paradise
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl">
            Unlock exclusive prices on over 2 million properties and flights across the globe.
          </p>

          <div className="bg-white p-2 rounded-2xl w-full max-w-4xl shadow-xl flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative">
              <div className="flex items-center w-full h-14 pl-4 bg-[#f0f2f5] border border-[#d6e7ff] hover:border-primary transition-colors rounded-xl overflow-hidden">
                <Search className="text-gray-500 h-5 w-5 shrink-0" />
                <input
                  type="text"
                  placeholder="Where to next?"
                  className="w-full h-full pl-3 pr-4 bg-transparent border-none outline-none text-gray-800 placeholder-gray-500 font-medium"
                />
              </div>
            </div>
            
            <div className="flex-1 relative" ref={calendarRef}>
              <div 
                onClick={() => setShowCalendar(!showCalendar)}
                className="flex items-center w-full h-14 pl-4 bg-[#f0f2f5] border border-[#d6e7ff] hover:border-primary transition-colors rounded-xl overflow-hidden cursor-pointer"
              >
                <CalendarIcon className="text-gray-500 h-5 w-5 shrink-0" />
                <div className="w-full h-full pl-3 flex items-center text-gray-800 font-medium">
                  {formatDateRange()}
                </div>
              </div>

              {/* Calendar Dropdown */}
              {showCalendar && (
                <div className="absolute top-full left-0 mt-2 p-4 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 animate-in fade-in zoom-in-95 duration-200 min-w-[600px]">
                  <DayPicker
                    mode="range"
                    defaultMonth={date?.from}
                    selected={date}
                    onSelect={setDate}
                    numberOfMonths={2}
                    className="rdp-root"
                  />
                  <div className="mt-4 flex justify-end">
                    <Button 
                      size="sm" 
                      onClick={() => setShowCalendar(false)}
                      className="bg-primary hover:bg-primary-dark rounded-lg px-6 font-bold"
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              )}
            </div>

            <Link href="/hotels" className="shrink-0 flex">
              <Button className="h-14 px-10 bg-[#006ce4] hover:bg-[#0058b8] text-white text-[17px] font-bold rounded-xl transition-all duration-300 shadow-md flex items-center justify-center gap-2">
                <Search className="h-5 w-5 stroke-[3px]" />
                Search
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
