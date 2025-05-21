import Heading from "@/component/Common/Heading";
import Heading2 from "@/component/Common/Heading2";
import Title from "@/component/Common/Title";
import { Clock3, Globe, UserRound } from "lucide-react";
import Image from "next/image";
import React from "react";

const projects = [
  {
    slug: "munchies-delivery",
    title: "Munchies Delivery",
    description:
      "Munchies is a late-night food delivery platform with both a website and a mobile app, boasting over 100,000 downloads. It allows users to satisfy their cravings with real-time ordering and tracking features.",
    duration: "3 Years",
    client: "Munchies",
    website: "https://munchies.example.com",
    images: [
      "/projects/project-1-1.png",
      "/projects/project-1-2.png",
      "/projects/project-1-3.png",
    ],
    overview:
      "The Munchies website is designed to provide a seamless and intuitive late-night food delivery experience. By focusing on modern UI/UX principles, the platform ensures users can easily browse restaurants, place orders, and track their deliveries in real time.",
    features: [
      "Smooth food ordering process",
      "Real-time order tracking",
      "Easy restaurant browsing with filters",
      "Simple and secure payment options",
      "Optimized for performance across all devices",
    ],
    process: [
      "User Research to understand the pain points in food delivery, especially during late-night hours.",
      "Wireframing to map out the entire ordering and tracking flow, ensuring a smooth user journey.",
      "High-fidelity UI design featuring a clean, functional interface with engaging visuals.",
      "Prototyping and user testing to ensure seamless interactions and smooth navigation.",
    ],
    conclusion:
      "With the interactive features built into the design, Munchies provides users with an easy and satisfying way to order their favourite meals, all in real-time.",
  },
];

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen">
        Project not found
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-16 sm:gap-20">
      <Title title="Project Details" />
      <Heading heading={project.title} />

      <div className="w-full max-w-5xl mx-auto">
        <Heading2 heading={project.description} />
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        <div className="border rounded-md px-4 py-2 border-[#999999] text-gray-400 font-medium text-sm sm:text-base flex items-center gap-2">
          <Clock3 />
          {project.duration}
        </div>
        <div className="border rounded-md px-4 py-2 border-[#999999] text-gray-400 font-medium text-sm sm:text-base flex items-center gap-2">
          <UserRound />
          {project.client}
        </div>
        <div className="border rounded-md px-4 py-2 border-[#999999] text-gray-400 font-medium text-sm sm:text-base flex items-center gap-2">
          <Globe />
          Visit Website
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 flex-wrap justify-center items-center">
        {project.images.map((image, index) => (
          <div
            key={index}
            className="relative w-[360px] h-[295px] border border-gray-700 rounded-md overflow-hidden"
          >
            <Image
              src={image}
              alt={`${project.title} screenshot ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 w-full max-w-5xl mx-auto px-4">
        <Heading heading="Project Overview" />
        <Heading2 classname="text-left" heading={project.overview} />
      </div>

      <div className="flex flex-col gap-4 w-full max-w-5xl mx-auto px-4">
        <Heading heading="Key Features:" />
        <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-[#A8A8A8]">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-4 w-full max-w-5xl mx-auto px-4">
        <Heading heading="What are we doing?" />
        <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-[#A8A8A8]">
          {project.process.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
        <Heading2 classname="text-left" heading={project.conclusion} />
      </div>
    </div>
  );
}
