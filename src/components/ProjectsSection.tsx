import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { FadeIn } from "./MotionWrappers";
import { LiveProjectButton } from "./Buttons";

interface ProjectData {
  id: string;
  number: string;
  name: string;
  category: string;
  imgLeftTop: string;
  imgLeftBottom: string;
  imgRight: string;
}

const projects: ProjectData[] = [
  {
    id: "nextlevel-studio",
    number: "01",
    name: "Nextlevel Studio",
    category: "Client",
    imgLeftTop:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
    imgLeftBottom:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
    imgRight:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
  },
  {
    id: "aura-brand",
    number: "02",
    name: "Aura Brand Identity",
    category: "Personal",
    imgLeftTop:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
    imgLeftBottom:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
    imgRight:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
  },
  {
    id: "solaris-digital",
    number: "03",
    name: "Solaris Digital",
    category: "Client",
    imgLeftTop:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
    imgLeftBottom:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
    imgRight:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
  },
];

interface CardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
  key?: any;
}

function ProjectCard({ project, index, totalCards }: CardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll positioning specifically for this project element zone
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Scale calculation: targetScale = 1 - (totalCards - 1 - index) * 0.03
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[90vh] sm:min-h-screen flex justify-center items-start w-full pt-10"
    >
      <motion.div
        style={{
          scale,
          top: `calc(${index * 28}px + 6rem)`,
        }}
        className="sticky w-full max-w-5xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-5 sm:p-8 md:p-10 flex flex-col gap-6 md:gap-8 select-none shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
      >
        {/* Top row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#D7E2EA]/10 pb-6">
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Number */}
            <span
              className="font-black text-[#D7E2EA] leading-none shrink-0 tracking-tighter"
              style={{ fontSize: "clamp(2.5rem, 8vw, 110px)" }}
            >
              {project.number}
            </span>
            {/* Project Labels */}
            <div className="flex flex-col">
              <span className="font-kanit uppercase tracking-widest text-[#D7E2EA]/50 text-xs sm:text-sm font-semibold mb-0.5">
                {project.category}
              </span>
              <h3 className="font-kanit font-bold uppercase tracking-wide text-[#D7E2EA] text-base sm:text-2xl md:text-3xl">
                {project.name}
              </h3>
            </div>
          </div>
          {/* Action Trigger */}
          <LiveProjectButton
            onClick={() => {
              // Open an elegant simulated alert or just scroll trigger
              alert(`Navigating to Live Project for ${project.name}`);
            }}
          />
        </div>

        {/* Bottom row: Two-column image grid */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-4 sm:gap-6 w-full flex-grow items-stretch">
          {/* Left Column (40%) with 2 stacked images */}
          <div className="md:col-span-4 flex flex-col gap-4 sm:gap-6">
            <div className="overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border border-[#D7E2EA]/10 shadow-lg">
              <img
                src={project.imgLeftTop}
                alt={`${project.name} Detail 1`}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full object-cover select-none transition-transform duration-700 hover:scale-[1.03]"
                style={{ height: "clamp(130px, 16vw, 230px)" }}
              />
            </div>
            <div className="overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border border-[#D7E2EA]/10 shadow-lg">
              <img
                src={project.imgLeftBottom}
                alt={`${project.name} Detail 2`}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full object-cover select-none transition-transform duration-700 hover:scale-[1.03]"
                style={{ height: "clamp(160px, 22vw, 340px)" }}
              />
            </div>
          </div>

          {/* Right Column (60%) with 1 tall image */}
          <div className="md:col-span-6 flex">
            <div className="overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border border-[#D7E2EA]/10 shadow-lg w-full flex h-full">
              <img
                src={project.imgRight}
                alt={`${project.name} Full Render`}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full min-h-[300px] object-cover select-none transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-20 pt-24 pb-12 px-5 sm:px-8 md:px-10 overflow-hidden w-full"
    >
      <div className="max-w-5xl mx-auto flex flex-col">
        {/* Section Heading: "Project" */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-10 sm:mb-14">
          <h2
            className="hero-heading font-kanit font-black uppercase text-center"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Project
          </h2>
        </FadeIn>

        {/* Cards Stack */}
        <div className="flex flex-col relative">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              totalCards={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
