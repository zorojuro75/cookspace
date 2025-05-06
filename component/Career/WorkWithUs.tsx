"use client";
import { motion } from "framer-motion";
export default function WorkWithUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="w-full bg-black text-white py-16">
      <div className="container px-16 mx-auto max-w-6xl">
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Work with us */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl font-bold mb-8">Why Work With Us</h1>
            <div className="text-lg space-y-6 max-w-3xl">
              <p>
                At Cook Space, we're building technology that's transforming how
                food businesses operate. Our team is remote-first,
                collaborative, and focused on creating impactful solutions to
                complex problems.
              </p>
              <p>
                We offer competitive salaries, equity opportunities, flexible
                work arrangements, and a culture that values innovation,
                diversity, and continuous learning.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
