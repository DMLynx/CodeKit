import { Users, Info, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface RoomTableProps {
  rooms: any[];
}

export default function RoomTable({ rooms }: RoomTableProps) {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Your Room</h2>
      
      <div className="overflow-x-auto rounded-2xl border border-gray-200">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-4 text-sm font-bold text-gray-700">Room Type</th>
              <th className="px-6 py-4 text-sm font-bold text-gray-700">Sleeps</th>
              <th className="px-6 py-4 text-sm font-bold text-gray-700">Today's Price</th>
              <th className="px-6 py-4 text-sm font-bold text-gray-700">Options</th>
              <th className="px-6 py-4 text-sm font-bold text-gray-700"></th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room, idx) => (
              <tr key={room.id} className="relative border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-8 align-top min-w-[300px] relative">
                  {idx === 0 && (
                    <div className="absolute left-0 top-6 bottom-6 w-[5px] bg-primary rounded-r"></div>
                  )}
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-lg font-bold text-gray-800 leading-tight">{room.name}</span>
                      {room.tag && (
                        <span className="bg-secondary text-white text-[9px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
                          {room.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-[13px] text-gray-500 font-medium">
                      {room.size} • {room.view} • {room.extra}
                    </p>
                    <button className="text-primary text-[13px] flex items-center gap-1 font-bold hover:underline">
                      <Info className="h-3.5 w-3.5" /> Room details
                    </button>
                  </div>
                </td>
                
                <td className="px-6 py-8 align-top">
                  <div className="flex items-center gap-1.5 pt-2">
                    {Array(room.sleeps).fill(0).map((_, i) => (
                      <img key={i} src="/Image/IconPpl.png" alt="person" className="h-5 w-5 object-contain opacity-80" />
                    ))}
                  </div>
                </td>

                <td className="px-6 py-8 align-top">
                  <div className="space-y-1 pt-1">
                    <div className="text-[13px] text-gray-400 line-through">${room.originalPrice}</div>
                    <div className={`text-2xl font-bold ${idx === 0 ? 'text-secondary' : 'text-gray-900'}`}>
                      ${room.price}
                    </div>
                    <div className="text-[11px] text-gray-500">Includes taxes & fees</div>
                  </div>
                </td>

                <td className="px-6 py-8 align-top">
                  <div className="space-y-2.5 pt-1">
                    {room.options.map((opt: string, i: number) => (
                      <div key={i} className="flex items-center gap-2 text-[13px] text-[#2a9d8f] font-bold">
                        <div className="w-4 h-4 rounded-full border-2 border-[#2a9d8f] flex items-center justify-center">
                          <Check className="h-2.5 w-2.5 stroke-[4px]" />
                        </div>
                        {opt}
                      </div>
                    ))}
                    {room.stock && (
                      <div className="text-[13px] text-secondary font-bold mt-2">
                        {room.stock}
                      </div>
                    )}
                  </div>
                </td>

                <td className="px-6 py-8 align-middle text-right">
                  <Button className={`${room.buttonColor} hover:opacity-90 px-10 h-11 text-base font-bold rounded-lg shadow-sm`}>
                    Select
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
