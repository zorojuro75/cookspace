import React from "react";

type Props = {};

const Mission = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center max-w-[90rem] mx-auto py-16 px-4 sm:px-8 md:px-10 gap-12 md:gap-20">
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          What We Do
        </h2>

        <p className="text-base sm:text-lg md:text-xl mt-5 font-medium">
          Cookspace Technologies creates innovative technology to turn ambitious
          ideas into scalable businesses. They are expanding Munchies, an
          AI-powered food delivery ecosystem, initially launched in Bangladesh,
          with plans for international growth in Europe and Canada. Munchies is
          offered as a fully managed app or white-label platform, helping
          entrepreneurs and franchisees run their own delivery businesses. In
          addition to Munchies, Cookspace collaborates with local startups to
          launch and scale digital products, including mobile apps and
          full-stack systems, empowering businesses to grow{" "}
          <span className="bg-gradient-to-r from-[#2657e0] to-[#a540cd] bg-clip-text text-transparent">
            faster and smarter
          </span>
          .
        </p>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="blob" />
      </div>
    </div>
  );
};

export default Mission;
