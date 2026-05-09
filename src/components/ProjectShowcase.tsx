import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { siteData } from "@/data/content";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ProjectShowcase() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Header animation
      gsap.from(".projects-header", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Cards stagger animation
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <section id="projects" ref={containerRef} className="py-24 md:py-40 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="projects-header mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-secondary mb-4">
              Selected Works
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
              Featured Projects
            </h3>
          </div>
          <a href="#" className="text-sm font-bold uppercase tracking-widest text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors">
            View All Projects
          </a>
        </div>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {siteData.projects.map((project) => (
            <div
              key={project.id}
              className="project-card group relative overflow-hidden bg-surface aspect-[4/3] cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <p className="text-surface/80 text-sm font-medium uppercase tracking-wider mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {project.category}
                </p>
                <h4 className="text-surface text-2xl md:text-3xl font-bold translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                  {project.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
