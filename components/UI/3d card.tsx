import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface props {
  images: {
    bg: StaticImageData;
    logo: StaticImageData;
    top: StaticImageData;
  };
}

export default function ThreeDCard({ images }: props) {
  const parentVariants = {
    init: {},
    hover: {},
  };
  const boxVariants = {
    hover: { rotateX: 15, filter: "brightness(0.5)" },
  };
  const logoVariants = {
    hover: { y: -20 },
  };
  const gwenVariants = {
    init: {
      scale: 0.8,
      opacity: 0,
    },
    hover: {
      scale: 1.1,
      opacity: 1,
    },
  };
  return (
    <>
      <motion.div
        variants={parentVariants}
        initial="init"
        whileHover="hover"
        style={{
          perspective: "1000px",
        }}
        className="m-w-[500px] relative flex aspect-square items-end justify-center"
      >
        <motion.div variants={boxVariants} className="absolute inset-0 -z-10">
          <Image
            className="w-full"
            src={images.bg.src}
            alt="bg"
            width={200}
            height={200}
          />
        </motion.div>
        <motion.div
          variants={gwenVariants}
          className="absolute inset-0 bottom-0 -z-10 origin-bottom"
        >
          <Image
            className="w-full"
            src={images.top.src}
            alt="top"
            width={200}
            height={200}
          />
        </motion.div>
        <motion.div
          variants={logoVariants}
          className="w-3/4 object-contain pb-6"
        >
          <Image src={images.logo.src} alt="logo" width={200} height={200} />
        </motion.div>
      </motion.div>
    </>
  );
}
