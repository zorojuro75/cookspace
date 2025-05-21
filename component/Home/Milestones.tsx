"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Title from "../Common/Title";
import Heading from "../Common/Heading";
import Heading2 from "../Common/Heading2";
import { useRouter } from "next/navigation";

const milestones = [
  {
    title: "Munchies Delivery",
    image: "/projects/project-1.png",
    href: "/project/munchies-delivery",
  },
  {
    title: "Cookspace Delivery",
    image: "/projects/project-2.png",
    href: "/project/cookspace-delivery",
  },
  {
    title: "Munchies Application",
    image: "/projects/project-3.png",
    href: "/project/munchies-application",
  },
  {
    title: "Munchies Delivery",
    image: "/projects/project-4.png",
    href: "/project/munchies-delivery",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, when: "beforeChildren" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
};

const Milestones = () => {
  const [isHovering, setIsHovering] = useState(false);
  const mousePosition = useRef({ x: 0, y: 0 });
  const dotPosition = useRef({ x: 0, y: 0 });
  const borderDotPosition = useRef({ x: 0, y: 0 });
  const [renderPos, setRenderPos] = useState({ dot: { x: 0, y: 0 }, border: { x: 0, y: 0 } });
  const containerRef = useRef<HTMLDivElement>(null);

  const DOT_SMOOTHNESS = 0.2;
  const BORDER_DOT_SMOOTHNESS = 0.1;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        ) {
          mousePosition.current = { x: e.clientX, y: e.clientY };
        }
      }
    };

    const animate = () => {
      const lerp = (start: number, end: number, factor: number) => {
        return start + (end - start) * factor;
      };

      dotPosition.current.x = lerp(dotPosition.current.x, mousePosition.current.x, DOT_SMOOTHNESS);
      dotPosition.current.y = lerp(dotPosition.current.y, mousePosition.current.y, DOT_SMOOTHNESS);

      borderDotPosition.current.x = lerp(borderDotPosition.current.x, mousePosition.current.x, BORDER_DOT_SMOOTHNESS);
      borderDotPosition.current.y = lerp(borderDotPosition.current.y, mousePosition.current.y, BORDER_DOT_SMOOTHNESS);

      setRenderPos({
        dot: { x: dotPosition.current.x, y: dotPosition.current.y },
        border: { x: borderDotPosition.current.x, y: borderDotPosition.current.y },
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const router = useRouter();
  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col items-center justify-center max-w-7xl mx-auto gap-8 px-4 py-10 relative"
    >
      {/* Custom Cursor */}
      <div className="pointer-events-none fixed inset-0 z-50">
        <div
          className="absolute rounded-full bg-white"
          style={{
            width: "8px",
            height: "8px",
            transform: "translate(-50%, -50%)",
            left: `${renderPos.dot.x}px`,
            top: `${renderPos.dot.y}px`,
            opacity: containerRef.current ? 1 : 0,
            transition: "opacity 0.2s",
          }}
        />
        <div
          className="absolute rounded-full border border-gray-500 flex items-center justify-center text-sm backdrop-blur-sm"
          style={{
            width: isHovering ? "100px" : "28px",
            height: isHovering ? "100px" : "28px",
            transform: "translate(-50%, -50%)",
            left: `${renderPos.border.x}px`,
            top: `${renderPos.border.y}px`,
            transition: "width 0.3s, height 0.3s, opacity 0.2s",
            opacity: containerRef.current ? 1 : 0,
          }}
        > {isHovering ? <span>View project</span> : null}</div>
      </div>

      <Title title="Projects" />
      <Heading heading="Our Latest Tech Milestones" />
      <Heading2 heading="Code in Production: See What We've Shipped" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        {milestones.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="flex flex-col"
            whileHover={{ scale: 1.02 }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => router.push(item.href)}
          >
            <div className="relative w-full h-[484px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="rounded-xl object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <h4 className="text-white mt-2 text-[28px] font-medium">
              {item.title}
            </h4>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Milestones;