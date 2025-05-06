import Connect from "../Common/Connect";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="relative h-screen bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
      {/* Backdrop overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 text-white text-center px-4 max-w-4xl">
        <h1 className="text-xl sm:text-2xl font-medium mb-4">
          Local Ideas, Global Impact
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          Powering the Future of Business
        </h2>
        <div className="mt-6">
          <Connect />
        </div>
      </div>
    </section>
  );
};

export default Hero;
