"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "./focus-cards";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // container: gridRef,
    // offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  const [hovered, setHovered] = useState<{ globalIndex: number | null; columnIndex: number | null }>({ 
    globalIndex: null, 
    columnIndex: null 
  });

  return (
    <div
      //h-[40rem] overflow-y-auto
      className={cn("bg-[#FAF9F6] overflow-hidden items-start max-w-6xl mx-auto shadow-lg sm:pb-20", className)}
      ref={gridRef}
    >
      <div
        className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start w-full mx-auto gap-10 pt-28 -mb-24 sm:mb-0 sm:pt-0 md:py-24 px-4 md:px-10"
        ref={gridRef}
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }}
              key={"grid-1" + idx}
            >
              <Card
                key={idx}
                card={el}
                index={idx}
                hovered={hovered}
                setHovered={setHovered}
                totalColumns={images.length}
              />
            </motion.div>
          ))}
        </div>
        <div className="hidden sm:grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <Card
                key={idx}
                card={el}
                index={idx + third}
                hovered={hovered}
                setHovered={setHovered}
                totalColumns={images.length}
              />
            </motion.div>
          ))}
        </div>
        <div className="hidden sm:grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <Card
                key={idx}
                card={el}
                index={idx + 2 * third}
                hovered={hovered}
                setHovered={setHovered}
                totalColumns={images.length}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};