import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";

interface ContactSectionProps {
  email?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
  githubUrl?: string;
  title?: string;
  description?: string;
}

const ContactSection = ({
  email = "hello@example.com",
  linkedinUrl = "https://linkedin.com/in/example",
  twitterUrl = "https://twitter.com/example",
  githubUrl = "https://github.com/example",
  title = "Let's Connect",
  description = "I'm always open to discussing new projects, opportunities in AI development, or just having a chat about technology.",
}: ContactSectionProps) => {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="max-w-3xl mx-auto bg-white/70 backdrop-blur-md border border-white/50 shadow-md">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
              <p className="text-gray-700 text-center mb-8">
                {description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Button
                  variant="outline"
                  className="flex items-center justify-center gap-2 h-12"
                  onClick={() => (window.location.href = `mailto:${email}`)}
                >
                  <Mail className="w-5 h-5" />
                  {email}
                </Button>

                <Button
                  variant="outline"
                  className="flex items-center justify-center gap-2 h-12"
                  onClick={() => window.open(linkedinUrl, "_blank")}
                >
                  <Linkedin className="w-5 h-5 text-[#0077B5]" />
                  LinkedIn
                </Button>

                <Button
                  variant="outline"
                  className="flex items-center justify-center gap-2 h-12"
                  onClick={() => window.open(twitterUrl, "_blank")}
                >
                  <Twitter className="w-5 h-5 text-[#1DA1F2]" />
                  Twitter
                </Button>

                <Button
                  variant="outline"
                  className="flex items-center justify-center gap-2 h-12"
                  onClick={() => window.open(githubUrl, "_blank")}
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
