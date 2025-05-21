import Heading from "@/component/Common/Heading";
import Heading2 from "@/component/Common/Heading2";
import Title from "@/component/Common/Title";
import { Clock3, Globe, UserRound } from "lucide-react";
import React from "react";

export default function projectPage({ params }: { params: { slug: string } }) {
  return (
    <div className="flex flex-col h-screen items-center justify-center max-w-7xl mx-auto gap-20">
      <Title title={"Project Details"} />
      <Heading heading={params.slug} />
      <div className="max-w-5xl mx-auto">
        <Heading2
          heading={
            "Munchies is a late-night food delivery platform with both a website and a mobile app, boasting over 100,000 downloads. It allows users to satisfy their cravings with real-time ordering and tracking features. As my first major project, I managed everything from branding and marketing to product development. I led the entire branding process, ran marketing campaigns, and worked closely with tech teams to ensure seamless functionality. Munchies reflects my hands-on experience in design and user experience, creating a product that truly resonates with users."
          }
        />
      </div>

      <div className="flex gap-4">
        <div className="border rounded-[8px] px-[16px] py-[8px] border-[#999999] text-gray-400 font-medium text-[16px] flex items-center gap-[8px]">
          <Clock3 />3 Years
        </div>
        <div className="border rounded-[8px] px-[16px] py-[8px] border-[#999999] text-gray-400 font-medium text-[16px] flex items-center gap-[8px]">
          <UserRound />
          Munchies
        </div>
        <div className="border rounded-[8px] px-[16px] py-[8px] border-[#999999] text-gray-400 font-medium text-[16px] flex items-center gap-[8px]">
          <Globe />
          Visit Website
        </div>
      </div>
    </div>
  );
}
