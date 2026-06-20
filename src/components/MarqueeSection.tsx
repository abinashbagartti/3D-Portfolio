import { useEffect, useState, useRef } from "react";

const row1Images = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
];

const row2Images = [
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      
      // Scroll offset calculated as: (window.scrollY - sectionTop + window.innerHeight) * 0.3
      const calculated = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(calculated);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Execute on mount to set initial offset
    handleScroll();

    // Small delay to ensure layout is computed properly
    const timer = setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const tripledRow1 = [...row1Images, ...row1Images, ...row1Images];
  const tripledRow2 = [...row2Images, ...row2Images, ...row2Images];

  // Base adjustments to make sure content fills screen elegant on startup
  const r1Move = offset - 200 - 400; 
  const r2Move = -(offset - 200) - 400;

  return (
    <section
      ref={sectionRef}
      id="marquee-section"
      className="relative bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden w-full"
    >
      <div className="flex flex-col gap-3 md:gap-5 w-full">
        {/* Row 1: Moves RIGHT on scroll (translateX(offset - 200)) */}
        <div className="overflow-hidden w-full flex">
          <div
            className="flex gap-3 shrink-0"
            style={{
              transform: `translate3d(${r1Move}px, 0px, 0px)`,
              willChange: "transform",
              transition: "transform 0.1s linear",
            }}
          >
            {tripledRow1.map((url, i) => (
              <img
                key={`r1-${i}`}
                src={url}
                alt={`Model representation 1-${i}`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-[280px] h-[180px] sm:w-[350px] sm:h-[224px] md:w-[420px] md:h-[270px] shrink-0 object-cover rounded-2xl select-none shadow-lg shadow-black/40"
              />
            ))}
          </div>
        </div>

        {/* Row 2: Moves LEFT on scroll (translateX(-(offset - 200))) */}
        <div className="overflow-hidden w-full flex">
          <div
            className="flex gap-3 shrink-0"
            style={{
              transform: `translate3d(${r2Move}px, 0px, 0px)`,
              willChange: "transform",
              transition: "transform 0.1s linear",
            }}
          >
            {tripledRow2.map((url, i) => (
              <img
                key={`r2-${i}`}
                src={url}
                alt={`Model representation 2-${i}`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-[280px] h-[180px] sm:w-[350px] sm:h-[224px] md:w-[420px] md:h-[270px] shrink-0 object-cover rounded-2xl select-none shadow-lg shadow-black/40"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
