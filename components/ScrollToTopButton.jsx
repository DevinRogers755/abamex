"use client";
import Image from "next/image";
import ArrowTop from "@/assets/ArrowTop.svg";
import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setShowButton(scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return showButton ? (
    <button
      type="button"
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
      className="fixed bg-[#7F7F7F] rounded-[10px] bottom-2 right-2 w-12 h-12 border border-white-500"
    >
      <Image src={ArrowTop} alt="Arrow" className="h-full w-full" />
    </button>
  ) : null;
}
