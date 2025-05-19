"use client";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

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

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const About = (props: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="grid grid-cols-1 md:grid-cols-12 items-center justify-center max-w-[90rem] md:min-h-[520px] mx-auto gap-6 md:gap-0"
    >
      {/* Left image - hidden on mobile, shown on md+ */}
      <motion.div
        variants={imageVariants}
        className="hidden md:flex justify-end items-end h-full col-span-2"
      >
        <div className="w-[120px] lg:w-[150px]">
          <Image
            src="/images/about-2-removebg-preview.png"
            alt="about"
            width={150}
            height={100}
            className="w-full h-auto"
          />
        </div>
      </motion.div>

      {/* Main content */}
      <motion.div
        variants={textVariants}
        className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px] font-medium md:col-span-8 text-gray-400 text-center md:text-left"
      >
        At <span className="text-white">Cookspace</span>, we believe in making
        food business operations{" "}
        <span className="text-white">smarter, faster, and more profitable</span>
        . Our technology solutions help restaurants, cloud kitchens, and food
        delivery services <span className="text-white">streamline</span> their{" "}
        <span className="text-white">
          operations, reduce costs, and enhance customer experiences.
        </span>
      </motion.div>

      {/* Right image - shown on all screens but positioned differently */}
      <motion.div
        variants={imageVariants}
        className="flex md:hidden justify-center items-center"
      >
        <div className="w-[100px] sm:w-[120px]">
          <Image
            src="/images/about-1-removebg-preview.png"
            alt="about"
            width={150}
            height={100}
            className="w-full h-auto"
          />
        </div>
      </motion.div>
      <motion.div
        variants={imageVariants}
        className="hidden md:flex justify-start items-start h-full col-span-2"
      >
        <div className="w-[120px] lg:w-[150px]">
          <Image
            src="/images/about-1-removebg-preview.png"
            alt="about"
            width={150}
            height={100}
            className="w-full h-auto"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
