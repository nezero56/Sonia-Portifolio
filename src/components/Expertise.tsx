import { Network, Code, Headphones, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { expertise } from "@/data/portfolio";

const iconMap = {
  network: Network,
  code: Code,
  support: Headphones,
  users: Users,
};

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="My Expertise"
          subtitle="A versatile skill set spanning network infrastructure, modern web development, and user-centric design."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div
                key={item.title}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-white" size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <ul className="space-y-2">
                  {item.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-gray-500 flex items-start gap-2"
                    >
                      <span className="text-primary mt-1.5 shrink-0">•</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
