"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6 md:px-20 border-t border-gray-700 mt-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-[90rem] mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-10"
      >
        {/* Company Info */}
        <div className="flex flex-col gap-4 flex-1 items-start">
          <Link href={'/'}>
          <Image src="/images/logo2.png" alt="logo" width={200} height={50} />
          </Link>
          <p className="text-lg font-bold">fahim@cookspace.co</p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col sm:flex-row gap-10">
          {/* Projects */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xl">
              Our Projects
            </h3>
            <ul className="space-y-3 text-base">
              <li>
                <Link href="/about">Munchies Delivery</Link>
              </li>
              <li>
                <Link href="/services">Cookspace</Link>
              </li>
              <li>
                <Link href="/careers">Munch Tech</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xl">Company</h3>
            <ul className="space-y-3 text-base">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/career">Career</Link>
              </li>
              <li>
                <Link href="/connect">Connect</Link>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Bottom Footer */}
      <Separator className="my-10 bg-gray-700" />
      <div className="text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Cook Space. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
