import Image from "next/image";
import Link from "next/link";
import { Download, Github } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Hi, I&apos;m{" "}
            <span className="text-primary">Sonia Munezero</span>
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg">
            A motivated Technology Enthusiast specializing in IT Infrastructure,
            Networking, and Web Development. Passionate about creating seamless
            digital experiences and robust network solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-sm"
            >
              <Download size={18} />
              Download CV
            </a>
            <Link
              href="https://github.com/nezero56"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary-light px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Github size={18} />
              View GitHub
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 bg-gray-100 rounded-2xl -z-10" />
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/Image/sonia.jpg"
                alt="Sonia Munezero"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
