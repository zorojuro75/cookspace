"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Openings = () => {
  const jobs = [
    {
      title: "Business Development Executive",
      slug: "business-development-executive",
      location: "Remote (Candidates must reside in Bangladesh)",
      type: "Full-time",
      description:
        "As a Business Development Executive, you will be the key connection between Cookspace Technologies and our Munchies franchise partners in Bangladesh. Your role will be vital in helping new franchisees set up operations, understand our systems, and grow their business sustainably.",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 text-center"
        >
          Current Openings
        </motion.h2>

        <div className="space-y-8 max-w-7xl mx-auto">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative group p-[2px] rounded-lg bg-gradient-to-r from-[#0d1527] to-[#321257] hover:from-[#182c63] hover:to-[#641e80] transition-all overflow-hidden">
                <div className="absolute inset-0 z-0 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#5a44ff44] before:to-[#ff44cc33] before:blur-2xl before:opacity-30 before:transition-opacity before:duration-500 group-hover:before:opacity-60" />
                <div className="relative z-10 bg-black rounded-lg p-6 flex justify-between items-center space-y-2 flex-col sm:flex-row w-full h-full">
                  <div>
                    <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#3866d1] to-[#8f4cdb] bg-clip-text text-transparent">
                      {job.title}
                    </h3>
                    <p className="text-gray-400">
                      {job.location} • {job.type}
                    </p>
                  </div>
                  <Link href={`/career/${job.slug}`}>
                    <Button
                      size="lg"
                      className="rounded-full text-lg bg-gradient-to-r from-[#3866d1] to-[#8f4cdb] hover:from-[#2657e0] hover:to-[#a540cd] px-8 py-6 mt-4 sm:mt-0 flex items-center gap-2"
                    >
                      Apply Now
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Openings;
