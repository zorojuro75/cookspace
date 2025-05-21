import { motion } from "framer-motion";

const Mission = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const blobVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "backOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-12 md:gap-20"
    >
      <motion.div
        variants={textVariants}
        className="flex-1 text-center md:text-left"
      >
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold"
          whileHover={{ scale: 1.02 }}
        >
          What We Do
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg md:text-xl mt-5 font-medium"
          variants={textVariants}
        >
          Cookspace Technologies creates innovative technology to turn ambitious
          ideas into scalable businesses. We are expanding Munchies, an
          AI-powered food delivery ecosystem, initially launched in Bangladesh,
          with plans for international growth in Europe and Canada. Munchies is
          offered as a fully managed app or white-label platform, helping
          entrepreneurs and franchisees run their own delivery businesses. In
          addition to Munchies, we collaborate with local startups to launch and
          scale digital products, including mobile apps and full-stack systems,
          empowering businesses to grow{" "}
          <span className="bg-gradient-to-r from-[#2657e0] to-[#a540cd] bg-clip-text text-transparent">
            faster and smarter
          </span>
          .
        </motion.p>
      </motion.div>

      <motion.div
        variants={blobVariants}
        whileHover="hover"
        className="flex-1 flex items-center justify-center"
      >
        <div className="blob bg-gradient-to-r from-[#3866d1] to-[#8f4cdb] w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full" />
      </motion.div>
    </motion.div>
  );
};

export default Mission;
