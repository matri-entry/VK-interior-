import { Shield, Wrench, Home, Cpu } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "10-Year Warranty",
    description: "On applicable work",
  },
  {
    icon: Wrench,
    title: "Turnkey Execution",
    description: "Design to handover, complete",
  },
  {
    icon: Cpu,
    title: "Smart Home Ready",
    description: "Integrated technology",
  },
  {
    icon: Home,
    title: "Bengaluru-Based",
    description: "J.P. Nagar, serving all areas",
  },
];

export function TrustBar() {
  return (
    <section
      className="bg-ivory border-b border-stone"
      aria-label="Key assurances"
    >
      <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-stone">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-3 px-4 sm:px-6 py-6 md:py-8"
              >
                <Icon
                  size={18}
                  strokeWidth={1.5}
                  className="shrink-0 text-walnut mt-0.5 sm:mt-0"
                  aria-hidden="true"
                />
                <div>
                  <div className="font-body text-xs font-600 text-charcoal tracking-wide">
                    {item.title}
                  </div>
                  <div className="font-body text-xs text-charcoal/55 mt-0.5">
                    {item.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
