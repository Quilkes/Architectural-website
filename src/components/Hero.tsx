import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { siteData } from "@/data/content";
import { Button } from "./ui/Button";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-bg", {
        scale: 1.1,
        duration: 2,
        opacity: 0,
      })
      .from(
        ".hero-text-line",
        {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
        },
        "-=1.5"
      )
      .from(
        ".hero-cta",
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.5"
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-primary"
    >
      {/* Background Image */}
      <div
        className="hero-bg absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: `url(${siteData.hero.image})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-surface mt-20">
        <div className="overflow-hidden mb-6">
          <h1 className="hero-text-line text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
            {siteData.hero.headline}
          </h1>
        </div>
        <div className="overflow-hidden mb-10">
          <p className="hero-text-line text-lg md:text-xl text-surface/90 max-w-2xl mx-auto font-medium">
            {siteData.hero.subHeadline}
          </p>
        </div>
        <div className="hero-cta overflow-hidden">
          <Button asChild variant="outline" className="text-surface border-surface hover:bg-surface hover:text-primary">
            <a href={siteData.hero.ctaLink}>{siteData.hero.ctaText}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
