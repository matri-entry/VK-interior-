export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  detail: string[];
}

export const vkMethodSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "Understanding Your Life",
    description:
      "Every VK Interior project begins with listening. We invest time in understanding how you live, what matters to you, and what your home needs to be.",
    detail: [
      "In-home or site consultation",
      "Understanding lifestyle and daily routines",
      "Aspirations, references, and preferences",
      "Budget and timeline alignment",
      "Site measurements and structural assessment",
    ],
  },
  {
    number: "02",
    title: "Concept",
    subtitle: "Translating Vision to Design",
    description:
      "Your brief becomes a design language. We develop spatial layouts, material palettes, and visual concepts that are specific to your home — not adapted from a template.",
    detail: [
      "Space planning and floor layout",
      "Design concept and visual direction",
      "Material and finish palette curation",
      "3D visualisations and mood boards",
      "Concept presentation and refinement",
    ],
  },
  {
    number: "03",
    title: "Curation",
    subtitle: "Every Material, Considered",
    description:
      "Materials, finishes, hardware, lighting, and textiles — every selection is deliberate. We curate choices that work together visually, practically, and for the long term.",
    detail: [
      "Material sample presentations",
      "Hardware and fixture selections",
      "Lighting design and specifications",
      "Furniture and furnishing curation",
      "Final design documentation",
    ],
  },
  {
    number: "04",
    title: "Execution",
    subtitle: "Craftsmanship in Practice",
    description:
      "Our execution team brings the design to life with precision. Site coordination, quality supervision, and consistent communication keep your project on track.",
    detail: [
      "Site preparation and civil coordination",
      "Carpentry and joinery execution",
      "False ceiling and electrical work",
      "Painting, wallcovering, flooring",
      "Regular site inspections and quality checks",
    ],
  },
  {
    number: "05",
    title: "Handover",
    subtitle: "Your Home, Complete",
    description:
      "The final stage is a thorough walkthrough, snag resolution, and a clean handover — so you move into a home that is truly finished, with a 10-year warranty on applicable work.",
    detail: [
      "Final snag inspection and resolution",
      "Thorough cleaning and dressing",
      "Home walkthrough with client",
      "Handover documentation",
      "10-Year Warranty on applicable work",
    ],
  },
];
