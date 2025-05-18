import Image from "next/image";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="grid md:grid-cols-12 items-stretch justify-center max-w-[90rem] mx-auto py-16 px-4 sm:px-8 md:px-10">
      <div className="flex p-4 justify-end items-end md:h-full col-span-2">
        <div>
          <Image
            src="/images/about-2-removebg-preview.png"
            alt="about"
            width={150}
            height={100}
          />
        </div>
      </div>
      <div className="text-base sm:text-lg md:text-[32px] font-medium col-span-8 text-gray-400">
        At <span className="text-white">Cookspace</span>, we believe in making food business operations{" "}
        <span className="text-white"> smarter, faster, and more profitable</span>. Our technology
        solutions help restaurants, cloud kitchens, and food delivery services{" "}
        <span className="text-white">streamline</span> their{" "}
        <span className="text-white">operations, reduce costs, and enhance customer experiences.</span>
      </div>
      <div className="flex p-4 justify-start items-start md:h-full col-span-2">
        <div>
          <Image
            src="/images/about-1-removebg-preview.png"
            alt="about"
            width={150}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
