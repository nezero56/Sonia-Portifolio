import Link from "next/link";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { navLinks } from "@/data/portfolio";

interface NavbarProps {
  mobileOpen: boolean;
  onToggle: () => void;
}

export default function Navbar({
  mobileOpen,
  onToggle,
}: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="#"
          className="text-xl font-bold text-primary hover:text-primary-dark transition-colors"
        >
          Sonia Munezero
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-gray-600 hover:text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/sonia-munezero-8752b3355/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/nezero56"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </div>

        <button
          className="md:hidden text-gray-600"
          onClick={onToggle}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-600 hover:text-primary transition-colors font-medium"
                  onClick={onToggle}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
