import Contact from "@/component/Contact/Contact";
import Hero from "@/component/Contact/Hero";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Hero />
      <Contact />
    </div>
  );
};

export default page;
