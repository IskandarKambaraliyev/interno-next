"use client";

import Button from "@/components/Button";
import { TextEffect } from "@/components/ui/text-effect";
import { useScroll, useTransform, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const HeroWrapper = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return <Hero />;
};

export default HeroWrapper;

const Hero = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 80px", "end end"],
  });

  const windowWidth = window.innerWidth;

  const windowHeight = Math.min(
    window.innerHeight,
    document.documentElement.clientHeight
  );

  const endWidth = Math.min(windowWidth - 32, 1200);
  const endHeight = windowHeight - 80;

  const width = useTransform(
    scrollYProgress,
    [0, 1],
    [`${windowWidth}px`, `${endWidth}px`]
  );

  const borderRadius = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px", `${windowWidth < 768 ? 40 : 80}px`]
  );

  return (
    <div className="relative w-full min-h-[120vh]" ref={targetRef}>
      <motion.div
        className="sticky top-20 mx-auto overflow-hidden py-8 flex-center"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.1)),url(https://i.ibb.co/f4CBk6t/hero.png)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          width,
          borderRadius: borderRadius,
          minHeight: endHeight,
        }}
      >
        <div className="container !max-w-[calc(1200px-2rem)] flex flex-col justify-center gap-4 md:gap-5">
          <TextEffect
            as="h1"
            per="char"
            preset="fade-in-blur"
            className="text-[2.5rem] md:text-[3rem] lg:text-[4rem] font-dm leading-tight max-w-md"
          >
            Let Your Home Be Unique
          </TextEffect>
          <TextEffect
            per="line"
            preset="slide"
            delay={1}
            className="text max-w-lg"
          >
            Discover a world of unique interior designs tailored to your taste.
            Explore our curated selection of modern, minimalist spaces that turn
            any house into a home.
          </TextEffect>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.3,
              duration: 0.25,
            }}
          >
            <Button>Get Started</Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
