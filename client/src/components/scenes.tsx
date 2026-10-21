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
  /** Icons evenly spaced around the orbit (4 to 6 looks best). */
  items: LucideIcon[];
  tone?: "light" | "dark";
  /** Adds a soft rotating radar sweep. */
  radar?: boolean;
  label: string;
}

/** Hero illustration: a calm glow disc, two thin rings and evenly spaced icon badges joined to a centre point. */
export function Scene({ center, items, tone = "light", radar = false, label }: SceneProps) {
  const reduce = useReducedMotion();
  const dark = tone === "dark";
  const line = dark ? "rgba(255,255,255,0.28)" : "rgba(31,47,120,0.18)";
  const badge = dark
    ? "bg-white/15 backdrop-blur-sm border border-white/35 text-white"
    : "bg-white border border-navy-600/10 text-navy-600 shadow-md shadow-navy-600/15";
  const Center = center.icon;
  const RADIUS = 38; // % of the container
  const orbit = reduce ? {} : { animate: { rotate: 360 }, transition: { duration: 90, repeat: Infinity, ease: "linear" as const } };
  const counter = reduce ? {} : { animate: { rotate: -360 }, transition: { duration: 90, repeat: Infinity, ease: "linear" as const } };

  return (
    <div role="img" aria-label={label} className="relative mx-auto aspect-square w-full max-w-[400px]">
      <div aria-hidden="true" className="absolute inset-0">
        {/* soft glow disc */}
        <div
          className="absolute inset-[6%] rounded-full"
          style={{
            background: dark
              ? "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.20), rgba(255,255,255,0.04) 62%, transparent 72%)"
              : "radial-gradient(circle at 50% 50%, rgba(184,35,111,0.16), rgba(31,47,120,0.07) 62%, transparent 72%)",
          }}
        />
        {/* thin solid rings */}
        <div className="absolute rounded-full" style={{ inset: `${50 - RADIUS}%`, border: `1px solid ${line}` }} />
        <div className="absolute rounded-full" style={{ inset: "31%", border: `1px solid ${line}` }} />

        {radar && (
          <motion.div
            className="absolute rounded-full"
            style={{ inset: `${50 - RADIUS}%`, background: "conic-gradient(from 0deg, transparent 0deg, rgba(184,35,111,0.28) 60deg, transparent 61deg)" }}
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        )}

        {/* spokes + badges (rotate slowly together; badges stay upright) */}
        <motion.div className="absolute inset-0" {...orbit}>
          {items.map((Icon, i) => {
            const angle = (i / items.length) * 360 - 90;
            const rad = (angle * Math.PI) / 180;
            return (
              <div key={i}>
                <div
                  className="absolute left-1/2 top-1/2 h-px origin-left"
                  style={{ width: `${RADIUS - 14 - 8.5}%`, background: line, transform: `translateY(-50%) rotate(${angle}deg) translateX(${(14 / (RADIUS - 22.5)) * 100}%)` }}
                />
                <div
                  className="absolute aspect-square"
                  style={{ width: "17%", left: `${50 + RADIUS * Math.cos(rad)}%`, top: `${50 + RADIUS * Math.sin(rad)}%`, transform: "translate(-50%, -50%)" }}
                >
                  <motion.span className={`grid place-items-center rounded-full w-full h-full ${badge}`} {...counter}>
                    <Icon className="w-[46%] h-[46%]" strokeWidth={1.75} />
                  </motion.span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* centre */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative w-[28%] aspect-square">
          <motion.span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-magenta-500/25"
            animate={reduce ? undefined : { scale: [1, 1.45], opacity: [0.55, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
          />
          <span className={`relative grid place-items-center w-full h-full rounded-full shadow-xl ${center.image ? "bg-white p-[15%]" : "bg-gradient-to-br from-navy-600 to-magenta-500 text-white"} ${dark ? "ring-4 ring-white/25" : "ring-4 ring-white"}`}>
            {center.image ? (
              <img src={center.image} alt={center.alt ?? ""} className="w-full h-full object-contain" />
            ) : (
              Center && <Center className="w-[46%] h-[46%]" strokeWidth={1.75} />
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

/** Ready-made scenes, one per page. */
export const scenes: Record<string, SceneProps> = {
  home: { center: { icon: Shield }, items: [FileCheck2, Lock, Fingerprint, Cloud, ClipboardCheck, Radar], tone: "dark", label: "Illustration of a shield surrounded by compliance frameworks, privacy, cloud and audit icons" },
  approach: { center: { icon: Radar }, items: [Target, Workflow, ShieldCheck, ClipboardCheck, Cloud], radar: true, label: "Illustration of continuous GRC monitoring" },
  about: { center: { icon: Compass }, items: [Users, Award, Sparkles, ShieldCheck, Handshake], label: "Illustration of a team guided toward compliance" },
  product: { center: { image: "/synfiniti-logo.webp", alt: "Synfiniti AI" }, items: [Landmark, Fingerprint, ShieldCheck, Sparkles, Layers], label: "Illustration of the Synfiniti AI platform suites orbiting the product" },
  services: { center: { icon: Handshake }, items: [BarChart3, Calendar, Code2, Shield], label: "Illustration of Max Conformance services" },
  contact: { center: { icon: Mail }, items: [MessageSquare, Phone, MapPin, Calendar], label: "Illustration of ways to get in touch" },
  risk: { center: { icon: Target }, items: [AlertTriangle, ShieldAlert, TrendingUp, Radar, Lock], radar: true, label: "Illustration of a risk radar" },
  compliance: { center: { icon: ClipboardCheck }, items: [FileCheck2, Scale, Lock, Globe, ShieldCheck], label: "Illustration of compliance frameworks around a checklist" },
  audits: { center: { icon: SearchCheck }, items: [Globe, Lock, Cloud, FileText, ShieldAlert], radar: true, label: "Illustration of a security audit" },
  webapp: { center: { icon: Code2 }, items: [LayoutDashboard, Database, Cloud, Smartphone, Plug], label: "Illustration of web application development" },
};
