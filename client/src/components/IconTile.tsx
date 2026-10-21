import type { LucideIcon } from "lucide-react";

/** Soft circular icon badge: the standard icon treatment across the site (styled by .icon-badge). */
export function IconTile({ icon: Icon, size = "md", className = "" }: { icon: LucideIcon; size?: "sm" | "md" | "lg"; className?: string }) {
  const box = { sm: "w-10 h-10", md: "w-12 h-12", lg: "w-14 h-14" }[size];
  const ico = { sm: "w-5 h-5", md: "w-6 h-6", lg: "w-7 h-7" }[size];
  return (
    <span aria-hidden="true" className={`${box} icon-badge rounded-full ${className}`}>
      <Icon className={`${ico} text-navy-600`} strokeWidth={1.75} />
    </span>
  );
}
