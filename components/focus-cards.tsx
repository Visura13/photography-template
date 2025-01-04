"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    totalColumns,
  }: {
    card: string;
    index: number;
    hovered: { globalIndex: number | null; columnIndex: number | null };
    setHovered: React.Dispatch<React.SetStateAction<{ globalIndex: number | null; columnIndex: number | null }>>;
    totalColumns: number;
  }) => {
    const isCurrentCardHovered = 
      hovered.globalIndex === index;
    const isAnyCardHovered = hovered.globalIndex !== null;

    return (
      <div
        onMouseEnter={() => setHovered({ 
          globalIndex: index, 
          columnIndex: Math.floor(index / Math.ceil(totalColumns)) 
        })}
        onMouseLeave={() => setHovered({ globalIndex: null, columnIndex: null })}
        className={cn(
          "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out cursor-pointer",
          isAnyCardHovered && !isCurrentCardHovered && "blur-sm scale-[0.98]"
        )}
      >
        <Image
          src={card}
          alt={card}
          fill
          className="object-cover absolute inset-0"
        />
        <div
          className={cn(
            "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
            isCurrentCardHovered ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
            Dilusha & Udara
          </div>
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";


