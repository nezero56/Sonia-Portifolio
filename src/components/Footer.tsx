import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { navLinks } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="#" className="text-lg font-bold text-primary">
            Sonia Munezero
          </Link>

          <ul className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-500 hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
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
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          &copy; {new Date().getFullYear()} Sonia Munezero. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
