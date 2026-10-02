import Link from "next/link";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { siteMeta, whatsappUrl, callUrl, emailUrl } from "@/data/seo";
import { allServices } from "@/data/services";

const footerNav = [
  { label: "Home", href: "/" },
  { label: "Spaces", href: "/spaces" },
  { label: "Projects", href: "/projects" },
  { label: "The VK Method", href: "/the-vk-method" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const { contact } = siteMeta;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-ivory/80" role="contentinfo">
      {/* Main footer grid */}
      <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            {/* Logo — ivory background so mix-blend works */}
            <div className="inline-block bg-ivory/10 rounded-sm px-3 py-2 mb-6">
              <div className="flex flex-col leading-none">
                <span className="font-display text-3xl font-semibold text-ivory tracking-tight">
                  VK
                </span>
                <span className="font-body text-[9px] font-medium text-ivory/60 tracking-[0.3em] uppercase -mt-1">
                  Interior
                </span>
              </div>
            </div>
            <p className="font-body text-sm text-ivory/60 leading-relaxed mb-6">
              Premium residential interior design and execution in Bengaluru.
              Crafted around your life, with a 10-Year Warranty on applicable work.
            </p>
            {/* Quick contact */}
            <div className="space-y-3">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-ivory/70 hover:text-ivory transition-colors duration-200 group"
              >
                <MessageCircle size={15} strokeWidth={1.5} className="shrink-0 text-walnut-light group-hover:text-ivory transition-colors" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href={callUrl}
                className="flex items-center gap-3 text-sm text-ivory/70 hover:text-ivory transition-colors duration-200 group"
              >
                <Phone size={15} strokeWidth={1.5} className="shrink-0 text-walnut-light group-hover:text-ivory transition-colors" />
                <span>{contact.phoneDisplay}</span>
              </a>
              <a
                href={emailUrl}
                className="flex items-center gap-3 text-sm text-ivory/70 hover:text-ivory transition-colors duration-200 group"
              >
                <Mail size={15} strokeWidth={1.5} className="shrink-0 text-walnut-light group-hover:text-ivory transition-colors" />
                <span>{contact.email}</span>
              </a>
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="font-body text-xs font-500 tracking-[0.2em] uppercase text-ivory/40 mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory/70 hover:text-ivory transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div>
            <h3 className="font-body text-xs font-500 tracking-[0.2em] uppercase text-ivory/40 mb-5">
              Our Spaces
            </h3>
            <ul className="space-y-3">
              {allServices.slice(0, 8).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/spaces/${service.slug}`}
                    className="text-sm text-ivory/70 hover:text-ivory transition-colors duration-200"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address + CTA column */}
          <div>
            <h3 className="font-body text-xs font-500 tracking-[0.2em] uppercase text-ivory/40 mb-5">
              Our Location
            </h3>
            <address className="not-italic mb-6">
              <div className="flex gap-3">
                <MapPin size={15} strokeWidth={1.5} className="shrink-0 mt-0.5 text-walnut-light" />
                <div className="text-sm text-ivory/70 leading-relaxed">
                  <div>{contact.address.line1}</div>
                  <div>{contact.address.line2}</div>
                  <div>{contact.address.line3}</div>
                  <div className="mt-1">
                    {contact.address.city} — {contact.address.pincode}
                  </div>
                </div>
              </div>
            </address>

            <Link
              href="/contact#estimation"
              className="inline-block px-6 py-3 bg-walnut text-ivory font-body font-500 text-sm tracking-wide rounded-sm hover:bg-walnut-light transition-colors duration-300"
            >
              Get Free Estimation
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory/40 font-body text-center sm:text-left">
            © {year} VK Interior. All rights reserved. Bengaluru, Karnataka, India.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="text-xs text-ivory/40 hover:text-ivory/70 transition-colors duration-200"
            >
              Privacy
            </Link>
            <Link
              href="/contact"
              className="text-xs text-ivory/40 hover:text-ivory/70 transition-colors duration-200"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile bottom bar safe area spacer */}
      <div className="h-16 md:h-0 bg-charcoal" />
    </footer>
  );
}
