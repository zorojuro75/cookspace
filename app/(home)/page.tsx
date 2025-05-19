"use client";
import About from "@/component/Home/About";
import AboutUs from "@/component/Home/AboutUs";
import FAQ from "@/component/Home/FAQ";
import Hero from "@/component/Home/Hero";
import Milestones from "@/component/Home/Milestones";
import Mission from "@/component/Home/Mission";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
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

export default function Home() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col gap-y-12 sm:gap-y-16 md:gap-y-20 lg:gap-y-24 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden"
    >
      <motion.div variants={childVariants}>
        <Hero />
      </motion.div>

      <motion.div
        variants={childVariants}
        viewport={{ once: true, margin: "-100px" }}
      >
        <About />
      </motion.div>

      <motion.div
        variants={childVariants}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Mission />
      </motion.div>

      <motion.div
        variants={childVariants}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Milestones />
      </motion.div>

      <motion.div
        variants={childVariants}
        viewport={{ once: true, margin: "-100px" }}
      >
        <AboutUs />
      </motion.div>

      <motion.div
        variants={childVariants}
        viewport={{ once: true, margin: "-100px" }}
      >
        <FAQ />
      </motion.div>
    </motion.div>
  );
}
