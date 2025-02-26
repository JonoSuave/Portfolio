import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  tags?: string[];
}

const ProjectCard = ({
  title = "AI-Powered Task Automation",
  description = "An intelligent system that automates repetitive tasks using machine learning algorithms and natural language processing.",
  imageUrl = "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  demoUrl = "https://demo.example.com",
  githubUrl = "https://github.com/JonoSuave/project",
  tags = [],
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="w-full"
    >
      <Card className="h-full overflow-hidden bg-white/70 backdrop-blur-md border border-white/50 shadow-md">
        <CardHeader className="p-0">
          <div className="relative aspect-video overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="text-xl font-bold mb-2">{title}</CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-300 mb-4">
            {description}
          </CardDescription>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex gap-4">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => window.open(demoUrl, "_blank")}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </Button>
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => window.open(githubUrl, "_blank")}
          >
            <Github className="w-4 h-4 mr-2" />
            Source Code
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
