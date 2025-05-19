"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {
    title: string;
};

const Title = (props: Props) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-[18px] px-[20px] py-[10px] border rounded-full border-[#1A1A1A] w-fit"
    >
      {props.title}
    </motion.div>
  );
};

export default Title;
