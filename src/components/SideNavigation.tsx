import React from "react";
import { motion } from "framer-motion";
import {
  Home,
  Code2,
  Briefcase,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

// Custom X (formerly Twitter) icon component
const XIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"
      fill="currentColor"
    />
  </svg>
);

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  label: string;
  href: string;
  color: string;
}

interface SideNavigationProps {
  activeSection?: string;
  onNavClick?: (section: string) => void;
}

const SideNavigation = ({
  activeSection = "home",
  onNavClick = () => {},
}: SideNavigationProps) => {
  const navItems: NavItem[] = [
    { icon: <Home size={24} />, label: "Home", href: "#home" },
    { icon: <Code2 size={24} />, label: "Skills", href: "#skills" },
    { icon: <Briefcase size={24} />, label: "Projects", href: "#projects" },
    { icon: <Mail size={24} />, label: "Contact", href: "#contact" },
  ];

  const socialLinks: SocialLink[] = [
    {
      icon: <Github size={20} />,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-blue-600",
    },
    {
      icon: <XIcon />,
      label: "X",
      href: "https://twitter.com",
      color: "hover:text-black",
    },
  ];

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 top-0 h-screen w-20 bg-white/80 backdrop-blur-lg z-50 border-r border-gray-200/50 shadow-sm flex flex-col items-center justify-between py-8"
    >
      <TooltipProvider>
        <nav className="flex flex-col items-center space-y-6">
          {navItems.map((item) => (
            <Tooltip key={item.label}>
              <TooltipTrigger asChild>
                <motion.a
                  href={item.href}
                  onClick={() => onNavClick(item.label.toLowerCase())}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-lg transition-colors ${
                    activeSection === item.label.toLowerCase()
                      ? "bg-gray-100 dark:bg-gray-800 text-primary"
                      : "text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                  }`}
                >
                  {item.icon}
                </motion.a>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </nav>

        <div className="flex flex-col items-center space-y-4">
          {socialLinks.map((link) => (
            <Tooltip key={link.label}>
              <TooltipTrigger asChild>
                <motion.a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-gray-600 dark:text-gray-400 ${link.color}`}
                >
                  {link.icon}
                </motion.a>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{link.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </motion.div>
  );
};

export default SideNavigation;
