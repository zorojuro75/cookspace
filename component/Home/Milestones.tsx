"use client";
import React from "react";
import Image from "next/image";
import Title from "../Common/Title";
import { motion } from "framer-motion";
import Heading from "../Common/Heading";
import Heading2 from "../Common/Heading2";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardHover = {
  scale: 1.02,
  transition: { duration: 0.3, ease: "easeOut" },
};

const imageHover = {
  scale: 1.05,
  transition: { duration: 0.5, ease: "easeOut" },
};

const Milestones = () => {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className="flex flex-col items-center justify-center max-w-[90rem] mx-auto gap-[20px]"
    >
      <motion.div variants={itemVariants}>
        <Title title="Projects" />
      </motion.div>

      <motion.div variants={itemVariants} className="text-center">
        <Heading heading="Our Latest Tech Milestones" />
        <Heading2 heading="Code in Production: See What We’ve Shipped" />
      </motion.div>

      <motion.div 
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
      >
        {milestones.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={cardHover}
            className="bg-[#0d0d0d] rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-800"
          >
            <motion.div 
              whileHover={imageHover}
              className="relative h-[220px] sm:h-[260px] md:h-[320px] w-full rounded-xl overflow-hidden bg-black group border-gray-700 border"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent opacity-20 group-hover:opacity-50 transition-opacity duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] pointer-events-none z-10 rounded-xl" />
              <div className="relative z-20 h-full w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain rounded-xl p-4"
                />
              </div>
            </motion.div>

            <div className="mt-5">
              <h4 className="text-white font-semibold text-lg sm:text-xl">{item.title}</h4>
              <p className="text-gray-400 mt-1 text-sm sm:text-base">{item.description}</p>
            </div>
          </motion.div>
        ))}

        {/* Coming Soon Card */}
        <motion.div
          variants={itemVariants}
          whileHover={cardHover}
          className="rounded-2xl p-6 sm:p-10 bg-gradient-to-br from-[#0f1123] via-[#191933] to-[#281b30] border border-purple-700 shadow-[0_0_30px_rgba(255,255,255,0.05)] flex items-center justify-center text-center"
        >
          <div>
            <h4 className="text-white text-xl sm:text-2xl font-semibold mb-2">
              Coming Soon
            </h4>
            <p className="text-gray-300 text-sm sm:text-base">
              Our next-generation platform is under development
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Milestones;