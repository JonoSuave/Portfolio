import React from "react";
import { motion } from "framer-motion";

interface BackgroundDesignProps {
  children: React.ReactNode;
}

const BackgroundDesign: React.FC<BackgroundDesignProps> = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-white">
      {/* Pastel blurs */}
      <motion.div
        className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full"
        style={{
          backgroundColor: "#FADADD",
          filter: "blur(120px)",
          opacity: 0.45,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ duration: 1.5 }}
      />
      
      <motion.div
        className="absolute -bottom-64 -left-32 w-[800px] h-[800px] rounded-full"
        style={{
          backgroundColor: "#DAF5D9",
          filter: "blur(120px)",
          opacity: 0.4,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />
      
      {/* New prominent green blur between Hero and Technical Expertise sections */}
      <motion.div
        className="absolute top-[90vh] left-1/2 transform -translate-x-1/2 w-[900px] h-[300px] rounded-full"
        style={{
          backgroundColor: "#8AE9A1",
          filter: "blur(100px)",
          opacity: 0.5,
          zIndex: 5,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5, delay: 0.4 }}
      />
      
      {/* New blue blur between Technical Expertise and Innovative Projects sections */}
      <motion.div
        className="absolute top-[190vh] left-1/3 w-[800px] h-[350px] rounded-full"
        style={{
          backgroundColor: "#A7C7E7",
          filter: "blur(110px)",
          opacity: 0.55,
          zIndex: 5,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.55 }}
        transition={{ duration: 1.8, delay: 0.5 }}
      />
      
      <motion.div
        className="absolute top-[40%] right-[10%] w-[600px] h-[600px] rounded-full"
        style={{
          backgroundColor: "#EAE6F7",
          filter: "blur(100px)",
          opacity: 0.35,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 1.5, delay: 0.6 }}
      />

      {/* Additional pastel blur for more coverage */}
      <motion.div
        className="absolute top-[60%] left-[20%] w-[500px] h-[500px] rounded-full"
        style={{
          backgroundColor: "#FADADD",
          filter: "blur(120px)",
          opacity: 0.3,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5, delay: 0.9 }}
      />

      {/* Geometric line accents */}
      <svg
        className="absolute top-0 right-0 w-64 h-64 text-gray-900"
        style={{ opacity: 0.1 }}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          d="M10,10 Q90,90 10,190"
        />
      </svg>

      <svg
        className="absolute bottom-0 left-0 w-64 h-64 text-gray-900"
        style={{ opacity: 0.1 }}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          d="M190,190 Q110,110 190,10"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundDesign;
