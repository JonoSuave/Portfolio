import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import AutoVideo from "./AutoVideo";

interface FrameProps {
  src: string;
  alt: string;
  tall?: boolean;
  onClick?: () => void;
  className?: string;
  /** Use on thumbnails so the image fills a fixed-ratio frame. */
  cover?: boolean;
  /** Poster frame when src is a video. */
  poster?: string;
  /** Mobile zoom target, as fractions of the image (0-1), and zoom level. */
  focus?: { x: number; y: number; zoom?: number };
}

/** Marks the element visible while on screen, so its CSS zoom tour only runs then. */
const useInView = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    // Watch the unscaled frame: the zoom transform itself would change the element's own ratio.
    const frame = el?.parentElement;
    if (!el || !frame) return;
    const observer = new IntersectionObserver(
      ([entry]) => el.classList.toggle("is-visible", entry.isIntersecting),
      { threshold: 0.5 },
    );
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);
  return ref;
};

export const BrowserFrame = ({ src, alt, tall, onClick, className, cover, poster, focus }: FrameProps) => {
  const video = src.endsWith(".mp4");
  // Desktop stills zoom into their focus area on phones, where the full screen is too small to read.
  const zoomTour = !video && !tall && !cover;
  const zoomRef = useInView<HTMLImageElement>();
  const zoomStyle = zoomTour
    ? ({
        transformOrigin: `${(focus?.x ?? 0.5) * 100}% ${(focus?.y ?? 0.25) * 100}%`,
        "--pf-zoom": focus?.zoom ?? 2.4,
      } as React.CSSProperties)
    : undefined;
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl bg-white shadow-[0_24px_60px_-20px_rgba(15,23,42,0.35)] ring-1 ring-black/5",
        className,
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-gray-200/80 bg-gray-50 px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
      </div>
      <button
        type="button"
        onClick={onClick}
        disabled={!onClick}
        aria-label={onClick ? `Enlarge: ${alt}` : undefined}
        className={cn(
          "block w-full overflow-hidden text-left",
          onClick && "cursor-zoom-in",
          tall && "max-h-[75vh] overflow-y-auto overscroll-contain",
          cover && "aspect-[16/10] overflow-hidden",
        )}
      >
        {video ? (
          <div className="aspect-[16/10] w-full bg-white">
            <AutoVideo src={src} poster={poster} label={alt} />
          </div>
        ) : (
          <img
            ref={zoomTour ? zoomRef : undefined}
            src={src}
            alt={alt}
            loading="lazy"
            style={zoomStyle}
            className={cn("block w-full", cover && "h-full object-cover object-top", zoomTour && "pf-zoom-tour")}
          />
        )}
      </button>
    </div>
  );
};

export const PhoneFrame = ({ src, alt, tall, onClick, className, poster }: FrameProps) => {
  const video = src.endsWith(".mp4");
  return (
  <div
    className={cn(
      "relative rounded-[2.4rem] bg-gray-950 p-[0.55rem] shadow-[0_24px_50px_-18px_rgba(15,23,42,0.55)]",
      className,
    )}
  >
    <span className="absolute left-1/2 top-[0.95rem] z-10 h-[1.1rem] w-[30%] -translate-x-1/2 rounded-full bg-gray-950" />
    <button
      type="button"
      onClick={onClick}
      disabled={!onClick}
      aria-label={onClick ? `Enlarge: ${alt}` : undefined}
      className={cn(
        "block w-full overflow-hidden rounded-[1.9rem] bg-white text-left",
        video ? "aspect-[9/16] bg-gray-950" : "aspect-[390/844]",
        onClick && "cursor-zoom-in",
        tall && "overflow-y-auto overscroll-contain",
      )}
    >
      {video ? (
        <AutoVideo src={src} poster={poster} label={alt} />
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={cn("block w-full", !tall && "h-full object-cover object-top")}
        />
      )}
    </button>
  </div>
  );
};
