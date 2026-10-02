"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import { whatsappUrl, callUrl } from "@/data/seo";

const navLinks = [
  { label: "Spaces", href: "/spaces" },
  { label: "Projects", href: "/projects" },
  { label: "The VK Method", href: "/the-vk-method" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Trap scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isHome = pathname === "/";
  // On home page, nav starts transparent; on other pages always solid
  const solidBg = scrolled || !isHome;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          solidBg
            ? "bg-ivory/97 backdrop-blur-md shadow-sm border-b border-stone/60"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 shrink-0"
              aria-label="VK Interior — Home"
            >
              {solidBg ? (
                /* Logo image on solid background — mix-blend-mode blends stone texture */
                <div className="relative h-10 w-32 overflow-hidden">
                  <Image
                    src="/images/logo/vk-interior-logo.png"
                    alt="VK Interior Logo"
                    fill
                    className="object-contain object-left"
                    style={{ mixBlendMode: "multiply" }}
                    sizes="128px"
                    priority
                  />
                </div>
              ) : (
                /* Text logo on transparent/dark hero */
                <div className="flex flex-col leading-none">
                  <span
                    className="font-display text-2xl font-semibold text-white tracking-tight"
                    style={{ letterSpacing: "-0.03em" }}
                  >
                    VK
                  </span>
                  <span
                    className="font-body text-[9px] font-medium text-white/80 tracking-[0.25em] uppercase -mt-0.5"
                  >
                    Interior
                  </span>
                </div>
              )}
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden md:flex items-center gap-1"
              aria-label="Primary navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-body font-400 tracking-wide transition-colors duration-200 rounded-sm
                    ${solidBg
                      ? "text-charcoal/70 hover:text-charcoal"
                      : "text-white/80 hover:text-white"
                    }
                    ${pathname === link.href || pathname.startsWith(link.href + "/")
                      ? solidBg ? "text-charcoal font-500" : "text-white font-500"
                      : ""
                    }
                  `}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors duration-200 ${
                  solidBg
                    ? "text-charcoal/60 hover:text-charcoal"
                    : "text-white/70 hover:text-white"
                }`}
                aria-label="WhatsApp VK Interior"
              >
                <MessageCircle size={18} strokeWidth={1.5} />
              </a>
              <Link
                href="/contact#estimation"
                className={`px-5 py-2.5 text-sm font-body font-500 tracking-wide rounded-sm transition-all duration-300 ${
                  solidBg
                    ? "bg-charcoal text-ivory hover:bg-walnut"
                    : "bg-white/15 text-white border border-white/30 hover:bg-white/25 backdrop-blur-sm"
                }`}
              >
                Get Free Estimation
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className={`md:hidden p-2 rounded-sm transition-colors duration-200 ${
                solidBg ? "text-charcoal" : "text-white"
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        ref={mobileMenuRef}
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-80 max-w-full bg-ivory flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-stone">
            <div className="flex flex-col leading-none">
              <span className="font-display text-2xl font-semibold text-charcoal tracking-tight">
                VK
              </span>
              <span className="font-body text-[9px] font-medium text-charcoal/60 tracking-[0.25em] uppercase -mt-0.5">
                Interior
              </span>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-charcoal/60 hover:text-charcoal"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 overflow-y-auto px-6 py-8" aria-label="Mobile navigation">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block py-3.5 text-2xl font-display font-400 tracking-tight text-charcoal border-b border-stone/50 transition-colors duration-200 hover:text-walnut ${
                      pathname === link.href ? "text-walnut" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile CTAs */}
          <div className="px-6 py-6 border-t border-stone space-y-3">
            <Link
              href="/contact#estimation"
              className="block w-full text-center py-3.5 bg-charcoal text-ivory font-body font-500 text-sm tracking-wide rounded-sm hover:bg-walnut transition-colors duration-300"
            >
              Get Free Estimation
            </Link>
            <div className="flex gap-3">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 border border-stone text-charcoal font-body font-400 text-sm tracking-wide rounded-sm hover:bg-stone/50 transition-colors duration-200"
              >
                <MessageCircle size={16} strokeWidth={1.5} />
                WhatsApp
              </a>
              <a
                href={callUrl}
                className="flex-1 flex items-center justify-center gap-2 py-3 border border-stone text-charcoal font-body font-400 text-sm tracking-wide rounded-sm hover:bg-stone/50 transition-colors duration-200"
              >
                <Phone size={16} strokeWidth={1.5} />
                Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
