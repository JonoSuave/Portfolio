import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Monitor, Smartphone } from "lucide-react";
import { type Design, shotsFor, stillFor } from "@/data/designs";

const DesignCard = ({ design }: { design: Design }) => {
  const desktop = shotsFor(design, "desktop")[0];
  const phones = shotsFor(design, "mobile").filter((s) => !s.tall);
  const mobile = phones[0];
  const cover = desktop ?? mobile;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
    >
      <Link to={`/designs/${design.slug}`} className="group block">
        <div
          className="relative aspect-[4/3] overflow-hidden rounded-2xl"
          style={{ backgroundColor: design.accent }}
        >
          {desktop ? (
            <img
              src={desktop.src}
              alt={desktop.alt}
              loading="lazy"
              className="absolute left-[7%] top-[9%] w-[86%] rounded-lg shadow-xl transition-transform duration-500 group-hover:-translate-y-1"
            />
          ) : phones.length >= 3 ? (
            <div className="absolute inset-x-[8%] top-[9%] flex justify-center gap-[4%]">
              {phones.slice(0, 3).map((shot, i) => (
                <img
                  key={shot.src}
                  src={stillFor(shot)}
                  alt={i === 0 ? shot.alt : ""}
                  loading="lazy"
                  className={`w-[30%] rounded-xl border-[3px] border-gray-950 shadow-xl transition-transform duration-500 ${
                    i === 1 ? "translate-y-[8%] group-hover:translate-y-[4%]" : "group-hover:-translate-y-1"
                  }`}
                />
              ))}
            </div>
          ) : (
            cover && (
              <img
                src={stillFor(cover)}
                alt={cover.alt}
                loading="lazy"
                className="mx-auto mt-[8%] w-[38%] rounded-2xl shadow-xl"
              />
            )
          )}
          {desktop && mobile && (
            <img
              src={stillFor(mobile)}
              alt=""
              loading="lazy"
              className="absolute bottom-[-12%] right-[6%] w-[22%] rounded-xl border-[3px] border-gray-950 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2"
            />
          )}
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/0 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="max-w-[80%] text-sm font-medium leading-snug text-white">
              {design.summary}
            </p>
          </div>
        </div>
        <div className="mt-3 flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold text-gray-900">{design.title}</h3>
            <p className="text-sm text-gray-500">{design.client}</p>
          </div>
          <div className="flex shrink-0 gap-1.5 pt-0.5 text-gray-400">
            {desktop && <Monitor className="h-4 w-4" aria-label="Desktop designs" />}
            {mobile && <Smartphone className="h-4 w-4" aria-label="Mobile designs" />}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default DesignCard;
