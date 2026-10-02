export type ProjectCategory =
  | "architectural-woodwork"
  | "bespoke-furniture"
  | "residential-interiors"
  | "living-spaces"
  | "kitchens"
  | "bedrooms"
  | "wardrobes-storage"
  | "entrance-door-design"
  | "architectural-details";

export type AssetType = "photography" | "render" | "site-progress";

export interface ProjectImage {
  src: string;
  alt: string;
  assetType: AssetType;
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  heroImage: string;
  heroAlt: string;
  assetType: AssetType;
  images: ProjectImage[];
  brief?: string;
  location?: string;
  isFeatured: boolean;
  isPublished: boolean;
  renderNote?: string;
}

// ─── REAL VK INTERIOR PROJECTS ─────────────────────────────────────────────
// Only include verified, completed VK Interior work.
// No invented names, locations or testimonials.

export const projects: Project[] = [
  {
    slug: "bespoke-arched-entrance-door",
    title: "Bespoke Arched Entrance Door",
    category: "entrance-door-design",
    categoryLabel: "Entrance & Door Design",
    heroImage: "/images/projects/entrance-door-hero.jpg",
    heroAlt:
      "Bespoke arched double entrance door in walnut-toned fluted wood with gold stone handles, stone cladding surround and travertine steps — crafted by VK Interior",
    assetType: "photography",
    images: [
      {
        src: "/images/projects/entrance-door-hero.jpg",
        alt: "Full view of bespoke arched entrance door with concentric groove pattern and raw gold handles",
        assetType: "photography",
        caption: "Statement arched entrance with concentric groove detailing and stone hardware",
      },
    ],
    brief:
      "A statement arched entrance door in walnut-toned fluted wood, featuring concentric radial groove patterns and bespoke raw gold stone handles. Set within travertine stone cladding, this entrance makes an architectural declaration before a single interior space is revealed.",
    isFeatured: true,
    isPublished: true,
  },
  {
    slug: "teak-display-cabinet-living",
    title: "Teak Display & Collection Cabinet",
    category: "bespoke-furniture",
    categoryLabel: "Bespoke Furniture",
    heroImage: "/images/projects/display-cabinet-living.jpg",
    heroAlt:
      "Custom teak display cabinet with glass doors and brass fittings, housing a classical veena instrument — bespoke furniture by VK Interior",
    assetType: "photography",
    images: [
      {
        src: "/images/projects/display-cabinet-living.jpg",
        alt: "Teak and glass bespoke display cabinet with brass fittings beside an open-tread staircase",
        assetType: "photography",
        caption: "Custom teak display cabinet with brass hardware — designed to showcase what matters most",
      },
    ],
    brief:
      "A bespoke teak and glass display cabinet crafted to house a client's personal collection — including a classical veena — with museum-quality internal lighting and brass hardware. The unit is integrated beside the home's open-tread staircase on a white marble floor.",
    isFeatured: true,
    isPublished: true,
  },
  {
    slug: "curved-staircase-jali-wall-concept",
    title: "Curved Staircase & Jali Wall",
    category: "architectural-details",
    categoryLabel: "Architectural Details",
    heroImage: "/images/projects/staircase-concept.png",
    heroAlt:
      "Design concept: curved cantilever wooden staircase with organic form beside a geometric jali perforated wall panel — architectural design by VK Interior",
    assetType: "render",
    images: [
      {
        src: "/images/projects/staircase-concept.png",
        alt: "Architectural render of curved cantilever staircase with jali screen wall",
        assetType: "render",
        caption: "Design visualisation — curved cantilever staircase with geometric jali screen",
      },
    ],
    brief:
      "An architectural design concept featuring a curved cantilever wooden staircase with an organic sculptural form, complemented by a geometric jali screen wall that filters natural light into the space. Warm ivory tones and linear LED ceiling details complete the composition.",
    isFeatured: false,
    isPublished: true,
    renderNote:
      "This is a design visualisation / concept render. It represents VK Interior's design capabilities.",
  },
  {
    slug: "mirror-walkin-wardrobe-execution",
    title: "Walk-in Wardrobe — Under Execution",
    category: "wardrobes-storage",
    categoryLabel: "Wardrobes & Storage",
    heroImage: "/images/projects/walkin-wardrobe-execution.jpg",
    heroAlt:
      "Walk-in wardrobe corridor with floor-to-ceiling black-frame mirror panels and amber LED ceiling lighting — under execution by VK Interior",
    assetType: "site-progress",
    images: [
      {
        src: "/images/projects/walkin-wardrobe-execution.jpg",
        alt: "Walk-in wardrobe under construction showing mirror panel installation and false ceiling LED work",
        assetType: "site-progress",
        caption: "Site progress — full-height mirror wardrobe panels during execution",
      },
    ],
    brief:
      "A full-length walk-in wardrobe featuring floor-to-ceiling black-frame mirror panels and warm amber LED false ceiling lighting. Photographed during execution — showing the quality of installation work and scale of the turnkey delivery.",
    isFeatured: false,
    isPublished: true,
    renderNote:
      "Site-progress photograph taken during execution. This project is part of VK Interior's turnkey delivery portfolio.",
  },
  {
    slug: "contemporary-villa-complete-home",
    title: "Contemporary Villa — Design Concept",
    category: "residential-interiors",
    categoryLabel: "Complete Home Interiors",
    heroImage: "/images/spaces/hero_complete_home.jpg",
    heroAlt: "Premium contemporary Indian villa interior, wide angle view of an open plan living and dining space",
    assetType: "render",
    images: [
      {
        src: "/images/spaces/hero_complete_home.jpg",
        alt: "Premium contemporary Indian villa interior, wide angle view of an open plan living and dining space",
        assetType: "render",
        caption: "Design Concept — Open plan living and dining with rich walnut and stone",
      },
    ],
    brief:
      "A conceptual vision for a complete villa interior, showcasing VK Interior's design vocabulary. The space balances vast proportions with warmth, using extensive walnut panelling, textured stone walls, and a muted ivory base palette to create a sense of contemporary Indian luxury.",
    isFeatured: true,
    isPublished: true,
    renderNote: "This project represents a design concept and style reference for our premium interior execution capabilities.",
  },
  {
    slug: "minimalist-modern-kitchen",
    title: "Modern Modular Kitchen — Concept",
    category: "kitchens",
    categoryLabel: "Kitchens",
    heroImage: "/images/spaces/service_kitchen.jpg",
    heroAlt: "Premium modern modular kitchen in a contemporary Indian home",
    assetType: "render",
    images: [
      {
        src: "/images/spaces/service_kitchen.jpg",
        alt: "Premium modern modular kitchen with walnut cabinetry and island",
        assetType: "render",
        caption: "Design Concept — Sleek modular kitchen with warm wood finishes",
      },
    ],
    brief:
      "This design reference illustrates our approach to kitchen design: high function married with refined aesthetics. It features clean-lined walnut cabinetry, a monolithic ivory stone island, and carefully planned ambient lighting, designed specifically for the heavy use of an Indian home while maintaining elegance.",
    isFeatured: false,
    isPublished: true,
    renderNote: "This project represents a design concept and style reference for our premium interior execution capabilities.",
  },
  {
    slug: "luxurious-living-space",
    title: "Luxurious Living Area — Concept",
    category: "living-spaces",
    categoryLabel: "Living Spaces",
    heroImage: "/images/spaces/service_living.jpg",
    heroAlt: "Luxurious contemporary Indian living room with fluted walnut panelling",
    assetType: "render",
    images: [
      {
        src: "/images/spaces/service_living.jpg",
        alt: "Luxurious contemporary Indian living room",
        assetType: "render",
        caption: "Design Concept — Layered textures and fluted woodwork",
      },
    ],
    brief:
      "A style reference for a premium living room, highlighting the use of fluted walnut panelling, integrated cove lighting, and layered textures. It demonstrates our capability to execute complex architectural interior elements while ensuring the space remains warm and inviting.",
    isFeatured: false,
    isPublished: true,
    renderNote: "This project represents a design concept and style reference for our premium interior execution capabilities.",
  },
];

// ─── PLACEHOLDER SLOTS ──────────────────────────────────────────────────────
// These represent categories where real project images are to be added.
// Set isPublished: false until real assets are provided.

export const projectPlaceholders: Pick<
  Project,
  "slug" | "category" | "categoryLabel" | "isPublished"
>[] = [];

export const featuredProjects = projects.filter((p) => p.isFeatured && p.isPublished);
export const publishedProjects = projects.filter((p) => p.isPublished);

export const projectCategoryLabels: Record<ProjectCategory, string> = {
  "architectural-woodwork": "Architectural Woodwork",
  "bespoke-furniture": "Bespoke Furniture",
  "residential-interiors": "Residential Interiors",
  "living-spaces": "Living Spaces",
  kitchens: "Kitchens",
  bedrooms: "Bedrooms",
  "wardrobes-storage": "Wardrobes & Storage",
  "entrance-door-design": "Entrance & Door Design",
  "architectural-details": "Architectural Details",
};
