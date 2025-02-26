import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Github, Linkedin } from "lucide-react";

// Custom X (formerly Twitter) icon component
const XIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
  >
    <path
      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"
      fill="currentColor"
    />
  </svg>
);

interface HeroSectionProps {
  name?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const HeroSection = ({
  name = "Jono Suave",
  title = "Software Developer",
  description = "I'm the most passionate Developer you will ever get to work with. If you have a great project that needs some amazing skills, I'm your guy.",
  imageUrl = "/jono-green.jpg",
  socialLinks = {
    github: "https://github.com/JonoSuave",
    linkedin: "https://www.linkedin.com/in/jono-duncan/",
    twitter: "https://x.com/SuaveJono",
  },
}: HeroSectionProps) => {
  return (
    <section className="min-h-[800px] w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Name and title on the left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
            {name}
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-indigo-800">
            {title}
          </h2>
          <div className="flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900"
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-800 hover:text-indigo-900"
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:text-indigo-800"
            >
              <XIcon />
            </motion.a>
          </div>
        </motion.div>

        {/* Photo in the center */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="aspect-square w-64 h-64 sm:w-80 sm:h-80 overflow-hidden rounded-full border-4 border-white shadow-xl">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Description and button on the right */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <p className="text-lg text-gray-800 max-w-xl">
            {description}
          </p>
          <Button
            size="lg"
            className="group bg-indigo-700 hover:bg-indigo-800 text-white"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View My Work
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
