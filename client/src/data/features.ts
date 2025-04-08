import { LucideIcon } from "lucide-react";
import { Monitor, BookOpen, Users } from "lucide-react";

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  colorClass: string;
  bgColorClass: string;
  hoverBorderClass: string;
  hoverShadowClass: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Interactive Learning",
    description: "Learn by doing with our interactive lessons and challenges. Manipulate 3D models while learning to code.",
    icon: Monitor,
    colorClass: "text-primary",
    bgColorClass: "bg-primary/10",
    hoverBorderClass: "hover:border-primary/30",
    hoverShadowClass: "hover:shadow-primary/5"
  },
  {
    id: 2,
    title: "Expert Curriculum",
    description: "Curriculum designed by industry experts who work with 3D technologies and modern programming frameworks.",
    icon: BookOpen,
    colorClass: "text-secondary",
    bgColorClass: "bg-secondary/10",
    hoverBorderClass: "hover:border-secondary/30",
    hoverShadowClass: "hover:shadow-secondary/5"
  },
  {
    id: 3,
    title: "Community Support",
    description: "Join a thriving community of learners and professionals who share knowledge and provide support.",
    icon: Users,
    colorClass: "text-accent",
    bgColorClass: "bg-accent/10",
    hoverBorderClass: "hover:border-accent/30",
    hoverShadowClass: "hover:shadow-accent/5"
  }
];

export default features;
