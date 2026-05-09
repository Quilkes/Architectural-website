import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { siteData } from "@/data/content";
import { Button } from "./ui/Button";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });

      tl.from(".contact-text", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      }).from(
        ".contact-form-element",
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.5"
      );
    },
    { scope: containerRef }
  );

  return (
    <section id="contact" ref={containerRef} className="py-24 md:py-40 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Info */}
        <div>
          <h2 className="contact-text text-sm font-bold uppercase tracking-widest text-secondary mb-4">
            Inquiries
          </h2>
          <h3 className="contact-text text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
            {siteData.contact.title}
          </h3>
          <p className="contact-text text-lg text-secondary mb-12 max-w-md">
            {siteData.contact.description}
          </p>

          <div className="space-y-6">
            <div className="contact-text">
              <h5 className="text-sm font-bold uppercase tracking-widest text-primary mb-1">Address</h5>
              <p className="text-secondary">{siteData.contact.address}</p>
            </div>
            <div className="contact-text">
              <h5 className="text-sm font-bold uppercase tracking-widest text-primary mb-1">Email</h5>
              <a href={`mailto:${siteData.contact.email}`} className="text-secondary hover:text-primary transition-colors">
                {siteData.contact.email}
              </a>
            </div>
            <div className="contact-text">
              <h5 className="text-sm font-bold uppercase tracking-widest text-primary mb-1">Phone</h5>
              <p className="text-secondary">{siteData.contact.phone}</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-surface p-8 md:p-12 shadow-sm border border-accent/10">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="contact-form-element">
              <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full border-b border-accent/50 bg-transparent py-3 text-primary focus:border-primary focus:outline-none transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div className="contact-form-element">
              <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full border-b border-accent/50 bg-transparent py-3 text-primary focus:border-primary focus:outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="contact-form-element">
              <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full border-b border-accent/50 bg-transparent py-3 text-primary focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <div className="contact-form-element pt-4">
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
