import {
  Landmark, Fingerprint, ShieldCheck, Sparkles, Layers, Plug, Network, Radar,
  ScrollText, ScanSearch, FileSearch, ClipboardCheck, Bot, type LucideIcon,
} from "lucide-react";

export const stats = [
  { value: "16+", label: "Standards, regulations & benchmarks" },
  { value: "20", label: "Integrated capability areas" },
  { value: "14", label: "Connected modules" },
  { value: "80%", label: "Less time spent on audits" },
];

export interface Suite { name: string; text: string; icon: LucideIcon; items: string[] }

export const suites: Suite[] = [
  {
    name: "GRC Suite",
    icon: Landmark,
    text: "A framework library, a live control register with reusable evidence, risk management, gap assessments, internal audits and policy management on one control model.",
    items: ["Controls & evidence", "Risk management", "Audit & gap assessment", "Policy management"],
  },
  {
    name: "Privacy Suite",
    icon: Fingerprint,
    text: "DPDP-native privacy: PII inventory and lineage, OTP-verified consent, a self-service DSAR portal and structured breach notification.",
    items: ["PII inventory", "Consent ledger", "DSAR portal", "Breach notification"],
  },
  {
    name: "Assurance Suite",
    icon: ShieldCheck,
    text: "Vendor assessments with AI questionnaire processing, agentless multi-cloud scanning, SLA-driven incidents, awareness training and a public Trust Center.",
    items: ["Vendor risk", "Cloud compliance", "Incidents", "Trust Center"],
  },
  {
    name: "AI & Automation",
    icon: Sparkles,
    text: "A permission-aware compliance assistant, AI questionnaire drafting, AI summaries and an MCP server for your own AI agents.",
    items: ["Compliance assistant", "Questionnaire AI", "AI summaries", "MCP server"],
  },
  {
    name: "Enterprise Platform",
    icon: Layers,
    text: "Executive dashboards, a unified task and alert engine, SSO and fine-grained RBAC, a dedicated database per tenant, open APIs and fast onboarding.",
    items: ["Dashboards", "Workflow & alerts", "SSO & RBAC", "APIs"],
  },
];

export const modules = [
  { title: "Document Library", text: "Audit-ready policies and procedures, drafted, versioned, approved and acknowledged." },
  { title: "Gap Assessment", text: "Know where you stand against any standard, with a roadmap to certification." },
  { title: "Risk Management", text: "Consistent, defensible risk decisions from first assessment to board reporting." },
  { title: "Audit Management", text: "Plan, run and close internal and external audits with findings tracked to closure." },
  { title: "Evidence Management", text: "Collect evidence once, reuse it across controls and keep it fresh all year." },
  { title: "Controls Center", text: "A live, owned control register for every framework, with your SoA always in sync." },
  { title: "Task Management", text: "One task engine for every open action, with schedules and alerts." },
  { title: "Third Party Security", text: "Vendor due diligence without spreadsheets, from questionnaire to remediation." },
  { title: "Privacy Management", text: "Inventory, consent, data subject rights and breach in one connected model." },
  { title: "Dashboards & Analytics", text: "Board-ready insight from live GRC data, and audit reports in minutes." },
  { title: "Cloud Compliance", text: "Agentless AWS, Azure and GCP scanning with findings mapped to compliance impact." },
  { title: "Incident Management", text: "SLA-driven incident response connected to privacy breach obligations." },
  { title: "Security Awareness", text: "A built-in LMS for security and privacy training, with certificates as evidence." },
  { title: "Trust Center", text: "Show customers your security posture and share reports under NDA." },
];

export const steps = [
  { title: "Connect", icon: Plug, text: "Go live with pre-loaded frameworks, templates and libraries, plus agentless AWS, Azure and GCP connectors." },
  { title: "Own", icon: Network, text: "Assign every control an owner, attach reusable evidence and approve changes with maker-checker." },
  { title: "Monitor", icon: Radar, text: "Scheduled evidence tasks, cloud scans and rule-based alerts keep you continuously audit-ready." },
  { title: "Prove", icon: ShieldCheck, text: "Export the SoA and framework reports on demand and share your posture through a Trust Center." },
];

export const aiFeatures = [
  { title: "Document intelligence", icon: ScrollText, text: "Draft, summarize and refine policies, and auto-map documents to controls and frameworks." },
  { title: "AI gap assessment", icon: ScanSearch, text: "Analyze your posture against multiple standards at once with actionable remediation steps." },
  { title: "Security questionnaire AI", icon: FileSearch, text: "Answer customer and vendor questionnaires faster, learning from your previous answers." },
  { title: "Automated audit support", icon: ClipboardCheck, text: "AI-driven evidence collection and sampling, with audit workpapers generated for you." },
  { title: "Compliance assistant", icon: Bot, text: "Ask questions about regulations and controls and get context-aware answers any time." },
];

export const standards = [
  "ISO/IEC 27001", "SOC 2", "NIST SP 800-53", "NIST CSF", "PCI DSS", "CSA CCM", "ISO/IEC 27017", "ISO/IEC 27018",
  "ISO/IEC 27701", "ISO 22301", "CIS Benchmarks", "AWS FSBP", "HIPAA", "DPDP Act (India)", "GDPR",
];

export const clients = [
  { name: "Addverb", logo: "/clients/addverb-logo.webp", industry: "Warehouse automation & robotics" },
  { name: "Leegality", logo: "/clients/leegality-logo.svg", industry: "Digital signing & document execution" },
  { name: "Digital Hoop", logo: "/clients/digitalhoop-logo.webp", industry: "IT solutions & SaaS" },
  { name: "Elicit Technology", logo: "/clients/elicit-logo.svg", industry: "CargoWise services & logistics tech" },
  { name: "Crego", logo: "/clients/crego-logo.svg", industry: "Lending infrastructure platform" },
];
