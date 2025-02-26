import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import SideNavigation from "./SideNavigation";
import HeroSection from "./HeroSection";
import SkillsSection from "./SkillsSection";
import ProjectsGrid from "./ProjectsGrid";
import ContactSection from "./ContactSection";
import BackgroundDesign from "./BackgroundDesign";

const Home = () => {
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "projects", "contact"];
      const sectionElements = sections.map((section) =>
        document.getElementById(section),
      );

      const currentPosition = window.scrollY + window.innerHeight / 2;

      sectionElements.forEach((element, index) => {
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            currentPosition >= offsetTop &&
            currentPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sections[index]);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BackgroundDesign>
      <div className="min-h-screen">
        <SideNavigation
          activeSection={activeSection}
          onNavClick={(section) => {
            document
              .getElementById(section)
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        />

        <main className="pl-20">
          <motion.div
            id="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <HeroSection />
          </motion.div>

          <motion.div
            id="skills"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SkillsSection />
          </motion.div>

          <motion.div
            id="projects"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ProjectsGrid />
          </motion.div>

          <motion.div
            id="contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ContactSection />
          </motion.div>
        </main>
      </div>
    </BackgroundDesign>
  );
};

export default Home;
