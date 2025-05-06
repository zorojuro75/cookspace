const Hero = () => {
  return (
    <section className="h-[60vh] bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="text-white text-center px-4 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          About Cook Space
        </h1>
        <h2 className="text-xl sm:text-2xl font-medium mt-4 mb-8">
          Building the future of food delivery technology
        </h2>
      </div>
    </section>
  );
};

export default Hero;
