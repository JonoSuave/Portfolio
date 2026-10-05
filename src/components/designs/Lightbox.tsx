import React, { useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Shot } from "@/data/designs";

interface LightboxProps {
  shots: Shot[];
  index: number | null;
  onChange: (index: number | null) => void;
}

const Lightbox = ({ shots, index, onChange }: LightboxProps) => {
  const open = index !== null;
  const shot = open ? shots[index] : null;

  const step = useCallback(
    (dir: number) => {
      if (index === null) return;
      onChange((index + dir + shots.length) % shots.length);
    },
    [index, onChange, shots.length],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onChange(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onChange, step]);

  return (
    <AnimatePresence>
      {shot && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={shot.alt}
          className="fixed inset-0 z-[100] flex flex-col bg-gray-950/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => onChange(null)}
        >
          <div className="flex items-center justify-between px-4 py-3 text-sm text-gray-300 sm:px-6">
            <span>
              {index + 1} / {shots.length}
              {shot.caption && <span className="ml-3 text-white">{shot.caption}</span>}
            </span>
            <button
              type="button"
              aria-label="Close"
              className="rounded-full p-2 text-white hover:bg-white/10"
              onClick={() => onChange(null)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="relative flex-1 overflow-y-auto px-4 pb-10 sm:px-16">
            {shot.src.endsWith(".mp4") ? (
              <motion.video
                key={shot.src}
                src={shot.src}
                poster={shot.poster}
                aria-label={shot.alt}
                controls
                autoPlay
                playsInline
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="mx-auto max-h-[85vh] rounded-2xl"
              />
            ) : (
              <motion.img
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className={
                  shot.device === "desktop"
                    ? "mx-auto w-full max-w-6xl rounded-lg"
                    : "mx-auto w-full max-w-[420px] rounded-2xl"
                }
              />
            )}
          </div>

          {shots.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:left-4"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:right-4"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
