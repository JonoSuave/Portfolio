import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface DesignsLayoutProps {
  children: React.ReactNode;
  backTo: { href: string; label: string };
}

const DesignsLayout = ({ children, backTo }: DesignsLayoutProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-40 border-b border-gray-200/70 bg-white/85 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link
            to={backTo.href}
            className="inline-flex items-center gap-2 rounded-full px-2 py-1 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            {backTo.label}
          </Link>
          <Link to="/" className="flex items-center gap-2.5">
            <img src="/jono-green.jpg" alt="" className="h-8 w-8 rounded-full object-cover" />
            <span className="hidden text-sm font-semibold sm:inline">Jono Duncan</span>
          </Link>
          <a
            href="/#contact"
            className="rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-gray-700"
          >
            Get in touch
          </a>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default DesignsLayout;
