import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { navItems } from "@/data/content";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".footer-content", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <footer ref={containerRef} className="bg-primary text-surface py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        
        <div className="footer-content text-center md:text-left">
          <a href="#home" className="text-2xl font-bold tracking-tight mb-4 inline-block">
            ARCHITECTURA.
          </a>
          <p className="text-surface/60 text-sm max-w-xs">
            Timeless design for the modern world.
          </p>
        </div>

        <nav className="footer-content flex flex-wrap justify-center gap-6 md:gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-surface/80 hover:text-surface transition-colors uppercase tracking-wider"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="footer-content flex gap-6 mt-4 md:mt-0">
          <a href="#" className="text-surface/80 hover:text-surface transition-colors text-sm uppercase tracking-wider">Instagram</a>
          <a href="#" className="text-surface/80 hover:text-surface transition-colors text-sm uppercase tracking-wider">LinkedIn</a>
          <a href="#" className="text-surface/80 hover:text-surface transition-colors text-sm uppercase tracking-wider">Twitter</a>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-surface/20 flex flex-col md:flex-row justify-between items-center gap-4 footer-content">
        <p className="text-surface/50 text-sm">
          &copy; {new Date().getFullYear()} Architectura Studio. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-surface/50 hover:text-surface text-sm transition-colors">Privacy Policy</a>
          <a href="#" className="text-surface/50 hover:text-surface text-sm transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
