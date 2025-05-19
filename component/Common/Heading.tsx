"use client";
import { motion } from "framer-motion";

type Props = {
    heading: string;
};

const Heading = (props: Props) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-medium leading-tight sm:leading-snug text-center sm:text-left"
    >
      {props.heading}
    </motion.h2>
  );
};

export default Heading;