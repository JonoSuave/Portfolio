import React from "react";
import { cn } from "@/lib/utils";

interface FrameProps {
  src: string;
  alt: string;
  tall?: boolean;
  onClick?: () => void;
  className?: string;
  /** Use on thumbnails so the image fills a fixed-ratio frame. */
  cover?: boolean;
}

export const BrowserFrame = ({ src, alt, tall, onClick, className, cover }: FrameProps) => (
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
        "block w-full text-left",
        onClick && "cursor-zoom-in",
        tall && "max-h-[75vh] overflow-y-auto overscroll-contain",
        cover && "aspect-[16/10] overflow-hidden",
      )}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={cn("block w-full", cover && "h-full object-cover object-top")}
      />
    </button>
  </div>
);

export const PhoneFrame = ({ src, alt, tall, onClick, className }: FrameProps) => (
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
        "block aspect-[390/844] w-full overflow-hidden rounded-[1.9rem] bg-white text-left",
        onClick && "cursor-zoom-in",
        tall && "overflow-y-auto overscroll-contain",
      )}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={cn("block w-full", !tall && "h-full object-cover object-top")}
      />
    </button>
  </div>
);
