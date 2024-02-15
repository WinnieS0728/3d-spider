"use client";
import { useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import ThreeDCard from "../UI/3d card";

import s1 from "@images/s1";
import s2 from "@images/s2";

export default function Cards() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });
  const otherVerse_opacity = scrollYProgress;
  const otherVerse_y = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  return (
    <section ref={sectionRef} className="flex h-full flex-col gap-4">
      <motion.h3
        style={{
          y: otherVerse_y,
          opacity: otherVerse_opacity,
        }}
        className="text-6xl capitalize tracking-wider text-white"
      >
        episodes
      </motion.h3>
      <div className="grid grid-cols-3 gap-4">
        <ThreeDCard images={s1} />
        <ThreeDCard images={s2} />
      </div>
    </section>
  );
}
