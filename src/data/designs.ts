export type Device = "desktop" | "mobile";

export interface Shot {
  src: string;
  alt: string;
  device: Device;
  caption?: string;
  /** Full-page capture; rendered inside a scrollable frame instead of cropped. */
  tall?: boolean;
}

export interface Design {
  slug: string;
  title: string;
  client: string;
  year: string;
  summary: string;
  description: string[];
  role: string[];
  tags: string[];
  /** Background colour of the hero stage and mobile panel. */
  accent: string;
  liveUrl?: string;
  shots: Shot[];
}

const saj = "/designs/south-american-journeys";

export const designs: Design[] = [
  {
    slug: "south-american-journeys",
    title: "South American Journeys",
    client: "South American Journeys",
    year: "2025",
    summary:
      "An editorial travel site for private, locally guided journeys across Peru and the Amazon.",
    description: [
      "South American Journeys sells slow, private travel designed by a founder who has worked in the region since 1989. The site needed to feel like the trip itself: unhurried, photographic, and personal, while still moving visitors toward a single action, starting a conversation about their trip.",
      "I paired a serif display face with a quiet sans for body copy, and built the palette from the sage and sand tones of the Andes. Full-bleed photography carries the emotion; the layout stays out of its way. On mobile, the hero, region stories and trip-planning form were reworked so every section reads in one thumb-scroll.",
    ],
    role: ["UI/UX design", "Front-end build", "Responsive layout"],
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    accent: "#9DB5A5",
    liveUrl: "https://southamericanjourneys.com/",
    shots: [
      { src: `${saj}/home-desktop.webp`, alt: "South American Journeys home page hero over Machu Picchu", device: "desktop", caption: "Home: one headline, one call to action" },
      { src: `${saj}/home-desktop-scroll.webp`, alt: "South American Journeys home page, full scroll", device: "desktop", caption: "Home page, full scroll", tall: true },
      { src: `${saj}/explore-desktop.webp`, alt: "Explore Experiences page with Andes and Amazon regions", device: "desktop", caption: "Explore: each region told as its own story" },
      { src: `${saj}/el-dorado-desktop.webp`, alt: "El Dorado Amazon Sanctuary feature page", device: "desktop", caption: "Feature page for the El Dorado Amazon Sanctuary" },
      { src: `${saj}/meet-mili-desktop.webp`, alt: "About the founder page", device: "desktop", caption: "About the founder" },
      { src: `${saj}/plan-your-trip-desktop.webp`, alt: "Plan your trip enquiry form", device: "desktop", caption: "Trip enquiry form" },
      { src: `${saj}/home-mobile.webp`, alt: "Home page on mobile", device: "mobile", caption: "Home" },
      { src: `${saj}/explore-mobile.webp`, alt: "Explore page on mobile", device: "mobile", caption: "Explore" },
      { src: `${saj}/el-dorado-mobile.webp`, alt: "El Dorado feature page on mobile", device: "mobile", caption: "El Dorado" },
      { src: `${saj}/meet-mili-mobile.webp`, alt: "About the founder page on mobile", device: "mobile", caption: "Founder" },
      { src: `${saj}/plan-your-trip-mobile.webp`, alt: "Trip enquiry form on mobile", device: "mobile", caption: "Plan your trip" },
      { src: `${saj}/home-mobile-scroll.webp`, alt: "Home page on mobile, full scroll", device: "mobile", caption: "Home, full scroll", tall: true },
    ],
  },
  {
    slug: "scs-resource-manager",
    title: "SCS Works: Unit Entries",
    client: "SCS Engineers",
    year: "2026",
    summary:
      "A billing-period timesheet for logging personnel, vehicle and equipment units, designed for both the office and the field.",
    description: [
      "Field staff at SCS Engineers log the units they use (people, vehicles, equipment) against projects every billing period. The old process lived in spreadsheets and email. Unit Entries brings it into SCS Works, the company's resource reservation platform.",
      "On desktop it is a dense, spreadsheet-like grid: a frozen project column, a scrolling day grid, inline editing and project/task pickers. On a phone that layout falls apart, so the mobile view is redesigned around the same data: a compact unit grid, bottom sheets for filters and row details, and a sticky submit banner within thumb reach.",
    ],
    role: ["UI/UX design", "Full-stack build", "Mobile-first redesign"],
    tags: ["Next.js", "TypeScript", "Fluent UI", "Azure"],
    accent: "#E9D7DA",
    shots: [
      // Add captures to public/designs/scs-resource-manager/ and list them here, e.g.
      // { src: "/designs/scs-resource-manager/unit-entries-desktop.webp", alt: "...", device: "desktop" },
      // { src: "/designs/scs-resource-manager/unit-entries-mobile.webp", alt: "...", device: "mobile" },
    ],
  },
  {
    slug: "scs-audit-app",
    title: "SCS Project Audits",
    client: "SCS Engineers",
    year: "2026",
    summary:
      "Quarterly quality audits of project folders and deliverables, from audit form to remediation tracking.",
    description: [
      "SCS Engineers audits a sample of projects every quarter against its quality standards. The Audit App replaces a manual spreadsheet process: projects are pulled from Vantagepoint each quarter, auditors work through a short yes/no form, and non-compliant projects flow to their project manager for remediation.",
      "The interface is built for auditors who review many projects in a sitting: a filterable audits dashboard, a focused audit form with comments on each question, and clear status states from Not Started through Awaiting Remediation to Complete. Sibling apps for Phase One reports and officer-level review share the same design system.",
    ],
    role: ["UI/UX design", "Full-stack build"],
    tags: ["Next.js", "TypeScript", "shadcn/ui", "Azure"],
    accent: "#DCE8E4",
    shots: [
      // Desktop only, e.g.
      // { src: "/designs/scs-audit-app/audits-dashboard-desktop.webp", alt: "...", device: "desktop" },
    ],
  },
];

/** Designs with at least one screenshot; entries without shots stay hidden. */
export const publishedDesigns = designs.filter((d) => d.shots.length > 0);

export const getDesign = (slug: string) =>
  publishedDesigns.find((d) => d.slug === slug);

export const shotsFor = (design: Design, device: Device) =>
  design.shots.filter((s) => s.device === device);
