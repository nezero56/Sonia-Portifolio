export interface ExpertiseItem {
  title: string;
  icon: string;
  skills: string[];
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  description: string;
  icon: string;
}

export const navLinks = [
  { label: "About Me", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const expertise: ExpertiseItem[] = [
  {
    title: "Networking",
    icon: "network",
    skills: [
      "Network configuration & troubleshooting",
      "TCP/IP, DNS, DHCP",
      "Cisco & Mikrotik routers",
      "LAN/WAN setup",
      "Network security basics",
    ],
  },
  {
    title: "Web Dev & Design",
    icon: "code",
    skills: [
      "HTML, CSS, JavaScript",
      "React & Next.js",
      "Responsive web design",
      "UI/UX principles",
      "Tailwind CSS",
    ],
  },
  {
    title: "IT Support",
    icon: "support",
    skills: [
      "Hardware & software troubleshooting",
      "Windows & Linux administration",
      "Help desk support",
      "System maintenance",
      "User training & documentation",
    ],
  },
  {
    title: "Soft Skills",
    icon: "users",
    skills: [
      "Team collaboration",
      "Problem solving",
      "Communication",
      "Time management",
      "Adaptability",
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    title: "IT Assistant Intern",
    company: "StarTimes",
    
    description:
      "Provided comprehensive system maintenance and dedicated user support to ensure smooth daily operations and minimize technical downtime.",
    tags: ["System Maintenance", "User Support", "Technical Troubleshooting"],
  },
  {
    title: "IT Technician Intern",
    company: "N@tcom IT Center.",
    description:
      "Handled computer maintenance, hardware diagnostics, and software configuration to optimize performance across various workstations..",
    tags: ["Computer Maintenance", "Software Configuration", "Hardware Diagnostics"],
  },
  {
    title: "Sales & Administration",
    company: "KT Fitness & Zoner Health",
    description:
      "Excelled in cross-functional roles focusing on sales, administrative efficiency, and customer relations, demonstrating strong communication skills.",
    tags: ["Sales", "Administration", "Customer Relations", "Communication"],
  },
];

export const certifications: CertificationItem[] = [
  {
    title: "Web Fundamentals",
    issuer: "She Can Code Program (IGIRE Organization)",
    description:
      "Completed a comprehensive web development program covering HTML, CSS, JavaScript, and responsive design.",
    icon: "code",
  },
  {
    title: "Network Operations and Linux Essentials",
    issuer: "Internet Society Learning Program",
    description:
      "Completed a course on network operations, Linux basics, and system administration, gaining practical skills in managing networked systems.",
    icon: "network",
  },
  {
    title: "Itorero Indangamirwa 13/2023",
    issuer: "National Leadership & Civic Education",
    description:
      "Successfully completed a six-week civic and leadership training program focused on patriotism, integrity, discipline, leadership, Rwandan history, and character development.",
    icon: "flag",
  },
];

export const contactInfo = {
  email: "munezerosonia85@gmail.com",
  phone: "+250 782160556",
  location: "Kigali, Rwanda",
};

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sonia-munezero-8752b3355/", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com/nezero56", icon: "github" },
];
