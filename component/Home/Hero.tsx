import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="h-screen bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
      <div className="text-white text-center px-4">
        <h1 className="text-2xl">Local Ideas, Global Impact</h1>
        <p className="text-[64px] font-extrabold flex justify-center">
          Powering the Future of Business
        </p>
      </div>
    </section>
  );
};

export default Hero;
