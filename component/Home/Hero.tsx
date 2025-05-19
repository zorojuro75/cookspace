import Connect from "../Common/Connect";
import Title from "../Common/Title";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="relative h-screen bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
      {/* Backdrop overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 text-white text-center w-full max-w-4xl flex flex-col items-center">
        <Title title="From cloud kitchens to last-mile delivery" />
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-medium mt-4 sm:mt-6 md:mt-8">
          Powering the Future <br className="hidden sm:block" />
          of Business
        </h2>
        <div className="mt-4 sm:mt-6 md:mt-8 w-full px-4 sm:px-0">
          <Connect />
        </div>
      </div>
    </section>
  );
};

export default Hero;
