"use client";
import { Canvas } from "@react-three/fiber";
import { useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Scene from "../3d models/canvas";
import { Mouse } from "@icons";
import { motion } from "framer-motion";

export default function IntroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const scrollIcon_x = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const scrollIcon_opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <section ref={containerRef} className="h-[300dvh]">
      <div className="sticky top-0 h-screen">
        <Canvas
          className="bg-black"
          camera={{
            position: [0, 0.25, 5],
            zoom: 5,
            near: 0.1,
            far: 1000,
          }}
        >
          <Scene scrollYProgress={scrollYProgress} />
        </Canvas>
      </div>
      <motion.div
        style={{
          x: scrollIcon_x,
          opacity: scrollIcon_opacity,
        }}
        className="fixed bottom-2 right-4 flex items-center justify-center gap-2"
      >
        <p className="text-end uppercase text-white">
          scroll <br /> to explore
        </p>
        <Mouse color="white" className="text-xl" />
      </motion.div>
    </section>
  );
}
