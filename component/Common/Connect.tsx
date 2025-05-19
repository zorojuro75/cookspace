"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
const Connect = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button className="rounded-full text-lg bg-gradient-to-r from-[#3866d1] to-[#8f4cdb] text-white font-semibold px-10 py-5 shadow-md transition duration-300 hover:from-[#2657e0] hover:to-[#a540cd]">
        Connect
      </Button>
    </motion.div>
  );
};
export default Connect;
