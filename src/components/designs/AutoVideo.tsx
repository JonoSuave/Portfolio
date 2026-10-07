import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import type { ZoomStep } from "@/data/designs";

interface AutoVideoProps {
  src: string;
  poster?: string;
  label: string;
  className?: string;
  /** Zoom steps keyed to playback time, applied on phones only. */
  zoomSteps?: ZoomStep[];
}

/** Muted, looping video that only loads and plays while on screen. */
const AutoVideo = ({ src, poster, label, className, zoomSteps }: AutoVideoProps) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = ref.current;
    if (!video || !zoomSteps?.length) return;
    const query = window.matchMedia("(max-width: 639px) and (prefers-reduced-motion: no-preference)");
    const apply = () => {
      if (!query.matches) {
        video.style.transform = "";
        return;
      }
      const t = video.currentTime;
      const step = [...zoomSteps].reverse().find((s) => s.at <= t) ?? zoomSteps[0];
      video.style.transformOrigin = `${step.x * 100}% ${step.y * 100}%`;
      video.style.transform = `scale(${step.zoom})`;
    };
    video.style.transition = "transform 1s ease-in-out, transform-origin 1s ease-in-out";
    video.addEventListener("timeupdate", apply);
    query.addEventListener("change", apply);
    apply();
    return () => {
      video.removeEventListener("timeupdate", apply);
      query.removeEventListener("change", apply);
    };
  }, [zoomSteps]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      aria-label={label}
      muted
      loop
      playsInline
      preload="none"
      className={cn("block h-full w-full object-cover", className)}
    />
  );
};

export default AutoVideo;
