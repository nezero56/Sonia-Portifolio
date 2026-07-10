import SectionHeading from "./SectionHeading";
import { experience } from "@/data/portfolio";

export default function WorkExperience() {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          title="Work Experience"
          subtitle="Practical experience in IT support, customer relations, and technical troubleshooting."
        />

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/30" />

          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="relative pl-16">
                <div className="absolute left-4 top-6 w-4 h-4 bg-primary rounded-full border-4 border-gray-50" />

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-lg font-bold text-gray-900">
                    {job.title}
                  </h3>
                  <p className="text-primary font-medium text-sm mt-1">
                    {job.company}
                  </p>
                  <p className="text-gray-400 text-sm mt-1">{job.period}</p>
                  <p className="text-gray-600 mt-3 leading-relaxed">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
