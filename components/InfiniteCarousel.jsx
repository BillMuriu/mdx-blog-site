"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRef, useEffect } from "react";

const InfiniteCarousel = ({ logos }) => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;

    function addAnimation() {
      if (!scroller) return;

      const innerScroller = scroller.querySelector(".scroll_inner");

      if (!innerScroller) return;

      if (innerScroller.getAttribute("data-cloned") === "true") return;
      const innerScrollerChildren = Array.from(innerScroller.children);

      innerScrollerChildren.forEach((item) => {
        const extendedLogos = item.cloneNode(true);

        innerScroller.appendChild(extendedLogos);
      });

      innerScroller.setAttribute("data-cloned", "true");

      console.log(innerScrollerChildren);
    }

    addAnimation();
  }, []);
  return (
    <div ref={scrollerRef} className="scroller max-w-[800px]">
      <div className="scroll_inner animate-infinite_scroll flex flex-wrap gap-4 py-4">
        {logos.map((logo, index) => {
          return (
            <Link
              className="p-1 bg-white flex items-center justify-center"
              key={index}
              href="#"
            >
              <Image
                src={logo.src}
                alt={`logo ${index + 1}`}
                height={50}
                width={50}
              />
            </Link>
          );
        })}
      </div>
      <div className="scroll_inner animate-infinite_scroll_right flex flex-wrap gap-4 py-4">
        {logos.map((logo, index) => {
          return (
            <Link
              className="p-1 bg-white flex items-center justify-center"
              key={index}
              href="#"
            >
              <Image
                src={logo.src}
                alt={`logo ${index + 1}`}
                height={50}
                width={50}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
