import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { siteData } from "@/data/content";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function About() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".about-image-container", {
        x: -50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      })
      .from(
        ".about-image",
        {
          scale: 1.1,
          duration: 1.2,
          ease: "power3.out",
        },
        "<"
      )
      .from(
        ".about-text",
        {
          y: 30,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.8"
      );
    },
    { scope: containerRef }
  );

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-40 px-6 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Image Column */}
        <div className="about-image-container overflow-hidden aspect-[4/5] lg:aspect-square relative">
          <img
            src={siteData.about.image}
            alt="Minimalist architecture interior"
            className="about-image w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Text Column */}
        <div className="flex flex-col justify-center">
          <h2 className="about-text text-sm font-bold uppercase tracking-widest text-secondary mb-4">
            About Us
          </h2>
          <h3 className="about-text text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
            {siteData.about.title}
          </h3>
          <p className="about-text text-lg text-secondary leading-relaxed text-balance">
            {siteData.about.content}
          </p>
        </div>
      </div>
    </section>
  );
}
