interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "center" | "left";
}

export default function SectionHeading({
  title,
  subtitle,
  light = false,
  align = "center",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={`${centered ? "text-center" : "text-left"} mb-12`}>
      <h2
        className={`text-3xl md:text-4xl font-bold mb-3 ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      <div
        className={`w-16 h-1 bg-primary rounded-full mb-4 ${
          centered ? "mx-auto" : ""
        }`}
      />
      {subtitle && (
        <p
          className={`text-lg max-w-2xl mx-auto ${
            light ? "text-blue-100" : "text-gray-500"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
