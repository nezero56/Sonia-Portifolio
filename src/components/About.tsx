import { Sparkles, Download } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="About Me" />

        <p className="text-center text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto">
        I am an ambitious tech professional with a demonstrated ability to thrive under pressure and adapt to new environments. With a Bachelors in Networking and Communications from Adventist University of Central Africa in progress, I am eager to tackle new challenges that foster professional growth. .
        </p>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 max-w-xl mx-auto text-center mb-10">
          <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
            <Sparkles className="text-primary" size={24} />
          </div>
          <p className="text-gray-700 font-medium mb-4">
            Leveraging strong communication, teamwork, and problem-solving skills developed across diverse IT and customer-facing roles.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Communication", "Teamwork", "Problem Solving"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 border border-primary text-primary rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="/cv.pdf"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-sm"
          >
            <Download size={18} />
            Download Full CV
          </a>
        </div>
      </div>
    </section>
  );
}
