"use client";
import { motion } from "framer-motion";
export default function OurStory() {
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
          {/* Our Story */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl font-bold mb-8">Our Story</h1>
            <div className="text-lg space-y-6 max-w-3xl">
              <p>
                Cook Space was founded in 2020 with a vision to revolutionize
                the food delivery industry through innovative technology. What
                started as a simple delivery optimization tool has evolved into
                a comprehensive ecosystem of connected applications serving
                restaurants, cloud kitchens, and delivery companies worldwide.
              </p>
              <p>
                Our founding team brings together expertise from technology,
                food service, and logistics industries, creating a unique
                perspective that allows us to solve complex problems in the food
                delivery space.
              </p>
            </div>
          </motion.div>

          {/* Our Mission */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl font-bold mb-8">Our Mission</h1>
            <div className="text-lg space-y-6 max-w-3xl">
              <p>
                At Cook Space, our mission is to empower food entrepreneurs with
                technology that makes their businesses more efficient,
                profitable, and scalable. We believe that by solving the
                technical challenges of food delivery, we can help create a more
                sustainable and innovative food ecosystem.
              </p>
              <p>
                We're committed to building tools that not only solve today's
                problems but anticipate tomorrow's challenges in the rapidly
                evolving food delivery landscape.
              </p>
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl font-bold mb-8">Our Team</h1>
            <div className="text-lg space-y-6 max-w-3xl">
              <p>
                Cook Space is powered by a diverse team of engineers, designers,
                food industry experts, and logistics specialists. We bring
                together perspectives from across disciplines to create
                technology that truly understands and serves the unique needs of
                the food delivery ecosystem.
              </p>
              <p>
                Based across three continents, our remote-first team
                collaborates around the clock to support our global customer
                base.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
