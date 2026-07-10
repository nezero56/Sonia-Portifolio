import { Code, Network, Flag, ExternalLink, LucideIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { certifications } from "@/data/portfolio";

const iconMap: Record<string, LucideIcon> = {
  code: Code,
  network: Network,
  flag: Flag,
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Certifications & Training"
          subtitle="Professional credentials and continuous learning"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => {
            const Icon = iconMap[cert.icon] ?? Code;

            return (
              <div
                key={cert.title}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {cert.title}
                </h3>
                <p className="text-primary text-sm font-medium mb-3">
                  {cert.issuer}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {cert.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-4 hover:text-primary-dark transition-colors"
                >
                  View Certificate
                  <ExternalLink size={14} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
