import Image from "next/image";
import styledCircles from "../images/styled_circles.svg";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="pt-14 max-w-6xl mx-auto" id="about">
      <div className="">
        <Nav />
      </div>

      {/* Hero Section */}
      <section className="min-h-[calc(100dvh-56px)] flex items-center justify-center relative">
        <Hero />

        <div className="absolute -bottom-[45px] left-0">
          <Image
            src={styledCircles}
            alt="circles"
            className="w-[90px] h-[90px]"
          />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 relative">
        <Projects />

        <div className="absolute -bottom-[45px] right-0">
          <Image
            src={styledCircles}
            alt="circles"
            className="w-[90px] h-[90px]"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <Skills />
      </section>

      {/* Footer */}
      <section id="reach_me" className="px-4 relative footer-bg">
        <Footer />
      </section>
    </div>
  );
}
