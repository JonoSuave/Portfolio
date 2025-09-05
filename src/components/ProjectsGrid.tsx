import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
  githubUrl: string;
  tags: string[];
}

interface ProjectsGridProps {
  projects?: Project[];
}

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "AI Chat with PDF",
    description:
      "Built an intelligent document processing system that extracts, categorizes, and analyzes information from various document types using advanced NLP techniques.",
    imageUrl:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    demoUrl: "https://chat-with-pdf-challenge-three.vercel.app/",
    githubUrl: "https://github.com/JonoSuave/chat-with-pdf",
    tags: ["AI", "NLP", "React", "TypeScript", "Next.js", "TailwindCSS"],
  },
  {
    id: "2",
    title: "Firesearch - AI Research Assistant",
    description:
      "AI-powered deep research tool that breaks down complex queries, validates answers, and synthesizes findings from multiple web sources using Firecrawl API and GPT-4o.",
    imageUrl:
      "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2F2YWo4amdieGVnOXR3aGM5ZnBlcDZvbnRjNW1vNmtpeWNhc3VtbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Jw7Q08ll8Vh0BoApI8/giphy.gif",
    demoUrl: "https://firesearch-ochre.vercel.app/",
    githubUrl: "https://github.com/JonoSuave/firesearch",
    tags: ["AI", "OpenAI", "Next.js", "TypeScript", "LangGraph", "Firecrawl"],
  },
  {
    id: "3",
    title: "South American Journeys",
    description:
      "Travel website showcasing transformative South American adventures with sustainable tourism focus, featuring dynamic galleries and seamless booking integration.",
    imageUrl:
      "https://images.unsplash.com/photo-1526392060635-9d6019884377",
    demoUrl: "https://southamericanjourneys.com/",
    githubUrl: "https://github.com/JonoSuave",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
  },
  // {
  //   id: "2",
  //   title: "Enterprise Automation Platform",
  //   description:
  //     "Developed a comprehensive automation platform that integrates with Microsoft Teams, Power Automate, and Azure Functions to streamline business processes.",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  //   demoUrl: "https://demo.example.com/automation",
  //   githubUrl: "https://github.com/JonoSuave/automation",
  //   tags: ["Automation", "Microsoft", "Azure"],
  // },
  // {
  //   id: "3",
  //   title: "AI Voice Assistant",
  //   description:
  //     "Created an advanced voice assistant using AI speech-to-text and natural language understanding to perform complex tasks and integrate with various services.",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  //   demoUrl: "https://demo.example.com/voice-assistant",
  //   githubUrl: "https://github.com/JonoSuave/voice-assistant",
  //   tags: ["AI", "Voice", "TypeScript"],
  // },
  // {
  //   id: "4",
  //   title: "Next.js Web Application",
  //   description:
  //     "Built a modern, responsive web application using Next.js, TypeScript, and Supabase with real-time data synchronization and authentication.",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  //   demoUrl: "https://demo.example.com/nextjs-app",
  //   githubUrl: "https://github.com/JonoSuave/nextjs-app",
  //   tags: ["NextJS", "TypeScript", "Supabase"],
  // },
  // {
  //   id: "5",
  //   title: "AI Web Scraping Tool",
  //   description:
  //     "Developed an intelligent web scraping tool that uses AI to navigate websites, extract structured data, and adapt to changing page layouts.",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  //   demoUrl: "https://demo.example.com/web-scraper",
  //   githubUrl: "https://github.com/JonoSuave/web-scraper",
  //   tags: ["AI", "Web Scraping", "Python"],
  // },
  // {
  //   id: "6",
  //   title: "Teams App for Enterprise",
  //   description:
  //     "Created a custom Microsoft Teams application that enhances collaboration and integrates with enterprise systems using SPFx and Microsoft Graph API.",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  //   demoUrl: "https://demo.example.com/teams-app",
  //   githubUrl: "https://github.com/JonoSuave/teams-app",
  //   tags: ["Microsoft", "Teams", "SPFx"],
  // },
];

const ProjectsGrid = ({ projects = defaultProjects }: ProjectsGridProps) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  );

  const filteredProjects = selectedTag
    ? projects.filter((project) => project.tags.includes(selectedTag))
    : projects;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Innovative Projects
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Showcasing my expertise in AI, automation, and modern web
            development
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${
                  !selectedTag
                    ? "bg-primary text-white"
                    : "bg-white/60 backdrop-blur-sm border border-white/50 text-gray-700 hover:bg-white/70"
                }
              `}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${
                    selectedTag === tag
                      ? "bg-primary text-white"
                      : "bg-white/60 backdrop-blur-sm border border-white/50 text-gray-700 hover:bg-white/70"
                  }
                `}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                demoUrl={project.demoUrl}
                githubUrl={project.githubUrl}
                tags={project.tags}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
