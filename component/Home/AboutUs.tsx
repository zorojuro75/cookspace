"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section className="bg-black text-white px-4 sm:px-6 md:px-12 py-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-12 items-center">
        {/* Content Section */}
        <div className="w-full lg:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-snug"
          >
            From Food Delivery to Future Tech – Building the SaaS Ecosystem of
            Tomorrow
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed"
          >
            Cookspace Technologies Limited is a global tech company focused on
            building future-ready platforms for food, delivery, and commerce. We
            power brands like Munchies, and partner with founders to create
            intelligent, scalable solutions that turn real-world challenges into
            growth opportunities. From concept to launch, we engineer the future
            of business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/about">
              <Button className="hover:bg-gradient-to-r from-[#3866d1] to-[#8f4cdb] hover:text-white group">
                More about us
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Laptop Code Visual */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex justify-center items-center"
        >
          <div className="relative w-full max-w-sm sm:max-w-md h-72 bg-[#0f0f0f] border-2 border-gray-700 rounded-md shadow-lg overflow-hidden">
            {/* Laptop screen header */}
            <div className="absolute top-0 w-full h-6 bg-[#1a1a1a] border-b border-gray-700 z-10"></div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-white/5 to-transparent"></div>

            {/* Code block */}
            <div className="relative z-10 p-4 pt-10 font-mono text-xs sm:text-sm text-green-400 space-y-1 overflow-auto h-full">
              <div>
                <span className="text-purple-400">function</span>{" "}
                <span className="text-blue-400">optimizeDelivery</span>(
                <span className="text-yellow-300">routes, drivers</span>) &#123;
              </div>
              <div>
                &nbsp;&nbsp;<span className="text-purple-400">const</span>{" "}
                <span className="text-pink-400">optimized</span> = routes.
                <span className="text-green-400">map</span>(
                <span className="text-yellow-300">route</span> =&gt; &#123;
              </div>
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-purple-400">return</span>{" "}
                <span className="text-blue-400">DeliveryAI</span>.
                <span className="text-green-400">findOptimalPath</span>(route);
              </div>
              <div>&nbsp;&nbsp;&#125;);</div>
              <div>&nbsp;</div>
              <div>
                &nbsp;&nbsp;<span className="text-purple-400">const</span>{" "}
                <span className="text-pink-400">assignments</span> ={" "}
                <span className="text-green-400">assignDrivers</span>(
                optimized, drivers);
              </div>
              <div>
                &nbsp;&nbsp;<span className="text-purple-400">return</span>{" "}
                &#123; <span className="text-blue-400">routes</span>: optimized,{" "}
                <span className="text-blue-400">drivers</span>: assignments
                &#125;
              </div>
              <div>&#125;</div>
              <div>&nbsp;</div>
              <div>
                <span className="text-purple-400">export async function</span>{" "}
                <span className="text-blue-400">trackDelivery</span>(
                <span className="text-yellow-300">orderId</span>) &#123;
              </div>
              <div>
                &nbsp;&nbsp;<span className="text-purple-400">const</span>{" "}
                <span className="text-pink-400">tracking</span> ={" "}
                <span className="text-purple-400">await</span>{" "}
                <span className="text-blue-400">TrackingService</span>.
                <span className="text-green-400">getStatus</span>(orderId);
              </div>
              <div>
                &nbsp;&nbsp;<span className="text-blue-400">EventBus</span>.
                <span className="text-green-400">emit</span>(
                <span className="text-orange-400">'delivery.updated'</span>,
                tracking);
              </div>
              <div>&#125;</div>
            </div>

            {/* Laptop base */}
            <div className="absolute bottom-[-14px] left-1/2 transform -translate-x-1/2 w-[70%] h-3 bg-[#1a1a1a] rounded-b-lg"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
