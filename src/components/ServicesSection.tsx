import { FadeIn } from "./MotionWrappers";

interface ServiceItem {
  id: string;
  number: string;
  name: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    id: "3d-modeling",
    number: "01",
    name: "3D Modeling",
    description:
      "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.",
  },
  {
    id: "rendering",
    number: "02",
    name: "Rendering",
    description:
      "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.",
  },
  {
    id: "motion-design",
    number: "03",
    name: "Motion Design",
    description:
      "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.",
  },
  {
    id: "branding",
    number: "04",
    name: "Branding",
    description:
      "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.",
  },
  {
    id: "web-design",
    number: "05",
    name: "Web Design",
    description:
      "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-[#FFFFFF] text-[#0C0C0C] font-kanit rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-20"
    >
      <div className="max-w-5xl mx-auto flex flex-col">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2
            className="text-[#0C0C0C] font-black uppercase centered leading-none tracking-tight"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Gap between heading/items: mb-16 sm:mb-20 md:mb-28 */}
        <div className="h-16 sm:h-20 md:h-28 w-full" />

        {/* Services List */}
        <div className="flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {services.map((service, index) => (
            <FadeIn
              key={service.id}
              delay={index * 0.1}
              y={30}
              className="border-b border-[rgba(12,12,12,0.15)]"
            >
              <div className="flex flex-row items-center gap-6 sm:gap-10 py-8 sm:py-10 md:py-12 group hover:bg-[#000000]/[0.02] px-4 transition-all duration-300">
                {/* Number Left */}
                <span
                  className="font-black text-[#0C0C0C] select-none leading-none shrink-0 w-20 sm:w-28 md:w-40 tracking-tighter"
                  style={{ fontSize: "clamp(2.5rem, 9vw, 140px)" }}
                >
                  {service.number}
                </span>

                {/* Name & Description Right */}
                <div className="flex flex-col gap-1 sm:gap-2">
                  <h3
                    className="font-medium text-[#0C0C0C] uppercase leading-snug tracking-wide"
                    style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="font-light text-[#0C0C0C] opacity-60 leading-relaxed max-w-2xl"
                    style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
