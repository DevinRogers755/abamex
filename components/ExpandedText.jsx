"use client";
import { useState } from "react";
import Image from "next/image";

export default function ExpandedText({ text, image }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <p className="font-['Arsenal'] font-bold text-lg text-center">
        {text.title}
      </p>
      {!expanded ? (
        <p className="font-['Arsenal'] text-md self-stretch">
          {text.normalText}{" "}
          <span
            className="underline cursor-pointer"
            onClick={() => setExpanded(true)}
          >
            Ver más
          </span>
        </p>
      ) : (
        <p className="font-['Arsenal'] text-md self-stretch">
          {text.normalText}{" "}
          <ul className="list-disc">
            {text.points.map((point) => {
              return <li>{point}</li>;
            })}
          </ul>
          <span
            className="underline cursor-pointer"
            onClick={() => setExpanded(false)}
          >
            Ver menos
          </span>
        </p>
      )}
      <div className="grow flex items-center justify-center w-full h-24 mt-3 mb-3 lg:mb-0 lg:mt-10">
        <Image src={image} className="w-24 lg:w-1/5 h-auto" alt={text.title} />
      </div>
    </div>
  );
}
