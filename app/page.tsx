import Hero from "@/components/hero";
import Features from "@/components/features";
import Process from "@/components/process";
import Projects from "@/components/projects";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import CallToAction from "@/components/call-to-action";
import Faq from "@/components/faq";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <Process />
        <Projects />
        <Blog />
        <Faq />
        <CallToAction />
        <Contact />
      </main>
    </>
  );
}
