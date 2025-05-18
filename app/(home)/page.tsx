import About from "@/component/Home/About";
import AboutUs from "@/component/Home/AboutUs";
import Hero from "@/component/Home/Hero";
import Milestones from "@/component/Home/Milestones";
import Mission from "@/component/Home/Mission";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Mission />
      <Milestones />
      <AboutUs />
    </div>
  );
}
