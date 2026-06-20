import { useRef, useState, MouseEvent, ReactNode, CSSProperties } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: any;
  className?: string;
  id?: string;
  key?: any;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = "div",
  className = "",
  id,
}: FadeInProps) {
  const MotionComponent = (motion as any).create
    ? (motion as any).create(as)
    : (motion as any)[as] || motion.div;

  return (
    <MotionComponent
      id={id}
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{
        delay,
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </MotionComponent>
  );
}

interface MagnetProps {
  children: ReactNode;
  className?: string;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  id?: string;
}

export function Magnet({
  children,
  className = "",
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  id,
}: MagnetProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    
    const maxRadius = Math.max(rect.width, rect.height) / 2 + padding;

    if (distance < maxRadius) {
      setIsHovered(true);
      const targetX = distanceX / strength;
      const targetY = distanceY / strength;
      setPosition({ x: targetX, y: targetY });
    } else {
      setIsHovered(false);
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  const style: CSSProperties = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
    transition: isHovered ? activeTransition : inactiveTransition,
    willChange: "transform",
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={style}
      id={id}
    >
      {children}
    </div>
  );
}

interface AnimatedTextProps {
  text: string;
  className?: string;
  id?: string;
  style?: CSSProperties;
}

export function AnimatedText({ text, className = "", id, style }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const characters = text.split("");
  const totalChars = characters.length;

  return (
    <p ref={containerRef} className={`${className} relative`} id={id} style={style}>
      {characters.map((char, index) => {
        // Distribute progress across the characters scroll zone
        const start = index / totalChars;
        const end = Math.min(1, (index + 8) / totalChars); // overlap of 8 characters for ultra smooth fade

        return (
          <Character
            key={index}
            char={char}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
}

interface CharacterProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
  key?: any;
}

function Character({ char, progress, range }: CharacterProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  if (char === " ") {
    return <span className="inline-block">&nbsp;</span>;
  }

  return (
    <span className="relative inline-block">
      <span className="opacity-0">{char}</span>
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0 text-[#D7E2EA]"
      >
        {char}
      </motion.span>
    </span>
  );
}
