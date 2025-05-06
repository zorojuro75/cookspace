import React from "react";
import Image from "next/image";

const milestones = [
  {
    title: "Munchies Delivery",
    description: "Real-time delivery tracking with smart route optimization",
    image: "/images/laptop.jpeg",
  },
  {
    title: "Cookspace Gallery",
    description: "Visual kitchen management platform for food entrepreneurs",
    image: "/images/mobile.png",
  },
  {
    title: "Munchies Application",
    description: "Consumer-facing food ordering experience",
    image: "/images/mockup.png",
  },
];

const Milestones = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-[90rem] mx-auto py-20 px-4 sm:px-6 md:px-10 gap-10">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white">
          Our Latest Tech Milestones
        </h2>
        <h3 className="text-base sm:text-lg md:text-xl text-gray-400 mt-2">
          Code in Production: See What We've Shipped
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {milestones.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#0d0d0d] rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-800"
          >
            <div className="relative h-[220px] sm:h-[260px] md:h-[320px] w-full rounded-xl overflow-hidden bg-black group border-gray-700 border">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent opacity-20 group-hover:opacity-50 transition-opacity duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] pointer-events-none z-10 rounded-xl" />
              <div className="relative z-20 h-full w-full overflow-hidden">
                <div className="h-full w-full transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105 group-hover:brightness-110">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain rounded-xl p-4"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5">
              <h4 className="text-white font-semibold text-lg sm:text-xl">{item.title}</h4>
              <p className="text-gray-400 mt-1 text-sm sm:text-base">{item.description}</p>
            </div>
          </div>
        ))}

        {/* Coming Soon Card */}
        <div className="rounded-2xl p-6 sm:p-10 bg-gradient-to-br from-[#0f1123] via-[#191933] to-[#281b30] border border-purple-700 shadow-[0_0_30px_rgba(255,255,255,0.05)] flex items-center justify-center text-center">
          <div>
            <h4 className="text-white text-xl sm:text-2xl font-semibold mb-2">
              Coming Soon
            </h4>
            <p className="text-gray-300 text-sm sm:text-base">
              Our next-generation platform is under development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milestones;
