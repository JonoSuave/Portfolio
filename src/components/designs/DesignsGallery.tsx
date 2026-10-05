import React, { useState } from "react";
import { publishedDesigns, shotsFor } from "@/data/designs";
import DesignsLayout from "./DesignsLayout";
import DesignCard from "./DesignCard";

const filters = [
  { id: "all", label: "All" },
  { id: "responsive", label: "Desktop + Mobile" },
  { id: "desktop", label: "Desktop" },
  { id: "social", label: "Social ads" },
] as const;

type FilterId = (typeof filters)[number]["id"];

const DesignsGallery = () => {
  const [filter, setFilter] = useState<FilterId>("all");

  const visible = publishedDesigns.filter((d) => {
    const hasMobile = shotsFor(d, "mobile").length > 0;
    const hasDesktop = shotsFor(d, "desktop").length > 0;
    if (filter === "responsive") return hasDesktop && hasMobile;
    if (filter === "desktop") return hasDesktop && !hasMobile;
    if (filter === "social") return d.category === "social";
    return true;
  });

  return (
    <DesignsLayout backTo={{ href: "/", label: "Portfolio" }}>
      <section className="mx-auto max-w-7xl px-4 pb-24 pt-14 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">UI/UX Designs</h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Interfaces I've designed and built for clients and internal teams, shown as they
          ship on desktop and, where it matters, on a phone.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === f.id
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((d) => (
            <DesignCard key={d.slug} design={d} />
          ))}
        </div>
        {visible.length === 0 && (
          <p className="mt-10 text-gray-500">No designs in this category yet.</p>
        )}
      </section>
    </DesignsLayout>
  );
};

export default DesignsGallery;
