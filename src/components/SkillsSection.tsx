import React, { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Card, CardContent } from "./ui/card";

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillsSectionProps {
  skills?: Skill[];
  selectedCategory?: string;
}

const SkillsSection = ({
  skills = [
    // Frontend
    { name: "React", level: 95, category: "Frontend" },
    { name: "TypeScript", level: 90, category: "Frontend" },
    { name: "NextJS", level: 88, category: "Frontend" },
    
    // Backend & Databases
    { name: "Supabase", level: 85, category: "Backend" },
    { name: "Convex", level: 82, category: "Backend" },
    { name: "Azure Functions", level: 80, category: "Backend" },
    
    // AI & ML
    { name: "Machine Learning", level: 90, category: "AI" },
    { name: "Natural Language Processing", level: 85, category: "AI" },
    { name: "Computer Vision", level: 80, category: "AI" },
    { name: "Deep Learning", level: 85, category: "AI" },
    { name: "AI Document Processing", level: 88, category: "AI" },
    { name: "AI Speech to Text", level: 86, category: "AI" },
    { name: "MCP (Model Context Providers)", level: 84, category: "AI" },
    
    // Automation
    { name: "AI Webscraping & Crawling", level: 92, category: "Automation" },
    { name: "AI Voice Automation", level: 88, category: "Automation" },
    { name: "Power Automate", level: 90, category: "Automation" },
    { name: "Make.com", level: 85, category: "Automation" },
    { name: "n8n", level: 82, category: "Automation" },
    
    // Microsoft
    { name: "Teams App Development", level: 88, category: "Microsoft" },
    { name: "SPFx", level: 85, category: "Microsoft" },
    
    // Programming & Tools
    { name: "Python", level: 95, category: "Programming" },
    { name: "Langchain JS", level: 87, category: "Programming" },
    { name: "Figma", level: 85, category: "Design" },
    
    // Frameworks
    { name: "TensorFlow", level: 88, category: "Frameworks" },
    { name: "PyTorch", level: 85, category: "Frameworks" },
  ],
  selectedCategory = "All",
}: SkillsSectionProps) => {
  const [activeCategory, setActiveCategory] = useState(selectedCategory);

  const categories = ["All", ...new Set(skills.map((skill) => skill.category))];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section className="w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-gray-700">
            Specialized in AI, Automation, and Modern Web Development
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className="cursor-pointer text-sm px-4 py-2"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card
                key={skill.name}
                className="bg-white/70 backdrop-blur-md border border-white/50 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {skill.name}
                    </h3>
                    <Badge variant="secondary">{skill.category}</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-700">
                      <span>Proficiency</span>
                      <span>{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
