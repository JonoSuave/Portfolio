/** "detail" is a UI fragment (panel, popover) shown without a device frame. */
export type Device = "desktop" | "mobile" | "detail";

export interface Shot {
  src: string;
  alt: string;
  device: Device;
  caption?: string;
  /** Full-page capture; rendered inside a scrollable frame instead of cropped. */
  tall?: boolean;
  /** Still frame for video shots (.mp4), used before playback and on cards. */
  poster?: string;
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
  /** "social" designs are vertical video ads rather than product UI. */
  category?: "social";
  shots: Shot[];
}

const saj = "/designs/south-american-journeys";
const tga = "/designs/tiny-grand-adventures";
const rm = "/designs/resource-manager";
const ads = "/designs/tga-social-ads";

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
    slug: "tiny-grand-adventures",
    title: "Tiny Grand Adventures",
    client: "Tiny Grand Adventures",
    year: "2026",
    summary:
      "A direct-booking site for Zen Haus, a tiny house near the Grand Canyon, built to win guests away from Airbnb fees.",
    description: [
      "Zen Haus had 200+ Airbnb reviews and a 4.92 rating but no home of its own. Every booking paid platform fees, and every guest relationship belonged to someone else. The goal was a site that feels as trustworthy as Airbnb while giving guests a reason to book direct.",
      "The design leads with the house at dusk, then gets out of the way: a photo-first property page with live availability and a sticky booking bar on mobile, a plain-spoken Why Book Direct page, and a giveaway popup that grows the email list for repeat stays.",
    ],
    role: ["UI/UX design", "Full-stack build", "Booking and payments"],
    tags: ["Next.js", "TypeScript", "Stripe", "Drizzle", "Framer Motion"],
    accent: "#E8DCCB",
    liveUrl: "https://www.tinygrandadventures.com/",
    shots: [
      { src: `${tga}/home-desktop.webp`, alt: "Zen Haus home page hero at dusk", device: "desktop", caption: "Home: the house at dusk, two clear actions" },
      { src: `${tga}/home-desktop-scroll.webp`, alt: "Tiny Grand Adventures home page, full scroll", device: "desktop", caption: "Home page, full scroll", tall: true },
      { src: `${tga}/zen-haus-desktop.webp`, alt: "Zen Haus property page with photo grid and availability", device: "desktop", caption: "Property page with photo grid and live availability" },
      { src: `${tga}/why-book-direct-desktop.webp`, alt: "Why Book Direct page", device: "desktop", caption: "Why Book Direct: the case against platform fees" },
      { src: `${tga}/giveaway-desktop.webp`, alt: "Win a Free Night email signup popup", device: "desktop", caption: "Giveaway popup that grows the email list" },
      { src: `${tga}/contact-desktop.webp`, alt: "Contact form", device: "desktop", caption: "Contact" },
      { src: `${tga}/home-mobile.webp`, alt: "Home page on mobile", device: "mobile", caption: "Home" },
      { src: `${tga}/zen-haus-mobile.webp`, alt: "Property page on mobile with sticky booking bar", device: "mobile", caption: "Property + sticky Book Now" },
      { src: `${tga}/giveaway-mobile.webp`, alt: "Giveaway popup on mobile", device: "mobile", caption: "Giveaway" },
      { src: `${tga}/why-book-direct-mobile.webp`, alt: "Why Book Direct page on mobile", device: "mobile", caption: "Why Book Direct" },
      { src: `${tga}/contact-mobile.webp`, alt: "Contact form on mobile", device: "mobile", caption: "Contact" },
      { src: `${tga}/home-mobile-scroll.webp`, alt: "Home page on mobile, full scroll", device: "mobile", caption: "Home, full scroll", tall: true },
    ],
  },
  {
    slug: "tga-social-ads",
    title: "Tiny Grand Adventures: Social Ads",
    client: "Tiny Grand Adventures",
    year: "2026",
    summary:
      "Short vertical video ads for Zen Haus, each built around one reason to book: the reviews, the feeling, the shortcut, the memories.",
    description: [
      "Paid social for a single tiny house has to stop the scroll in a second and make one point clearly. Each of these ads takes one angle and commits to it.",
      "Five Stars sets real guest reviews against the night sky the house is known for. You + Me is a claymation love note about the trip you take together. East Gate Entrance uses an illustrated map to show how staying on the quiet east side skips the South Entrance line. Keepsake is a photo-card montage of the small moments guests take home.",
    ],
    role: ["Creative direction", "Scriptwriting", "Motion design", "AI video production"],
    tags: ["HyperFrames", "Higgsfield", "Seedance", "Suno", "FFmpeg"],
    accent: "#E8DCCB",
    category: "social",
    shots: [
      { src: `${ads}/five-stars.mp4`, poster: `${ads}/five-stars-poster.webp`, alt: "Five Stars ad: guest reviews over a starry night sky", device: "mobile", caption: "Five Stars" },
      { src: `${ads}/you-plus-me.mp4`, poster: `${ads}/you-plus-me-poster.webp`, alt: "You + Me claymation ad", device: "mobile", caption: "You + Me" },
      { src: `${ads}/east-gate.mp4`, poster: `${ads}/east-gate-poster.webp`, alt: "East Gate Entrance ad: illustrated map of skipping the South Entrance line", device: "mobile", caption: "East Gate Entrance" },
      { src: `${ads}/keepsake.mp4`, poster: `${ads}/keepsake-poster.webp`, alt: "Keepsake ad: photo-card montage of guest moments", device: "mobile", caption: "Keepsake" },
    ],
  },
  {
    slug: "resource-manager",
    title: "Resource Manager: Unit Entries",
    client: "Environmental engineering firm",
    year: "2026",
    summary:
      "A billing-period timesheet for logging personnel, vehicle and equipment units, designed for both the office and the field.",
    description: [
      "Field staff at a national environmental engineering firm log the units they use (people, vehicles, equipment) against projects every billing period. The old process lived in spreadsheets and email. Unit Entries brings it into the company's resource reservation platform and feeds the ERP's billing export.",
    ],
    role: ["UI/UX design", "Full-stack build", "Mobile-first redesign"],
    tags: ["Next.js", "TypeScript", "Fluent UI", "Azure"],
    accent: "#DDE3EA",
    shots: [
      { src: `${rm}/unit-entries-desktop.webp`, alt: "Unit Entries desktop grid with frozen project columns and day grid", device: "desktop", caption: "Unit Entries: frozen project columns, scrolling day grid" },
      { src: `${rm}/new-reservation.gif`, alt: "Animated walkthrough of filling out the New Reservation form: dates, description and hours", device: "desktop", caption: "Filling out a New Reservation" },
      { src: `${rm}/reservations-desktop.webp`, alt: "Grouped reservations table with dates, counts and status", device: "desktop", caption: "Grouped reservations across projects" },
      { src: `${rm}/whats-new-panel.webp`, alt: "In-app What's New panel listing release notes", device: "detail", caption: "In-app What's New panel: release notes written for field staff, not developers" },
      { src: `${rm}/unit-entries-mobile.webp`, alt: "Unit Entries mobile view with submission banners and week tabs", device: "mobile", caption: "Unit Entries on mobile" },
    ],
  },
  {
    slug: "project-audits",
    title: "Project Quality Audits",
    client: "Environmental engineering firm",
    year: "2026",
    summary:
      "Quarterly quality audits of project folders and deliverables, from audit form to remediation tracking.",
    description: [
      "An engineering firm audits a sample of projects every quarter against its quality standards. The Audit App replaces a manual spreadsheet process: projects are pulled from the ERP each quarter, auditors work through a short yes/no form, and non-compliant projects flow to their project manager for remediation.",
      "The interface is built for auditors who review many projects in a sitting: a filterable audits dashboard, a focused audit form with comments on each question, and clear status states from Not Started through Awaiting Remediation to Complete. Sibling apps for specialised report types share the same design system.",
    ],
    role: ["UI/UX design", "Full-stack build"],
    tags: ["Next.js", "TypeScript", "shadcn/ui", "Azure"],
    accent: "#DCE8E4",
    shots: [
      // Desktop only. Screens must be anonymised (no client branding, people or projects).
    ],
  },
];

/** Designs with at least one screenshot; entries without shots stay hidden. */
export const publishedDesigns = designs.filter((d) => d.shots.length > 0);

export const getDesign = (slug: string) =>
  publishedDesigns.find((d) => d.slug === slug);

export const isVideo = (shot: Shot) => shot.src.endsWith(".mp4");

/** Image to show where a still is needed (cards, thumbnails). */
export const stillFor = (shot: Shot) => (isVideo(shot) ? shot.poster ?? "" : shot.src);

export const shotsFor = (design: Design, device: Device) =>
  design.shots.filter((s) => s.device === device);
