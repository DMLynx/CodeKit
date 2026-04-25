import { Star } from "lucide-react";

interface ReviewSectionProps {
  reviews: any[];
}

export default function ReviewSection({ reviews }: ReviewSectionProps) {
  return (
    <section className="pb-20">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Guest Reviews</h2>
        <button className="text-primary font-bold hover:underline">Read all 1,248 reviews</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col h-full">
            <div className="flex items-center gap-1 mb-4">
              {Array(review.rating).fill(0).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-auto text-xs text-gray-400">{review.date}</span>
            </div>
            
            <p className="text-gray-600 text-sm italic mb-6 flex-1">
              "{review.comment}"
            </p>
            
            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-50">
              <div className={`w-10 h-10 rounded-full ${review.bgColor} flex items-center justify-center ${review.textColor} font-bold text-xs`}>
                {review.avatar}
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900">{review.author}</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider">{review.country}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
