"use client";
import { Center, ContactShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import SpiderLogo from "../3d models/spider logo";
import ClipText from "./clip text";
import Cards from "./3d cards";

export default function TitleSection() {
  const container = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const translateProgress = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const translateY = useMotionTemplate`${translateProgress}%`;

  const clipProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const clipPath = useMotionTemplate`circle(${clipProgress}% at 50% 50%)`;

  return (
    <>
      <section className="h-[300dvh] overflow-clip bg-black">
        <section className="sticky top-0 h-screen">
          <h1 className="flex h-full flex-col items-start justify-center gap-10 text-[15rem] uppercase text-white">
            <ClipText text="spider" />
            <ClipText text="verse" className="self-end" />
          </h1>
        </section>
        <section className="sticky top-0 flex h-screen items-center justify-center">
          <Image
            className=""
            src={"/images/spider logo.png"}
            alt="spider logo"
            width={500}
            height={500}
            priority
          />
        </section>
        <motion.section
          ref={container}
          className="sticky top-0 h-screen origin-center"
          style={{
            y: translateY,
            clipPath: clipPath,
          }}
        >
          <div className="h-screen w-full">
            <Canvas
              className="bg-spider-red-500"
              camera={{
                position: [0, 2.8, -5],
                rotation: [0, 3.15, 0],
                fov: 100,
                near: 0.1,
                far: 1000,
              }}
            >
              <>
                <directionalLight position={[0, 1.5, -10]} intensity={0.5} />
                <ambientLight intensity={5} />
                <group position={[0.05, 3, 0]}>
                  <Center>
                    <SpiderLogo />
                  </Center>
                </group>
                <ContactShadows scale={20} blur={0.5} />
              </>
            </Canvas>
          </div>
        </motion.section>
      </section>
      <section className="h-screen w-full bg-spider-red-500 p-8">
        <Cards />
      </section>
    </>
  );
}
