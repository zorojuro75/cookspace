"use client";
import { motion } from "framer-motion";

type Props = {
  heading: string;
};

const Heading2 = (props: Props) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      className="text-sm sm:text-base md:text-[18px] text-[#A8A8A8] text-center"
    >
      {props.heading}
    </motion.h2>
  );
};

export default Heading2;
