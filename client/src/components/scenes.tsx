import { motion, useReducedMotion } from "framer-motion";
import {
  Shield, Lock, Fingerprint, Cloud, ClipboardCheck, Radar, Compass, Users, Award, Sparkles, ShieldCheck, Landmark,
  Layers, Handshake, BarChart3, Calendar, Code2, Mail, MessageSquare, Phone, MapPin, Target, AlertTriangle, ShieldAlert,
  TrendingUp, FileCheck2, Scale, Globe, SearchCheck, FileText, LayoutDashboard, Database, Smartphone, Plug, Workflow,
  type LucideIcon,
} from "lucide-react";

export interface SceneProps {
  /** Icon or image shown in the glowing centre. */
  center: { icon?: LucideIcon; image?: string; alt?: string };
  /** Icons orbiting on the outer ring. */
  items: LucideIcon[];
  /** Small icons on the inner ring. */
  inner?: LucideIcon[];
  tone?: "light" | "dark";
  /** Adds a rotating radar sweep. */
  radar?: boolean;
  label: string;
}

const BLOBS = [
  "M44.7,-58.6C57.3,-48.2,66.4,-33.6,70.6,-17.5C74.8,-1.4,74.1,16.2,66.6,30.2C59.1,44.1,44.8,54.4,29.4,61.3C14,68.2,-2.5,71.7,-18.7,68.8C-34.9,65.9,-50.8,56.6,-61.2,43C-71.6,29.4,-76.5,11.5,-73.9,-5C-71.3,-21.5,-61.2,-36.6,-48.2,-46.9C-35.2,-57.2,-19.3,-62.7,-1.7,-60.5C15.9,-58.3,32.1,-69,44.7,-58.6Z",
  "M39.6,-53.7C61.0,-51.6,66.3,-34.3,72.7,-13.5C69.1,-8.0,78.8,15.3,70.3,23.2C58.3,47.2,41.0,60.6,35.0,54.7C7.4,68.8,3.6,70.0,-22.7,67.7C-41.5,62.0,-51.7,56.5,-64.9,39.2C-75.5,28.8,-79.4,4.8,-69.2,-4.2C-69.3,-25.9,-54.3,-31.6,-53.5,-49.2C-32.1,-54.2,-13.2,-63.8,2.9,-58.1C13.1,-57.1,37.5,-64.2,44.8,-57.4Z",
  "M51.1,-52.3C51.1,-54.0,71.1,-30.3,73.0,-20.2C76.3,0.1,75.2,11.4,65.6,28.7C62.2,51.0,51.1,55.0,28.6,58.1C7.5,61.6,-3.0,69.2,-20.4,74.3C-34.5,66.7,-54.5,49.9,-63.6,37.9C-71.5,36.4,-74.1,7.0,-68.4,-0.8C-68.0,-15.8,-57.5,-32.5,-50.2,-40.2C-28.7,-61.9,-15.7,-59.7,-2.2,-60.1C15.8,-52.4,32.1,-64.4,42.7,-53.2Z",
];

/** Free-form hero illustration: a morphing blob, rotating orbits and floating icon badges (no box frames). */
export function Scene({ center, items, inner = [], tone = "light", radar = false, label }: SceneProps) {
  const reduce = useReducedMotion();
  const dark = tone === "dark";
  const ring = dark ? "border-white/30" : "border-navy-600/25";
  const badge = dark
    ? "bg-white/15 backdrop-blur border border-white/30 text-white shadow-lg"
    : "bg-white border border-navy-600/10 text-navy-600 shadow-lg shadow-navy-600/15";
  const spin = (d: number, dir = 1) =>
    reduce ? {} : { animate: { rotate: 360 * dir }, transition: { duration: d, repeat: Infinity, ease: "linear" as const } };
  const Center = center.icon;

  const place = (list: LucideIcon[], radius: number, size: number, duration: number, dir: number) => (
    <motion.div className="absolute inset-0" {...spin(duration, dir)}>
      {list.map((Icon, i) => {
        const a = (i / list.length) * Math.PI * 2 - Math.PI / 2;
        return (
          <div key={i} className="absolute aspect-square" style={{ width: `${size}%`, left: `${50 + radius * Math.cos(a)}%`, top: `${50 + radius * Math.sin(a)}%`, transform: "translate(-50%, -50%)" }}>
            <motion.span className={`grid place-items-center rounded-full w-full h-full ${badge}`} {...spin(duration, -dir)}>
              <Icon className="w-1/2 h-1/2" strokeWidth={1.75} />
            </motion.span>
          </div>
        );
      })}
    </motion.div>
  );

  return (
    <div role="img" aria-label={label} className="relative mx-auto aspect-square w-full max-w-[420px]">
      {/* morphing blob */}
      <svg viewBox="-100 -100 200 200" className="absolute inset-0 w-full h-full" aria-hidden="true">
        <defs>
          <linearGradient id={`blob-${tone}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={dark ? "#ffffff" : "#1f2f78"} stopOpacity={dark ? 0.16 : 0.16} />
            <stop offset="1" stopColor="#b8236f" stopOpacity={dark ? 0.3 : 0.24} />
          </linearGradient>
        </defs>
        <motion.path
          fill={`url(#blob-${tone})`}
          d={BLOBS[0]}
          animate={reduce ? undefined : { d: [BLOBS[0], BLOBS[1], BLOBS[2], BLOBS[0]] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      {/* orbit rings */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className={`absolute inset-[8%] rounded-full border border-dashed ${ring}`} />
        <div className={`absolute inset-[27%] rounded-full border border-dashed ${ring}`} />
        {radar && (
          <motion.div
            className="absolute inset-[27%] rounded-full"
            style={{ background: "conic-gradient(from 0deg, transparent 0deg, rgba(184,35,111,0.35) 70deg, transparent 71deg)" }}
            {...spin(6)}
          />
        )}
        {place(items, 42, 17, 70, 1)}
        {inner.length > 0 && place(inner, 23, 12, 45, -1)}

        {/* sparkles */}
        {[[12, 20], [86, 28], [78, 84], [18, 78]].map(([x, y], i) => (
          <motion.span
            key={i}
            className={`absolute w-1.5 h-1.5 rounded-full ${dark ? "bg-pink-200" : "bg-magenta-500"}`}
            style={{ left: `${x}%`, top: `${y}%` }}
            animate={reduce ? undefined : { opacity: [0.2, 1, 0.2], scale: [0.8, 1.4, 0.8] }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.6 }}
          />
        ))}
      </div>

      {/* glowing centre */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative w-[26%] aspect-square">
          <motion.span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-magenta-500/30"
            animate={reduce ? undefined : { scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeOut" }}
          />
          <span className={`relative grid place-items-center w-full h-full rounded-full shadow-xl ${center.image ? "bg-white p-[14%]" : "bg-gradient-to-br from-navy-600 to-magenta-500 text-white"}`}>
            {center.image ? (
              <img src={center.image} alt={center.alt ?? ""} className="w-full h-full object-contain" />
            ) : (
              Center && <Center className="w-1/2 h-1/2" strokeWidth={1.75} />
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

/** Ready-made scenes, one per page. */
export const scenes: Record<string, SceneProps> = {
  home: { center: { icon: Shield }, items: [FileCheck2, Lock, Fingerprint, Cloud, ClipboardCheck, Radar], inner: [Scale, SearchCheck, Workflow], tone: "dark", label: "Illustration of a shield surrounded by compliance frameworks, privacy, cloud and audit icons" },
  approach: { center: { icon: Radar }, items: [Target, Workflow, ShieldCheck, ClipboardCheck, Cloud], inner: [Lock, SearchCheck], radar: true, label: "Illustration of continuous GRC monitoring" },
  about: { center: { icon: Compass }, items: [Users, Award, Sparkles, ShieldCheck, Handshake], inner: [Target, Landmark], label: "Illustration of a team guided toward compliance" },
  product: { center: { image: "/synfiniti-logo.webp", alt: "Synfiniti AI" }, items: [Landmark, Fingerprint, ShieldCheck, Sparkles, Layers], inner: [Lock, Cloud, FileCheck2], label: "Illustration of the Synfiniti AI platform suites orbiting the product" },
  services: { center: { icon: Handshake }, items: [BarChart3, Calendar, Code2, Shield], inner: [Users, Sparkles], label: "Illustration of Max Conformance services" },
  contact: { center: { icon: Mail }, items: [MessageSquare, Phone, MapPin, Calendar], inner: [Users, Sparkles], label: "Illustration of ways to get in touch" },
  risk: { center: { icon: Target }, items: [AlertTriangle, ShieldAlert, TrendingUp, Radar, Lock], inner: [SearchCheck, Scale], radar: true, label: "Illustration of a risk radar" },
  compliance: { center: { icon: ClipboardCheck }, items: [FileCheck2, Scale, Lock, Globe, ShieldCheck], inner: [Fingerprint, Cloud], label: "Illustration of compliance frameworks around a checklist" },
  audits: { center: { icon: SearchCheck }, items: [Globe, Lock, Cloud, FileText, ShieldAlert], inner: [Database, Radar], radar: true, label: "Illustration of a security audit" },
  webapp: { center: { icon: Code2 }, items: [LayoutDashboard, Database, Cloud, Smartphone, Plug], inner: [Lock, Workflow], label: "Illustration of web application development" },
};
