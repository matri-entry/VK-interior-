"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/data/seo";

const slides = [
  {
    id: "customised",
    image: "/images/hero/hero_slide_1.jpg",
    location: "Contemporary Indian Interiors",
    headline: "100% Customised\nInteriors",
    subline: "Designed around your space, lifestyle and way of living.",
    primaryCta: { label: "Explore Our Spaces", href: "/spaces" },
  },
  {
    id: "complete-home",
    image: "/images/spaces/hero_complete_home.jpg",
    location: "Turnkey Execution",
    headline: "From First Sketch\nto Final Handover",
    subline: "End-to-end interior design and turnkey execution, managed under one roof.",
    primaryCta: { label: "Explore The VK Method", href: "/the-vk-method" },
  },
  {
    id: "craftsmanship",
    image: "/images/hero/hero_slide_3.jpg",
    location: "Custom Craftsmanship",
    headline: "Made For\nYour Space.",
    subline: "Thoughtful detailing, custom craftsmanship and a 10-Year Warranty on applicable work.",
    primaryCta: { label: "Discover Our Craft", href: "/spaces/bespoke-furniture" },
  },
  {
    id: "kitchens",
    image: "/images/hero/hero_slide_4.jpg",
    location: "Modular & Custom",
    headline: "Designed Around\nThe Way You Live.",
    subline: "Custom kitchens that balance beauty, function and everyday living.",
    primaryCta: { label: "Explore Kitchens", href: "/spaces/kitchens" },
  },
  {
    id: "bengaluru",
    image: "/images/hero/hero_slide_5.jpg",
    location: "Bengaluru, Karnataka",
    headline: "Your Home. Your\nVision. Our Craft.",
    subline: "Premium residential interiors and end-to-end execution in Bengaluru.",
    primaryCta: { label: "Get Free Estimation", href: "/contact#estimation" },
    secondaryCta: { label: "WhatsApp Us", href: whatsappUrl("Hi VK Interior, I would like to discuss a project in Bengaluru.") },
  },
];

const AUTOPLAY_INTERVAL = 6000;

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
    setIsPaused(false);
  };

  const currentSlide = slides[currentIndex];

  return (
    <section
      className="relative min-h-[90vh] md:min-h-screen w-full flex flex-col justify-end overflow-hidden"
      aria-label="VK Interior Showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Images */}
      <div className="absolute inset-0 bg-charcoal">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={currentSlide.image}
              alt={currentSlide.headline.replace("\n", " ")}
              fill
              priority
              quality={100}
              className="object-cover object-center"
              sizes="100vw"
            />
            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent sm:bg-none" />
            <div className="absolute inset-0 hidden sm:block bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-charcoal/70 via-charcoal/10 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-8xl mx-auto px-5 md:px-8 lg:px-12 w-full pb-20 md:pb-24">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentIndex}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-5 md:mb-7">
                <div className="h-px w-6 md:w-8 bg-ivory/80" aria-hidden="true" />
                <span className="font-body text-[9px] md:text-[10px] font-500 tracking-[0.2em] uppercase text-ivory/80">
                  {currentSlide.location}
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-display-md lg:text-display-lg font-display font-400 text-ivory mb-5 md:mb-6 whitespace-pre-line leading-[1.05]">
                {currentSlide.headline}
              </h2>

              {/* Subline */}
              <p className="font-body text-sm md:text-base lg:text-lg text-ivory/80 mb-8 md:mb-10 max-w-lg leading-relaxed">
                {currentSlide.subline}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Link
                  href={currentSlide.primaryCta.href}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 md:px-8 md:py-4 bg-ivory text-charcoal font-body font-500 text-xs md:text-sm tracking-[0.08em] uppercase rounded-sm hover:bg-stone transition-colors duration-300"
                >
                  {currentSlide.primaryCta.label}
                  <ArrowRight size={15} strokeWidth={2} />
                </Link>
                {currentSlide.secondaryCta && (
                  <Link
                    href={currentSlide.secondaryCta.href}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 md:px-8 md:py-4 bg-charcoal/30 backdrop-blur-sm text-ivory font-body font-400 text-xs md:text-sm tracking-[0.08em] uppercase rounded-sm border border-ivory/30 hover:bg-charcoal/50 hover:border-ivory/60 transition-all duration-300"
                  >
                    <MessageCircle size={15} strokeWidth={1.5} />
                    {currentSlide.secondaryCta.label}
                  </Link>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute right-5 md:right-8 lg:right-12 bottom-12 md:bottom-24 flex flex-col items-end gap-4">
          <div className="font-body text-[10px] tracking-[0.2em] text-ivory/60">
            0{currentIndex + 1} / 0{slides.length}
          </div>
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === idx
                    ? "w-8 md:w-10 h-1 bg-ivory"
                    : "w-2 h-1 bg-ivory/30 hover:bg-ivory/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
