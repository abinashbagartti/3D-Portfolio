import { FadeIn, AnimatedText } from "./MotionWrappers";
import { ContactButton } from "./Buttons";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen py-20 px-5 sm:px-8 md:px-10 flex flex-col items-center justify-center bg-[#0C0C0C] overflow-hidden select-none"
    >
      {/* 4 Decorative Corner Images */}
      {/* Top Left: Moon Icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 pointer-events-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="3D Decorative Moon"
            referrerPolicy="no-referrer"
            className="w-[100px] sm:w-[150px] md:w-[200px] lg:w-[210px] h-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] rotate-[-15deg] hover:scale-105 transition-transform duration-500"
          />
        </FadeIn>
      </div>

      {/* Bottom Left: 3D Ribbon Object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-10 pointer-events-none">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Ribbon Geometry"
            referrerPolicy="no-referrer"
            className="w-[85px] sm:w-[125px] md:w-[165px] lg:w-[180px] h-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] rotate-[10deg] hover:scale-105 transition-transform duration-500"
          />
        </FadeIn>
      </div>

      {/* Top Right: Lego Icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 pointer-events-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="3D Lego Block"
            referrerPolicy="no-referrer"
            className="w-[100px] sm:w-[150px] md:w-[200px] lg:w-[210px] h-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] rotate-[15deg] hover:scale-105 transition-transform duration-500"
          />
        </FadeIn>
      </div>

      {/* Bottom Right: 3D Shape Group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-10 pointer-events-none">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Group Nodes"
            referrerPolicy="no-referrer"
            className="w-[110px] sm:w-[150px] md:w-[195px] lg:w-[220px] h-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] rotate-[-10deg] hover:scale-105 transition-transform duration-500"
          />
        </FadeIn>
      </div>

      {/* Central Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center w-full max-w-5xl">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-kanit font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading & text: gap-10 sm:gap-14 md:gap-16 */}
        <div className="h-10 sm:h-14 md:h-16 w-full" />

        <div className="max-w-[560px] w-full px-4 text-center">
          <AnimatedText
            text="With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!"
            className="font-kanit font-medium text-[#D7E2EA] text-center leading-relaxed tracking-wide select-none"
            style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
          />
        </div>

        {/* Gap between text & button: gap-16 sm:gap-20 md:gap-24 */}
        <div className="h-16 sm:h-20 md:h-24 w-full" />

        <FadeIn delay={0.4} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
