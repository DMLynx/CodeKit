export default function FeatureCards() {
  const features = [
    {
      icon: <img src="/Image/Iconbestprice.png" alt="Best Price" className="w-7 h-7 object-contain" style={{ imageRendering: "-webkit-optimize-contrast" }} />,
      iconBg: "bg-[#ebf3ff]",
      title: "Best Price Guarantee",
      description: "Find a lower price? We'll match it and give you a voucher for your next trip."
    },
    {
      icon: <img src="/Image/IconGlobalSup.png" alt="Global Support" className="w-7 h-7 object-contain" style={{ imageRendering: "-webkit-optimize-contrast" }} />,
      iconBg: "bg-[#fce4ec]",
      title: "24/7 Global Support",
      description: "Our world-class support team is here to help you anywhere, anytime in 40+ languages."
    },
    {
      icon: <img src="/Image/IconBooking.png" alt="Flexible Booking" className="w-7 h-7 object-contain" style={{ imageRendering: "-webkit-optimize-contrast" }} />,
      iconBg: "bg-[#fff3e0]",
      title: "Flexible Booking",
      description: "Life happens. Most of our properties offer free cancellation for peace of mind."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-[#f3f4f6] rounded-3xl p-10 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className={`w-16 h-16 ${feature.iconBg} rounded-full flex items-center justify-center mb-6 transition-transform hover:rotate-12`}>
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
