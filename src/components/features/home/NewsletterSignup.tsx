import { Button } from "@/components/ui/Button";
import { Mail } from "lucide-react";

export default function NewsletterSignup() {
  return (
    <div className="w-full max-w-7xl mx-auto mb-16">
      <div className="bg-[#e9eff6] rounded-3xl p-10 md:p-16 md:h-[420px] flex flex-col items-center justify-center text-center">
        <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
          <Mail className="h-8 w-8 text-primary" strokeWidth={1.5} />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Get Travel Deals Directly
        </h2>
        <p className="text-gray-500 text-lg mb-10 max-w-2xl leading-relaxed">
          Subscribe to our newsletter and get early access to hidden gems and seasonal discounts. No spam, only adventure.
        </p>
        
        <form className="w-full max-w-2xl flex flex-col sm:flex-row gap-4 mb-8">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-1 h-14 px-6 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none text-gray-700"
            required
          />
          <Button type="submit" size="lg" className="h-14 px-10 rounded-xl text-lg font-bold">
            Subscribe Now
          </Button>
        </form>
        <p className="text-xs text-gray-500">
          By subscribing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
