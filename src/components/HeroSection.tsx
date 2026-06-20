import { motion } from "motion/react";
import { FadeIn, Magnet } from "./MotionWrappers";
import { ContactButton } from "./Buttons";

export function HeroSection() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "About", target: "about" },
    { label: "Price", target: "services" },
    { label: "Projects", target: "projects" },
    { label: "Contact", target: "contact" },
  ];

  return (
    <section className="relative h-screen flex flex-col justify-between overflow-hidden bg-[#0C0C0C] select-none text-[#D7E2EA]">
      {/* 1. Navbar */}
      <FadeIn delay={0} y={-20} as="nav" className="z-30 w-full">
        <div className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleScroll(link.target)}
              className="font-kanit uppercase font-medium tracking-wider text-sm md:text-lg lg:text-[1.4rem] text-[#D7E2EA] hover:opacity-70 transition-all duration-200 focus:outline-none cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Hero Portrait: Centered absolutely. */}
      {/* On mobile: top-1/2 -translate-y-1/2. On sm+: sm:top-auto sm:translate-y-0 sm:bottom-0 */}
      <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center sm:items-end">
        <FadeIn delay={0.6} y={30} className="pointer-events-auto h-auto flex justify-center">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] relative z-10"
          >
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
              alt="Jack Portrait"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-contain select-none"
              style={{ filter: "drop-shadow(0 20px 50px rgba(0,0,0,0.85))" }}
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Main Content Area: Centered layout block */}
      <div className="flex-grow flex flex-col justify-center relative z-20 px-6 md:px-10 mt-12 sm:mt-12 md:mt-2">
        <div className="overflow-hidden w-full text-center sm:text-left">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-kanit font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[13.5vw] sm:text-[14.5vw] md:text-[15.5vw] lg:text-[17vw] mt-6 sm:mt-4 md:-mt-5">
              Hi, i&apos;m jack
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-30 w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-4">
        {/* Left Side */}
        <FadeIn delay={0.35} y={20}>
          <p className="font-kanit font-light uppercase tracking-wide leading-snug text-[#D7E2EA] max-w-[160px] sm:max-w-[220px] md:max-w-[260px]" style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}>
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>

        {/* Right Side */}
        <FadeIn delay={0.5} y={20} className="flex flex-col items-end gap-4">
          <div className="flex gap-2.5 px-4 py-1.5 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm items-center self-end">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] sm:text-xs uppercase tracking-widest opacity-70 font-mono font-medium">Available for hire</span>
          </div>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
