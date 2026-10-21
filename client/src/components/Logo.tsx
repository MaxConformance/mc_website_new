import { useState } from "react";
import { site } from "@/config/site";

// Shows the uploaded logo (client/public/logo.png); falls back to a built-in mark + wordmark.
export default function Logo({ className = "h-9" }: { className?: string }) {
  const [failed, setFailed] = useState(false);

  if (!failed) {
    return (
      <img
        src={site.logo}
        alt={`${site.name} logo`}
        className={`${className} w-auto`}
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <span className="inline-flex items-center gap-2.5">
      <svg viewBox="0 0 32 32" className={`${className} aspect-square`} aria-hidden="true">
        <defs>
          <linearGradient id="mc-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1f2f78" />
            <stop offset="1" stopColor="#b8236f" />
          </linearGradient>
        </defs>
        <path d="M16 2 4 7v8c0 7.2 5 12.6 12 15 7-2.4 12-7.8 12-15V7L16 2Z" fill="url(#mc-g)" />
        <path d="m10.5 16.5 4 4 7.5-8.5" fill="none" stroke="#fff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="font-extrabold tracking-tight text-lg text-navy-600" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        Max<span className="text-magenta-600">Conformance</span>
      </span>
    </span>
  );
}
