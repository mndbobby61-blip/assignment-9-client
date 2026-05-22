import { main } from "framer-motion/client";
import Image from "next/image";
import Hero from "./components/home/Hero";
import TopDoctors from "./components/home/TopDoctors";
import WhyChoose from "./components/home/WhyChoose";
import Testimonials from "./components/home/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <TopDoctors />
      <WhyChoose />
      <Testimonials />
    </main>
  );
}
