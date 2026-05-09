import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { siteData } from "@/data/content";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Services() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".services-header", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".service-item", {
        scrollTrigger: {
          trigger: ".services-list",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <section id="services" ref={containerRef} className="py-24 md:py-40 px-6 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        <div className="lg:col-span-4 services-header">
          <h2 className="text-sm font-bold uppercase tracking-widest text-secondary mb-4">
            Expertise
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-primary leading-tight sticky top-32">
            Our Services
          </h3>
        </div>

        <div className="lg:col-span-8 services-list flex flex-col">
          {siteData.services.map((service, index) => (
            <div 
              key={index}
              className="service-item border-t border-accent/30 py-10 first:border-t-0 group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                <span className="text-secondary/50 text-xl font-bold w-12 pt-1 group-hover:text-primary transition-colors">
                  0{index + 1}
                </span>
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold text-primary mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    {service.title}
                  </h4>
                  <p className="text-secondary text-lg leading-relaxed max-w-2xl">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
