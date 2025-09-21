// src/app/page.tsx
import HeroSlider from "@/components/sections/HeroSlider";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import ValueProposition from "@/components/sections/ValueProposition";
import AboutUs from "@/components/sections/AboutUs"; // 1. Importa el nuevo componente
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import FAQs from "@/components/sections/Faqs"; // 2. Importa el componente de FAQs
import ResultsBanner from "@/components/sections/ResultsBanner";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <TrustBar />
      <Services />
      <ValueProposition />
      <AboutUs /> 
      <Process />
      <Testimonials />
      <FAQs />
      <ResultsBanner />
      <Contact />
    </>
  );
}