import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, Monitor, PanelRight, Smartphone } from "lucide-react";
import { getDesign, publishedDesigns, shotsFor, type Shot } from "@/data/designs";
import DesignsLayout from "./DesignsLayout";
import DesignCard from "./DesignCard";
import Lightbox from "./Lightbox";
import AutoVideo from "./AutoVideo";
import { BrowserFrame, PhoneFrame } from "./DeviceFrames";

const DesignShot = () => {
  const { slug = "" } = useParams();
  const design = getDesign(slug);
  const [lightbox, setLightbox] = useState<number | null>(null);

  if (!design) return <Navigate to="/designs" replace />;

  const desktop = shotsFor(design, "desktop");
  const mobile = shotsFor(design, "mobile");
  const details = shotsFor(design, "detail");
  const heroDesktop = desktop.find((s) => !s.tall);
  const heroMobile = mobile.find((s) => !s.tall);
  // The hero already shows the lead desktop shot; don't repeat it below.
  const desktopList = desktop.filter((s) => s !== heroDesktop);
  // Phone-only designs (e.g. social ads) show every phone side by side in the hero.
  const heroPhones = heroDesktop ? [] : mobile.filter((s) => !s.tall);
  const phoneOnly = heroPhones.length >= 2;
  const open = (shot: Shot) => setLightbox(design.shots.indexOf(shot));
  const more = publishedDesigns.filter((d) => d.slug !== design.slug);

  return (
    <DesignsLayout backTo={{ href: "/designs", label: "All designs" }}>
      <article className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{design.title}</h1>
            <div className="mt-3 flex items-center gap-3">
              <img src="/jono-green.jpg" alt="" className="h-10 w-10 rounded-full object-cover" />
              <div className="text-sm leading-tight">
                <p className="font-semibold">Jono Duncan</p>
                <p className="text-gray-500">
                  {design.client} · {design.year}
                </p>
              </div>
            </div>
          </div>
          {design.liveUrl && (
            <a
              href={design.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold transition-colors hover:border-gray-900"
            >
              Visit live site
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </motion.header>

        {/* Hero stage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`relative mt-8 overflow-hidden rounded-3xl px-[6%] pt-[6%] ${phoneOnly ? "pb-[5%]" : "pb-0"}`}
          style={{ backgroundColor: design.accent }}
        >
          {heroDesktop ? (
            <div className="relative mx-auto max-w-5xl">
              <BrowserFrame
                src={heroDesktop.src}
                poster={heroDesktop.poster}
                focus={heroDesktop.focus}
                zoomSteps={heroDesktop.zoomSteps}
                alt={heroDesktop.alt}
                onClick={() => open(heroDesktop)}
                className="rounded-b-none"
              />
              {heroMobile && (
                <PhoneFrame
                  src={heroMobile.src}
                  poster={heroMobile.poster}
                  alt={heroMobile.alt}
                  onClick={() => open(heroMobile)}
                  className="absolute -bottom-[1px] right-[-3%] hidden w-[22%] translate-y-[8%] sm:block"
                />
              )}
            </div>
          ) : phoneOnly ? (
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-4">
              {heroPhones.map((shot) => (
                <figure key={shot.src}>
                  <PhoneFrame
                    src={shot.src}
                    poster={shot.poster}
                    alt={shot.alt}
                    onClick={() => open(shot)}
                  />
                  {shot.caption && (
                    <figcaption className="mt-3 text-center text-sm font-medium text-gray-800">
                      {shot.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          ) : (
            heroMobile && (
              <PhoneFrame
                src={heroMobile.src}
                poster={heroMobile.poster}
                alt={heroMobile.alt}
                onClick={() => open(heroMobile)}
                className="mx-auto mb-[6%] w-[60%] max-w-xs"
              />
            )
          )}
        </motion.div>

        {/* Write-up */}
        <section className="mx-auto mt-14 max-w-2xl">
          <p className="text-xl font-medium leading-relaxed text-gray-900">{design.summary}</p>
          {design.description.map((p) => (
            <p key={p.slice(0, 32)} className="mt-5 leading-relaxed text-gray-600">
              {p}
            </p>
          ))}
          {(design.role.length > 0 || design.tags.length > 0) && (
            <dl className="mt-8 grid grid-cols-1 gap-6 border-t border-gray-200 pt-6 text-sm sm:grid-cols-2">
              <div>
                <dt className="font-semibold text-gray-900">Role</dt>
                <dd className="mt-1 text-gray-600">{design.role.join(" · ")}</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">Built with</dt>
                <dd className="mt-1 text-gray-600">{design.tags.join(" · ")}</dd>
              </div>
            </dl>
          )}
        </section>

        {/* Desktop shots */}
        {desktopList.length > 0 && (
          <section className="mt-20">
            <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
              <Monitor className="h-4 w-4" /> Desktop
            </h2>
            <div className="mt-6 space-y-14">
              {desktopList.map((shot) => (
                <figure key={shot.src}>
                  <BrowserFrame
                    src={shot.src}
                    poster={shot.poster}
                    focus={shot.focus}
                    zoomSteps={shot.zoomSteps}
                    alt={shot.alt}
                    tall={shot.tall}
                    onClick={shot.tall ? undefined : () => open(shot)}
                  />
                  {shot.caption && (
                    <figcaption className="mt-3 text-center text-sm text-gray-500">
                      {shot.caption}
                      {shot.tall && " · scroll inside the frame"}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* Mobile shots */}
        {mobile.length > 0 && !phoneOnly && (
          <section className="mt-20">
            <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
              <Smartphone className="h-4 w-4" /> Mobile
            </h2>
            <div
              className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-10 rounded-3xl p-6 sm:p-10"
              style={{ backgroundColor: design.accent }}
            >
              {mobile.map((shot) => (
                <figure key={shot.src} className="w-[calc(50%-0.625rem)] sm:w-[calc(33.333%-0.875rem)] sm:max-w-[260px]">
                  <PhoneFrame
                    src={shot.src}
                    poster={shot.poster}
                    alt={shot.alt}
                    tall={shot.tall}
                    onClick={shot.tall ? undefined : () => open(shot)}
                  />
                  {shot.caption && (
                    <figcaption className="mt-3 text-center text-sm font-medium text-gray-800">
                      {shot.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* Detail shots: UI fragments shown without a device frame */}
        {details.length > 0 && (
          <section className="mt-20">
            <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
              <PanelRight className="h-4 w-4" /> Details
            </h2>
            <div
              className="mt-6 flex flex-wrap items-start justify-center gap-10 rounded-3xl p-6 sm:p-10"
              style={{ backgroundColor: design.accent }}
            >
              {details.map((shot) => (
                <figure key={shot.src} className="w-full max-w-[420px]">
                  <button
                    type="button"
                    onClick={() => open(shot)}
                    aria-label={`Enlarge: ${shot.alt}`}
                    className="block w-full cursor-zoom-in overflow-hidden rounded-2xl shadow-[0_24px_50px_-18px_rgba(15,23,42,0.45)] ring-1 ring-black/5"
                  >
                    {shot.src.endsWith(".mp4") ? (
                      <div className="w-full bg-white" style={{ aspectRatio: shot.aspect }}>
                        <AutoVideo src={shot.src} poster={shot.poster} label={shot.alt} />
                      </div>
                    ) : (
                      <img src={shot.src} alt={shot.alt} loading="lazy" className="block w-full" />
                    )}
                  </button>
                  {shot.caption && (
                    <figcaption className="mt-3 text-center text-sm font-medium text-gray-800">
                      {shot.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* Tags */}
        {design.tags.length > 0 && (
          <div className="mt-14 flex flex-wrap justify-center gap-2">
            {design.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>

      {/* More designs */}
      {more.length > 0 && (
        <section className="mt-24 border-t border-gray-200 bg-gray-50/60">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold">More designs</h2>
            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {more.map((d) => (
                <DesignCard key={d.slug} design={d} />
              ))}
            </div>
          </div>
        </section>
      )}
      {more.length === 0 && <div className="h-24" />}

      <Lightbox shots={design.shots} index={lightbox} onChange={setLightbox} />
    </DesignsLayout>
  );
};

export default DesignShot;
