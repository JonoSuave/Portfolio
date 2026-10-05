import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AutoVideoProps {
  src: string;
  poster?: string;
  label: string;
  className?: string;
}

/** Muted, looping video that only loads and plays while on screen. */
const AutoVideo = ({ src, poster, label, className }: AutoVideoProps) => {
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
