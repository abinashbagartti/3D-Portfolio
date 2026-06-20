import { motion } from "motion/react";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  id?: string;
}

export function ContactButton({ onClick, className = "", id }: ButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Scroll to contact section or open contact mail elegantly
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = "mailto:jack@3dcreator.com?subject=Project Inquiry";
      }
    }
  };

  return (
    <motion.button
      id={id || "contact-btn"}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={`relative font-kanit rounded-full transition-shadow duration-300 font-medium uppercase tracking-widest text-[#FFFFFF] focus:outline-none cursor-pointer select-none ${className}`}
      style={{
        background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1",
        outline: "2px solid #FFFFFF",
        outlineOffset: "-3px",
      }}
    >
      <span className="block px-8 py-3 text-xs sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base">
        Contact Me
      </span>
    </motion.button>
  );
}

export function LiveProjectButton({ onClick, className = "", id }: ButtonProps) {
  return (
    <motion.button
      id={id || "live-project-btn"}
      onClick={onClick}
      whileHover={{ scale: 1.04, backgroundColor: "rgba(215, 226, 234, 0.1)" }}
      whileTap={{ scale: 0.98 }}
      className={`font-kanit rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 text-sm sm:px-10 sm:py-3.5 sm:text-base transition-colors duration-300 focus:outline-none cursor-pointer ${className}`}
    >
      Live Project
    </motion.button>
  );
}
