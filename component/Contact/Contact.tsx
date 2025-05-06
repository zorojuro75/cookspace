"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

const Contact = () => {
  return (
    <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <motion.h2
              {...fadeInUp(0)}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8"
            >
              Get in Touch
            </motion.h2>

            <motion.p
              {...fadeInUp(0.2)}
              viewport={{ once: true }}
              className="text-gray-300 mb-16 max-w-2xl mx-auto text-lg"
            >
              Have questions about our platform? Interested in a demo? Our team
              is ready to help. Fill out the form or reach out to us directly
              through one of our contact channels.
            </motion.p>

            <motion.div {...fadeInUp(0.4)} viewport={{ once: true }}>
              <h3 className="text-gray-400 font-semibold">Email</h3>
              <p className="text-lg">hello@cookspace.com</p>
            </motion.div>

            <motion.div {...fadeInUp(0.5)} viewport={{ once: true }}>
              <h3 className="text-gray-400 font-semibold">Phone</h3>
              <p className="text-lg">+1 (555) 123-4567</p>
            </motion.div>

            <motion.div {...fadeInUp(0.6)} viewport={{ once: true }}>
              <h3 className="text-gray-400 font-semibold">Location</h3>
              <p className="text-lg">San Francisco, CA</p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            {...fadeInUp(0.3)}
            viewport={{ once: true }}
            className="space-y-6 border border-gray-700 rounded-lg p-6"
          >
            {["Name", "Email", "Company"].map((label, idx) => (
              <motion.div
                key={label}
                {...fadeInUp(0.4 + idx * 0.1)}
                viewport={{ once: true }}
                className="space-y-1"
              >
                <label className="text-gray-400">{label}</label>
                <input
                  type={label === "Email" ? "email" : "text"}
                  className="w-full bg-gray-900 rounded-lg p-3 text-white focus:ring-2 focus:ring-[#3866d1] outline-none"
                />
              </motion.div>
            ))}

            <motion.div {...fadeInUp(0.7)} viewport={{ once: true }} className="space-y-1">
              <label className="text-gray-400">Message</label>
              <textarea
                rows={4}
                className="w-full bg-gray-900 rounded-lg p-3 text-white focus:ring-2 focus:ring-[#3866d1] outline-none"
              />
            </motion.div>

            <motion.div {...fadeInUp(0.8)} viewport={{ once: true }}>
              <Button className="w-full bg-gradient-to-r from-[#3866d1] to-[#8f4cdb] hover:from-[#2657e0] hover:to-[#a540cd] text-lg py-6 rounded-lg">
                Send Message
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
