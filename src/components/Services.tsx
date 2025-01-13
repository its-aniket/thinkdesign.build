"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { cardsData } from "@/constants/index";

const Services = () => {
  const [activeCard, setActiveCard] = useState("c1");
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Ensure refs are initialized
    if (
      !cardsRef.current.every((ref) => ref) ||
      !contentRefs.current.every((ref) => ref)
    ) {
      console.warn("Some refs are not properly initialized");
      return;
    }

    const timeline = gsap.timeline();

    // Reset all cards
    timeline.to(cardsRef.current, {
      width: "5%",
      duration: 0.8,
      ease: "power2.inOut",
    });

    timeline.to(
      contentRefs.current,
      {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
      },
      "<"
    );

    // Animate active card
    const activeIndex = cardsData.findIndex((card) => card.id === activeCard);
    if (activeIndex !== -1) {
      timeline.to(cardsRef.current[activeIndex], {
        width: "85%",
        duration: 0.8,
        ease: "power2.inOut",
      });

      timeline.to(
        contentRefs.current[activeIndex],
        {
          opacity: 1,
          duration: 0.8,
          ease: "power2.inOut",
        },
        "<"
      );
    }
  }, [activeCard]);

  return (
    <div className="flex flex-col w-full h-auto p-4 ">
    <span className="left-2 text-[#C9C9C9]">our services</span>
    <div className="mb-4 h-[1px] w-full bg-[#C9C9C9]">

    </div>
      <div className="flex gap-4 w-full overflow-hidden">
        {cardsData.map((card, index) => (
          <div
          ref={(el) => {
            cardsRef.current[index] = el;
          }}
            key={card.id}
            className="relative flex flex-col justify-end rounded-2xl overflow-hidden cursor-pointer h-[40vh] bg-cover bg-center"
            onClick={() => setActiveCard(card.id)}
            style={{
              backgroundImage: `url(${card.image})`,
            }}
          >
            <div
              ref={(el) => {contentRefs.current[index] = el}}
              className="flex items-start flex-col p-4 bg-gradient-to-t from-black/70 to-transparent text-white opacity-0"
            >
              <h4 className="uppercase font-bold text-lg">{card.title}</h4>
              <p className="text-sm text-gray-300">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
