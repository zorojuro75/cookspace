"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Title from "../Common/Title";
import Heading from "../Common/Heading";
import Heading2 from "../Common/Heading2";
import { useRouter } from "next/navigation";
import GlobalCursor from "../Common/GlobalCursor";

const milestones = [
  {
    title: "Munchies Delivery",
    image: "/projects/project-1.png",
    href: "/project/munchies-delivery",
  },
  {
    title: "Cookspace Delivery",
    image: "/projects/project-2.png",
    href: "/project/cookspace-delivery",
  },
  {
    title: "Munchies Application",
    image: "/projects/project-3.png",
    href: "/project/munchies-application",
  },
  {
    title: "Munchies Delivery",
    image: "/projects/project-4.png",
    href: "/project/munchies-delivery",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, when: "beforeChildren" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
};

const Milestones = () => {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col items-center justify-center max-w-7xl mx-auto gap-8 px-4 py-10 relative"
    >
      <GlobalCursor containerRef={containerRef} />

      <Title title="Projects" />
      <Heading heading="Our Latest Tech Milestones" />
      <Heading2 heading="Code in Production: See What We've Shipped" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        {milestones.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="flex flex-col cursor-hover"
            whileHover={{ scale: 1.02 }}
            onClick={() => router.push(item.href)}
          >
            <div className="relative w-full h-[484px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="rounded-xl object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <h4 className="text-white mt-2 text-[28px] font-medium">
              {item.title}
            </h4>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Milestones;