"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import Title from "../Common/Title";
import Heading from "../Common/Heading";
import Heading2 from "../Common/Heading2";

type Props = {};

const FAQ = (props: Props) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut",
      },
    },
  };

  const FAQData = [
    {
      value: "item-1",
      question: "Is Wave available for all devices?",
      answer:
        "Yes! Wave is compatible with smartphones, tablets, and desktop devices across iOS, Android, and web platforms.",
    },
    {
      value: "item-2",
      question: "Can I try Wave before committing to a plan?",
      answer:
        "Yes! Wave offers a free trial period for you to explore features before choosing a plan.",
    },
    {
      value: "item-3",
      question: "What’s the difference between Standard and Mastermind plans?",
      answer:
        "The Standard plan includes basic features like analytics and support, while the Mastermind plan adds advanced tools like priority support, custom integrations, and exclusive workshops.",
    },
    {
      value: "item-4",
      question: "Can I cancel my plan anytime?",
      answer:
        "Absolutely. You can cancel your subscription at any time without hidden fees.",
    },
    {
      value: "item-5",
      question: "Is customer support available?",
      answer:
        "Yes! Wave provides 24/7 customer support via live chat, email, and phone.",
    },
    {
      value: "item-6",
      question: "How does hosting benefit my local community?",
      answer:
        "Hosting helps promote your local area and culture by attracting guests who contribute to the local economy.",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className="flex flex-col items-center gap-[20px]"
    >
      <Title title="Frequently Asked Questions" />
      <Heading heading="Everything you need to know" />
      <Heading2
        heading="Got questions? We've got answers. Here's everything you need to know
          before getting started"
      />

      <Accordion
        type="single"
        collapsible
        className="w-full md:max-w-7xl flex flex-col gap-[16px] px-5 md:px-0"
      >
        {FAQData.map((item) => (
          <AccordionItem
            key={item.value}
            value={item.value}
            className="border px-2 rounded-[20px]"
          >
            <AccordionTrigger className="font-medium text-[18px] p-[18px]">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="font-medium text-[18px] p-[18px]">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  );
};

export default FAQ;
