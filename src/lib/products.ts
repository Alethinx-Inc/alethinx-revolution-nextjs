// SERVER-SIDE ONLY — import guard via server-only
// This file must NEVER be imported by a 'use client' component.
// Client components fetch product data via /api/product?key=X
import "server-only";

export interface ProductStep {
  t: string;
  d: string;
}

export interface ProductPricing {
  n: string;
  p: string;
  d: string;
}

export interface Product {
  key: string;
  eyebrow: string;
  name: string;
  root: string;
  badge: "live" | "building" | "roadmap" | "core";
  tagline: string;
  desc: string;
  steps: ProductStep[];
  benefits: string[];
  pricing: ProductPricing[];
  engines: string[];
  cta: { text: string; url: string };
}

export const products: Product[] = [
  {
    key: "alethinx",
    eyebrow: "Foundation",
    name: "Alethinx AI\u2122",
    root: "ALETHEIA \u2014 \u201CDisclosed Truth\u201D",
    badge: "live",
    tagline: "The M&A Intelligence Platform that anchors the entire ecosystem.",
    desc: "Alethinx AI is the foundation of the ecosystem \u2014 the central platform that connects deal discovery, analysis, execution, and post-acquisition operations into one unified intelligence layer.",
    steps: [
      { t: "Submit a deal or search for opportunities", d: "AI-powered intake captures your acquisition criteria and matches against live deal flow." },
      { t: "Multi-perspective AI analysis", d: "Multiple specialized AI engines analyze every deal from financial, operational, legal, and strategic angles simultaneously." },
      { t: "Execute with guided intelligence", d: "Structured execution workflow guides you through every phase from LOI to close." },
      { t: "Transition to autonomous operations", d: "At close, Autopilot activates with full acquisition context \u2014 no ramp-up needed." },
    ],
    benefits: [
      "Single platform for the entire M&A lifecycle",
      "AI analysis from multiple perspectives simultaneously",
      "Guided execution workflow with compliance built in",
      "Seamless handoff to post-acquisition AI operations",
    ],
    pricing: [
      { n: "Explorer", p: "Free", d: "Basic deal analysis, single AI engine" },
      { n: "Pro", p: "$79/month", d: "Full multi-AI analysis, priority support" },
      { n: "Enterprise", p: "$399/month", d: "Unlimited analysis, custom integrations, dedicated success manager" },
    ],
    engines: ["Semantic Search", "Financial Modeling", "Risk Analysis", "Compliance Engine", "Strategic Assessment"],
    cta: { text: "Start Free \u2192", url: "https://app.alethinx.ai" },
  },
  {
    key: "sophynx",
    eyebrow: "Foundation",
    name: "Sophynx\u2122",
    root: "SOPHIA \u2014 \u201CDivine Wisdom\u201D",
    badge: "live",
    tagline: "The AI Business Operating System for every entrepreneur.",
    desc: "Sophynx is the AI business intelligence platform \u2014 your AI Council of advisors, CFO, and growth agents working together to run your business with autonomous intelligence.",
    steps: [
      { t: "Upload your Business DNA", d: "Documents, financials, strategy \u2014 Sophynx learns everything about your business." },
      { t: "Consult your AI Council", d: "Multiple AI models deliberate on your questions and deliver synthesized strategic guidance." },
      { t: "Deploy Growth Agents", d: "Specialized AI agents handle content, competitors, compliance, and more \u2014 autonomously." },
      { t: "Get your AI CFO", d: "Nathan Prescott CPA\u00b7CFA delivers investor-grade financial analysis grounded in your data." },
    ],
    benefits: [
      "Multi-model AI Council for strategic decisions",
      "AI CFO with real financial modeling",
      "Growth agents that work while you sleep",
      "All grounded in YOUR business data",
    ],
    pricing: [
      { n: "Free", p: "$0", d: "AI Council basics, limited queries" },
      { n: "Pro", p: "$39/month", d: "Full Council, AI CFO, 3 Growth Agents" },
      { n: "Business", p: "$149/month", d: "Unlimited everything, all 8 agents, 5 team seats" },
    ],
    engines: ["AI Council", "AI CFO", "Growth Agents", "Business DNA", "Collective Intelligence"],
    cta: { text: "Try Sophynx Free \u2192", url: "https://sophynx.alethinx.ai" },
  },
  {
    key: "autopilot",
    eyebrow: "ACT III \u2014 RUN",
    name: "Autopilot\u2122",
    root: "HEGEOMAI \u2014 \u201CTo Lead\u201D",
    badge: "live",
    tagline: "Your AI CEO. From Day 1.",
    desc: "Autopilot activates the moment you close an acquisition. Seven autonomous agents run nightly, fully briefed on your deal via our patented memory architecture. No ramp-up. No learning curve.",
    steps: [
      { t: "Acquisition closes", d: "All deal intelligence transfers automatically via patented memory handoff." },
      { t: "Agents activate", d: "Seven specialized agents begin monitoring operations, finances, growth, compliance, and more." },
      { t: "Daily CEO Brief", d: "Every morning at 6am, you receive an executive brief \u2014 fully contextualized to your business." },
      { t: "Continuous optimization", d: "Agents learn from every interaction, getting smarter about your specific business every day." },
    ],
    benefits: [
      "Zero ramp-up \u2014 full context from Day 1",
      "Seven autonomous agents running nightly",
      "Executive brief every morning before your day starts",
      "Compounding intelligence that deepens over time",
    ],
    pricing: [
      { n: "Starter", p: "$99/month", d: "Core agents, daily brief" },
      { n: "Growth", p: "$499/month", d: "All agents, priority execution" },
      { n: "Enterprise", p: "$999/month", d: "Custom agents, API access, dedicated success" },
    ],
    engines: ["Operator Agent", "Revenue Agent", "Cashflow Agent", "Growth Agent", "CustomerAI", "Compliance Agent", "ReportAI"],
    cta: { text: "Activate Autopilot \u2192", url: "https://app.alethinx.ai" },
  },
  {
    key: "logynx",
    eyebrow: "INTELLIGENCE LAYER",
    name: "Logynx\u2122",
    root: "LOGOS \u2014 \u201CThe Word\u201D (JOHN 1:1)",
    badge: "core",
    tagline: "The central intelligence orchestration engine.",
    desc: "Logynx is the invisible backbone \u2014 the orchestration layer that routes queries, coordinates AI models, manages memory, and ensures every product in the ecosystem speaks the same intelligence language.",
    steps: [
      { t: "Query routing", d: "Intelligently routes every user query to the optimal combination of AI models." },
      { t: "Memory management", d: "Manages the multi-layer memory architecture across all products." },
      { t: "Context synthesis", d: "Synthesizes context from Business DNA, deal history, and real-time data." },
      { t: "Intelligence distribution", d: "Distributes insights across all connected products in real-time." },
    ],
    benefits: [
      "Unified intelligence across all Alethinx products",
      "Multi-model orchestration for optimal results",
      "Patented memory architecture management",
      "Real-time context synthesis from all data sources",
    ],
    pricing: [
      { n: "Included", p: "Built-in", d: "Core infrastructure \u2014 included in all products" },
    ],
    engines: ["Query Router", "Memory Manager", "Context Synthesizer", "Model Orchestrator"],
    cta: { text: "Explore Architecture \u2192", url: "#architecture" },
  },
  {
    key: "masoryx",
    eyebrow: "DATA LAYER",
    name: "Masoryx\u2122",
    root: "MASORAH \u2014 \u201CPreserved Transmission\u201D",
    badge: "building",
    tagline: "The compounding data moat that gets stronger every day.",
    desc: "Masoryx is the temporal data advantage \u2014 every deal analyzed, every outcome tracked, every lesson preserved. The compounding intelligence engine that makes every future analysis smarter.",
    steps: [
      { t: "Capture", d: "Every deal interaction, analysis, and outcome is captured and preserved." },
      { t: "Compound", d: "Historical patterns compound over time, creating deeper intelligence with each deal." },
      { t: "Predict", d: "Temporal patterns enable predictive intelligence that improves with scale." },
      { t: "Protect", d: "The data moat widens every day \u2014 a temporal advantage no competitor can replicate." },
    ],
    benefits: [
      "Compounding intelligence from every deal",
      "Temporal data advantage that grows daily",
      "Predictive patterns from historical outcomes",
      "Unreplicable moat \u2014 competitors can't recreate time",
    ],
    pricing: [
      { n: "Included", p: "Built-in", d: "Core data infrastructure \u2014 included in all paid plans" },
    ],
    engines: ["Data Capture", "Pattern Engine", "Temporal Analysis", "Intelligence Compounding"],
    cta: { text: "Learn More \u2192", url: "#moats" },
  },
  {
    key: "urimyx",
    eyebrow: "PREDICTION ENGINE",
    name: "URIMYX\u2122",
    root: "URIM \u2014 \u201CLights\u201D (EXODUS 28:30)",
    badge: "roadmap",
    tagline: "Predictive intelligence from compounding deal data.",
    desc: "URIMYX transforms the Masoryx data moat into actionable predictions \u2014 deal success probability, optimal pricing, timing recommendations, and risk forecasting powered by temporal pattern analysis.",
    steps: [
      { t: "Pattern recognition", d: "Identifies success and failure patterns across the entire deal corpus." },
      { t: "Probability scoring", d: "Generates deal success probability scores based on historical outcomes." },
      { t: "Timing optimization", d: "Recommends optimal timing for offers, negotiations, and closes." },
      { t: "Risk forecasting", d: "Predicts post-acquisition risks based on comparable deal outcomes." },
    ],
    benefits: [
      "Data-driven deal success predictions",
      "Optimal pricing and timing recommendations",
      "Risk forecasting from historical patterns",
      "Competitive advantage from temporal intelligence",
    ],
    pricing: [
      { n: "Enterprise", p: "Contact Sales", d: "Available as part of the Enterprise ecosystem" },
    ],
    engines: ["Prediction Engine", "Pattern Analyzer", "Temporal Modeler"],
    cta: { text: "Join Waitlist \u2192", url: "#cta" },
  },
  {
    key: "thummix",
    eyebrow: "OUTCOME DATABASE",
    name: "THUMMIX\u2122",
    root: "THUMMIM \u2014 \u201CPerfections\u201D (EXODUS 28:30)",
    badge: "roadmap",
    tagline: "The outcome database that validates every prediction.",
    desc: "THUMMIX closes the loop \u2014 tracking actual post-acquisition outcomes against predictions, creating a self-improving intelligence system that gets more accurate with every completed deal.",
    steps: [
      { t: "Outcome tracking", d: "Monitors actual business performance against pre-acquisition predictions." },
      { t: "Validation loop", d: "Feeds real outcomes back into URIMYX to improve future predictions." },
      { t: "Success metrics", d: "Builds industry-specific success benchmarks from real data." },
      { t: "Continuous learning", d: "The system improves accuracy autonomously with every tracked outcome." },
    ],
    benefits: [
      "Self-improving prediction accuracy",
      "Real outcome data validates every model",
      "Industry-specific success benchmarks",
      "Autonomous accuracy improvement over time",
    ],
    pricing: [
      { n: "Enterprise", p: "Contact Sales", d: "Available as part of the Enterprise ecosystem" },
    ],
    engines: ["Outcome Tracker", "Validation Engine", "Benchmark Builder"],
    cta: { text: "Join Waitlist \u2192", url: "#cta" },
  },
  {
    key: "gnosix",
    eyebrow: "MARKET INTELLIGENCE",
    name: "GNOSIX\u2122",
    root: "GNOSIS \u2014 \u201CKnowledge\u201D (COLOSSIANS 2:3)",
    badge: "building",
    tagline: "Real-time market intelligence for M&A.",
    desc: "GNOSIX aggregates and analyzes market signals in real-time \u2014 industry trends, comparable transactions, valuation benchmarks, and emerging opportunities across the entire M&A landscape.",
    steps: [
      { t: "Signal aggregation", d: "Continuously monitors thousands of market data sources." },
      { t: "Trend analysis", d: "Identifies emerging industry trends and valuation shifts." },
      { t: "Comparable transactions", d: "Maintains a live database of comparable M&A transactions." },
      { t: "Opportunity surfacing", d: "Proactively surfaces opportunities matching your acquisition criteria." },
    ],
    benefits: [
      "Real-time market intelligence",
      "Live comparable transaction database",
      "Emerging trend identification",
      "Proactive opportunity matching",
    ],
    pricing: [
      { n: "Pro", p: "$79/month", d: "Included with Pro plan" },
      { n: "Enterprise", p: "$399/month", d: "Full API access + custom feeds" },
    ],
    engines: ["Signal Aggregator", "Trend Analyzer", "Comparable Engine"],
    cta: { text: "Learn More \u2192", url: "#architecture" },
  },
  {
    key: "koinonyx",
    eyebrow: "ENTERPRISE API",
    name: "KOINONYX\u2122",
    root: "KOINONIA \u2014 \u201CFellowship\u201D (ACTS 2:42)",
    badge: "roadmap",
    tagline: "Enterprise API for M&A intelligence integration.",
    desc: "KOINONYX opens the Alethinx ecosystem to enterprise integrations \u2014 CRM, ERP, accounting, and custom workflows can all tap into the intelligence layer via a unified API.",
    steps: [
      { t: "API access", d: "RESTful API with real-time webhooks for all ecosystem intelligence." },
      { t: "Integration hub", d: "Pre-built connectors for Salesforce, HubSpot, QuickBooks, and more." },
      { t: "Custom workflows", d: "Build custom M&A workflows powered by Alethinx intelligence." },
      { t: "White-label", d: "Embed Alethinx intelligence in your own platform under your brand." },
    ],
    benefits: [
      "Unified API for all ecosystem products",
      "Pre-built enterprise integrations",
      "Custom workflow automation",
      "White-label embedding options",
    ],
    pricing: [
      { n: "Enterprise", p: "Contact Sales", d: "Custom pricing based on usage and integration scope" },
    ],
    engines: ["REST API", "Webhook Engine", "Integration Hub"],
    cta: { text: "Contact Sales \u2192", url: "mailto:hello@alethinx.ai" },
  },
  {
    key: "shamarix",
    eyebrow: "COMPLIANCE",
    name: "SHAMARIX\u2122",
    root: "SHAMAR \u2014 \u201CTo Guard\u201D (PSALM 121:7)",
    badge: "roadmap",
    tagline: "Autonomous compliance guardian for acquired businesses.",
    desc: "SHAMARIX monitors regulatory compliance continuously \u2014 covenant tracking, tax obligations, employment law, industry regulations, and SBA requirements for acquisition-financed businesses.",
    steps: [
      { t: "Compliance mapping", d: "Maps all regulatory requirements for your acquired business." },
      { t: "Continuous monitoring", d: "Monitors compliance status 24/7 with automated alerts." },
      { t: "Covenant tracking", d: "Tracks loan covenant compliance in real-time." },
      { t: "Regulatory updates", d: "Automatically adapts to new regulations affecting your business." },
    ],
    benefits: [
      "Autonomous compliance monitoring",
      "Real-time covenant tracking",
      "Automatic regulatory adaptation",
      "Peace of mind for acquisition operators",
    ],
    pricing: [
      { n: "Enterprise", p: "Contact Sales", d: "Part of the Autopilot Enterprise suite" },
    ],
    engines: ["Compliance Monitor", "Covenant Tracker", "Regulatory Engine"],
    cta: { text: "Join Waitlist \u2192", url: "#cta" },
  },
];

export function getProduct(key: string): Product | undefined {
  return products.find((p) => p.key === key);
}

export function getPublicProductData(key: string) {
  const p = getProduct(key);
  if (!p) return null;
  return {
    key: p.key,
    eyebrow: p.eyebrow,
    name: p.name,
    root: p.root,
    badge: p.badge,
    tagline: p.tagline,
    desc: p.desc,
    steps: p.steps,
    benefits: p.benefits,
    pricing: p.pricing,
    engines: p.engines,
    cta: p.cta,
  };
}
