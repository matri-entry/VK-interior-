export interface ServiceItem {
  label: string;
}

export interface ServiceCategory {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: string; // emoji or icon name for fallback display
  heroImage: string | null; // null = use placeholder
  heroAlt: string;
  items: string[];
  isFeatured: boolean;
  displayOrder: number;
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "complete-homes",
    title: "Complete Home Interiors",
    shortTitle: "Complete Homes",
    description: "End-to-end interior design and execution for your entire home — from concept to handover.",
    longDescription:
      "VK Interior handles every room, every detail, every finish. From the initial design consultation through material selection, execution, and final handover, we take complete ownership of your home transformation. Available for 2BHK, 3BHK, 4BHK apartments, villas, and independent homes across Bengaluru.",
    icon: "🏠",
    heroImage: "/images/spaces/hero_complete_home.jpg",
    heroAlt: "Premium contemporary Indian villa interior, wide angle view of an open plan living and dining space",
    items: [
      "Whole Home Interiors",
      "2BHK Interiors",
      "3BHK Interiors",
      "4BHK Interiors",
      "Apartment Interiors",
      "Villa Interiors",
      "Independent Homes",
      "Turnkey Interiors",
      "End-to-End Execution",
    ],
    isFeatured: true,
    displayOrder: 1,
  },
  {
    slug: "kitchens",
    title: "Kitchen Design",
    shortTitle: "Kitchens",
    description: "Modular and custom kitchens crafted for how you actually cook and live.",
    longDescription:
      "From sleek modular systems to fully custom kitchen builds, VK Interior designs kitchens that combine intelligent storage with beautiful finishes. We work across all kitchen layouts — L-shaped, U-shaped, parallel, island, and open-plan — in materials that last.",
    icon: "🍽️",
    heroImage: "/images/spaces/service_kitchen.jpg",
    heroAlt: "Premium modern modular kitchen in a contemporary Indian home",
    items: [
      "Modular Kitchens",
      "Custom Kitchens",
      "L-Shaped Kitchens",
      "U-Shaped Kitchens",
      "Parallel Kitchens",
      "Straight Kitchens",
      "Island Kitchens",
      "Open Kitchens",
    ],
    isFeatured: true,
    displayOrder: 2,
  },
  {
    slug: "living-spaces",
    title: "Living Spaces",
    shortTitle: "Living",
    description: "Living and drawing rooms that invite, impress, and feel entirely your own.",
    longDescription:
      "Your living room sets the tone for your home. VK Interior designs living and drawing rooms that balance comfort with visual sophistication — featuring bespoke TV units, feature walls, display units, and architectural partitions that define and delight.",
    icon: "🛋️",
    heroImage: "/images/spaces/service_living.jpg",
    heroAlt: "Luxurious contemporary Indian living room with fluted walnut panelling",
    items: [
      "Living Rooms",
      "Drawing Rooms",
      "TV Units",
      "Feature Walls",
      "Partitions & Dividers",
      "Display Units",
      "Crockery Units",
      "Console Units",
      "Dining Spaces",
    ],
    isFeatured: true,
    displayOrder: 3,
  },
  {
    slug: "bedrooms",
    title: "Bedroom Design",
    shortTitle: "Bedrooms",
    description: "Master, guest, and children's bedrooms — designed for rest, privacy, and personal expression.",
    longDescription:
      "Every bedroom is a personal sanctuary. VK Interior designs spaces that balance storage intelligence with visual calm — crafting master suites, guest rooms, and children's bedrooms with bespoke wardrobes, dressing areas, and thoughtful lighting.",
    icon: "🛏️",
    heroImage: "/images/spaces/service_bedroom.jpg",
    heroAlt: "Elegant master bedroom in a premium Indian apartment",
    items: [
      "Master Bedrooms",
      "Guest Bedrooms",
      "Kids Bedrooms",
      "Wardrobes",
      "Walk-in Wardrobes",
      "Dressing Areas",
      "Bespoke Storage",
    ],
    isFeatured: true,
    displayOrder: 4,
  },
  {
    slug: "wardrobes-storage",
    title: "Wardrobes & Storage",
    shortTitle: "Wardrobes",
    description: "Walk-in wardrobes and bespoke storage systems — beautiful, functional, lasting.",
    longDescription:
      "VK Interior designs wardrobes and walk-in dressing rooms that treat storage as an architectural moment rather than a utilitarian afterthought. From full-height sliding systems to mirror-clad walk-in rooms with ambient lighting, every solution is crafted to the specific space.",
    icon: "🪞",
    heroImage: "/images/spaces/service_wardrobe.jpg",
    heroAlt: "Premium walk-in wardrobe and dressing area",
    items: [
      "Walk-in Wardrobes",
      "Sliding Wardrobe Systems",
      "Mirror Wardrobe Panels",
      "Dressing Areas",
      "Linen Storage",
      "Shoe Racks",
      "Utility Storage",
    ],
    isFeatured: false,
    displayOrder: 5,
  },
  {
    slug: "kids-study",
    title: "Kids & Study Rooms",
    shortTitle: "Kids & Study",
    description: "Imaginative, functional spaces for children to grow, play, and learn.",
    longDescription:
      "Children's rooms deserve as much design thought as any space in the home. VK Interior creates themed interiors, dedicated study areas, and playful storage solutions that evolve with your child and make their room a place they genuinely love.",
    icon: "🎨",
    heroImage: "/images/spaces/service_kids.jpg",
    heroAlt: "Premium kids bedroom with built-in study desk",
    items: [
      "Kids Bedrooms",
      "Themed Interiors",
      "Study Areas",
      "Play Zones",
      "Kids Storage Solutions",
      "Bunk Beds & Lofts",
    ],
    isFeatured: false,
    displayOrder: 6,
  },
  {
    slug: "pooja-spaces",
    title: "Pooja Rooms & Mandir",
    shortTitle: "Pooja Spaces",
    description: "Sacred spaces designed with reverence — beautiful mandirs and pooja rooms for your home.",
    longDescription:
      "VK Interior designs pooja rooms and mandir spaces that honour tradition while integrating seamlessly into the contemporary home. From dedicated rooms to compact mandir units, every pooja space is crafted with care for detail and devotion.",
    icon: "🪔",
    heroImage: "/images/spaces/service_pooja.jpg",
    heroAlt: "Beautiful contemporary Indian pooja room with carved walnut details",
    items: [
      "Dedicated Pooja Rooms",
      "Mandir Units",
      "Integrated Mandir",
      "Marble & Wood Mandirs",
      "Pooja Cabinet Storage",
    ],
    isFeatured: false,
    displayOrder: 7,
  },
  {
    slug: "doors-architectural-details",
    title: "Doors & Architectural Details",
    shortTitle: "Doors & Detailing",
    description: "Statement entrance doors, designer interiors doors, false ceilings, and fine architectural details.",
    longDescription:
      "The details are where a great interior becomes a truly exceptional one. VK Interior designs and executes statement entrance doors, bespoke interior doors, false ceilings, fluted wall panelling, and architectural lighting that elevate every surface of your home.",
    icon: "🚪",
    heroImage: "/images/projects/entrance-door-hero.jpg",
    heroAlt: "Bespoke arched entrance door crafted by VK Interior, Bengaluru",
    items: [
      "Entrance Doors",
      "Designer Interior Doors",
      "False Ceilings",
      "Fluted Wall Panelling",
      "Wood Panelling",
      "Architectural Lighting",
      "Staircases",
    ],
    isFeatured: true,
    displayOrder: 8,
  },
  {
    slug: "bespoke-furniture",
    title: "Bespoke Furniture & Woodwork",
    shortTitle: "Bespoke",
    description: "Furniture crafted entirely to your space, your taste, and your life.",
    longDescription:
      "Every piece of VK Interior bespoke furniture begins with a conversation and ends with a one-of-a-kind creation. Custom sofas, dining tables, display units, console tables, and storage — designed specifically for your home and built to last a generation.",
    icon: "🪑",
    heroImage: "/images/projects/display-cabinet-living.jpg",
    heroAlt: "Bespoke teak display cabinet crafted by VK Interior, Bengaluru",
    items: [
      "Custom Furniture",
      "Bespoke Display Units",
      "Custom Woodwork",
      "Dining Tables",
      "Console Units",
      "Media Units",
      "Bespoke Storage",
    ],
    isFeatured: true,
    displayOrder: 9,
  },
  {
    slug: "smart-home",
    title: "Smart Home Solutions",
    shortTitle: "Smart Home",
    description: "Intelligent home integration — smart doors, digital locks, and automated living.",
    longDescription:
      "VK Interior integrates smart home technology seamlessly into the interior design. From digital smart locks on bespoke doors to full home automation, smart home features are incorporated at the design stage — not added as an afterthought.",
    icon: "🏡",
    heroImage: "/images/spaces/service_smart_home.jpg",
    heroAlt: "Sleek modern entrance with a digital smart lock on a bespoke wooden door",
    items: [
      "Smart Entrance Doors",
      "Digital Locks",
      "Smart Lighting Control",
      "Home Automation",
      "Smart Home Integration",
    ],
    isFeatured: false,
    displayOrder: 10,
  },
];

export const featuredServices = serviceCategories
  .filter((s) => s.isFeatured)
  .sort((a, b) => a.displayOrder - b.displayOrder);

export const allServices = serviceCategories.sort(
  (a, b) => a.displayOrder - b.displayOrder
);
