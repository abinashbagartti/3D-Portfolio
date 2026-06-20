/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HeroSection } from "./components/HeroSection";
import { MarqueeSection } from "./components/MarqueeSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="w-full bg-[#0C0C0C] min-h-screen text-[#D7E2EA] font-sans antialiased selection:bg-[#B600A8] selection:text-white overflow-x-hidden">
      <div style={{ overflowX: "clip" }} className="w-full relative">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <Footer />
      </div>
    </div>
  );
}

