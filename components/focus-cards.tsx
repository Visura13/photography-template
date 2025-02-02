/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useCallback } from "react";

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
    const cardRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout>();

    const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && window.innerWidth <= 768) {
            setHovered({ 
              globalIndex: index, 
              columnIndex: Math.floor(index / Math.ceil(totalColumns)) 
            });
          } else if (window.innerWidth <= 768) {
            setHovered({ globalIndex: null, columnIndex: null });
          }
        });
      }, 100);
    }, [index, setHovered, totalColumns]);

    useEffect(() => {
      const observer = new IntersectionObserver(handleIntersection, { 
        threshold: 1.0,
        rootMargin: '0px'
      });

      if (cardRef.current) {
        observer.observe(cardRef.current);
      }

      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        observer.disconnect();
      };
    }, [handleIntersection]);

    const isCurrentCardHovered = hovered.globalIndex === index;
    const isAnyCardHovered = hovered.globalIndex !== null;

    return (
      <div
        ref={cardRef}
        onMouseEnter={() => setHovered({ 
          globalIndex: index, 
          columnIndex: Math.floor(index / Math.ceil(totalColumns)) 
        })}
        onMouseLeave={() => setHovered({ globalIndex: null, columnIndex: null })}
        className={cn(
          "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-96 w-full transition-all duration-300 ease-out cursor-pointer",
          isAnyCardHovered && !isCurrentCardHovered && "blur-sm scale-[0.98]"
        )}
      >
        <img
          src={card}
          alt={card}
          className="object-cover absolute inset-0 w-full h-full"
        />
        <div
          className={cn(
            "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
            isCurrentCardHovered ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="text-xl md:text-2xl font-medium text-white sm:bg-clip-text sm:text-transparent sm:bg-gradient-to-b sm:from-neutral-50 sm:to-neutral-200">
            Dilusha & Udara
          </div>
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";


