"use client";
import Image from "next/image";
import Logo from "@/assets/Logo.png";
import { useState, useEffect } from "react";

export default function Carousel() {
  const dots = [
    { id: 0, image: "/carousel-1.png" },
    { id: 1, image: "/carousel-2.png" },
    { id: 2, image: "/carousel-3.png" },
    { id: 3, image: "/carousel-4.png" },
    { id: 4, image: "/carousel-5.png" },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % dots.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="relative mt-10 w-full h-40 lg:h-80">
      <img
        src={dots[activeIndex].image}
        className="absolute w-full h-40 lg:h-80 z-10 object-cover brightness-50"
      />
      <div className="absolute z-20 w-full h-40 lg:h-80 flex justify-center items-center">
        <Image src={Logo} className="h-2/3 lg:h-auto w-auto" alt="Logo" />
      </div>
      <div className="absolute z-20 w-full bottom-2 flex justify-center items-center space-x-4">
        {dots.map((dot) => {
          return (
            <div
              key={dot.id}
              className={`${
                dot.id == activeIndex ? "bg-white" : "bg-white/50"
              } rounded-full w-2 h-2 lg:w-4 lg:h-4 cursor-pointer`}
              onClick={() => setActiveIndex(dot.id)}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
