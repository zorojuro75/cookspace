const Hero = () => {
  return (
    <section className="relative h-[60vh] bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 text-white text-center px-4 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          Contact Us
        </h1>
        <h2 className="text-xl sm:text-2xl font-medium mt-4 mb-8">
          Let's discuss how we can help your business grow
        </h2>
      </div>
    </section>
  );
};

export default Hero;
