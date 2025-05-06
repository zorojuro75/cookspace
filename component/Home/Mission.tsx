import React from "react";

type Props = {};

const Mission = (props: Props) => {
  return (
    <div className="flex items-center justify-center max-w-[90rem] mx-auto py-20 px-10 gap-20">
      <div className="flex-1">
        <h2 className="text-6xl font-bold">What We Do</h2>

        <p className="text-xl mt-5 font-semibold">
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
      <div className="flex items-center justify-center">
        <div className="blob"></div>
      </div>
    </div>
  );
};

export default Mission;
