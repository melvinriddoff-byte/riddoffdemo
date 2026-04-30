import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Zap, BookOpen, Rocket, Star } from "lucide-react";
import fp1Img from "@/components/assets/fp1.png";
import fp2Img from "@/components/assets/fp2.png";
import fp3Img from "@/components/assets/fp3.png";
import fp4Img from "@/components/assets/fp4.png";
import fp5Img from "@/components/assets/fp5.png";
import fp6Img from "@/components/assets/fp6.png";
import fp7Img from "@/components/assets/fp7.png";
import fp8Img from "@/components/assets/fp8.png";
import fp9Img from "@/components/assets/fp9.png";
import fp10Img from "@/components/assets/fp10.png";
import fp11Img from "@/components/assets/fp11.png";
import fp12Img from "@/components/assets/fp12.png";

// Courses Data
const bootcamps = [
  {

    title: "AI Dropshipping Empire",
    sector: "E-commerce & Retail",
    tagline: "Build an AI agent that sources, prices, and sells products across 5 marketplaces in 14 hours.",
    description: "Automate product discovery and pricing. Deploy live seller across multiple marketplaces.",
    hours: 14,
    priceLow: 4999,
    seats: 35,
    image: fp1Img,
  },
  {
    title: "AI Underwriting Engine",
    sector: "Fintech & Banking",
    tagline: "Build a credit scoring AI that ingests PDFs, pulls APIs, and makes lending decisions in real time.",
    description: "Process loan applications with AI-driven risk assessment. Integrate documents and APIs seamlessly.",
    hours: 14,
    priceLow: 5499,
    seats: 30,
    image: fp2Img,
  },
  {
    title: "AI Patient Triage System",
    sector: "Healthcare & Biotech",
    tagline: "Build a multi-stage triage AI that reads medical notes, flags high-risk patients, and routes them to specialists.",
    description: "Analyze medical records and prioritize urgent cases. Route patients to appropriate specialists.",
    hours: 14,
    priceLow: 5999,
    seats: 25,
    image: fp3Img,
  },
  {
    title: "AI Contract Analyzer",
    sector: "Legal Tech",
    tagline: "Build an AI that reads contracts, flags risks, and extracts terms automatically for in-house legal teams.",
    description: "Extract contract terms and identify legal risks. Automate document review for legal teams.",
    hours: 14,
    priceLow: 5499,
    seats: 28,
    image: fp4Img,
  },
  {
    title: "AI Carbon Footprint Tracker",
    sector: "Climate & Sustainability",
    tagline: "Build an AI that ingests supply chain data and auto-calculates carbon footprints for enterprises.",
    description: "Track supply chain emissions automatically. Calculate carbon impact across operations.",
    hours: 14,
    priceLow: 4999,
    seats: 32,
    image: fp5Img,
  },
  {
    title: "AI Quality Inspector",
    sector: "Manufacturing",
    tagline: "Build a vision AI that detects defects in real-time on factory floors using live camera feeds.",
    description: "Detect manufacturing defects in real-time. Deploy computer vision on factory floors.",
    hours: 14,
    priceLow: 5999,
    seats: 25,
    image: fp6Img,
  },
];

const courses = [
  {
    title: "AI Fundamentals Bootcamp",
    category: "Foundations",
    tagline: "Master the foundations of modern AI: LLMs, embeddings, fine-tuning, and prompt engineering.",
    description: "Learn LLMs, embeddings, and prompt engineering. Foundation for all AI work.",
    hours: 16,
    weeks: 4,
    priceLow: 1999,
    image: fp7Img,
  },
  {
    title: "RAG Systems Masterclass",
    category: "LLM & RAG",
    tagline: "Build production RAG systems: semantic search, chunking strategies, and reranking.",
    description: "Master semantic search, chunking, and reranking. Build production RAG systems.",
    hours: 12,
    weeks: 3,
    priceLow: 2499,
    image: fp8Img,
  },
  {

    title: "AI Agents & Orchestration",
    category: "Agents & Orchestration",
    tagline: "Build multi-agent systems: ReAct, tool calling, agent workflows, and error handling.",
    description: "Build multi-agent systems with ReAct and tool calling. Handle errors gracefully.",
    hours: 14,
    weeks: 4,
    priceLow: 2799,
    image: fp9Img,
  },
  {
    title: "Computer Vision for Production",
    category: "Computer Vision",
    tagline: "Build production computer vision systems: detection, segmentation, and deployment.",
    description: "Learn detection and segmentation. Deploy vision models to production.",
    hours: 18,
    weeks: 5,
    priceLow: 2299,
    image: fp10Img,
  },
  {
    title: "MLOps & Model Deployment",
    category: "MLOps & Deployment",
    tagline: "Ship ML models to production: orchestration, monitoring, serving, and scaling.",
    description: "Orchestrate, monitor, and scale ML models. Ship to production confidently.",
    hours: 16,
    weeks: 4,
    priceLow: 2599,
    image: fp11Img,
  },
  {
    title: "AI for E-commerce: Search & Recommendations",
    category: "Industry Applications",
    tagline: "Build AI systems for e-commerce: semantic search, personalization, and pricing.",
    description: "Build semantic search and recommendation engines. Personalize user experiences.",
    hours: 10,
    weeks: 3,
    priceLow: 1699,
    image: fp12Img,
  },
];

const bootcampSectors = ["All", "E-commerce & Retail", "Fintech & Banking", "Healthcare & Biotech", "Legal Tech", "Climate & Sustainability", "Manufacturing"];
const courseCategories = ["All", "Foundations", "LLM & RAG", "Agents & Orchestration", "Computer Vision", "MLOps & Deployment", "Industry Applications"];

function CourseCard({ item }: { item: (typeof bootcamps[0] | typeof courses[0]) & { image?: string } }) {
  const oldPrice = Math.round(item.priceLow * 3.4);
  const rating = 4.7;

  return (
    <motion.div
      className="bg-card border border-border rounded-lg overflow-hidden transition-shadow duration-300 flex flex-col h-full"
    >
      {/* Cover gradient */}
      <div className="aspect-video flex items-end p-4 text-white relative overflow-hidden bg-muted">
        {item.image && (
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="relative z-10">
          {"code" in item && <div className="text-xs font-mono opacity-75 mb-2">{(item as any).code}</div>}
        </div>
      </div>

      {/* Content */}
      <div className="p-3 flex-1 flex flex-col">
        <p className="text-xs text-muted-foreground mb-2">
          {"sector" in item ? item.sector : item.category}
        </p>
        <p className="font-satoshi text-xs text-muted-foreground mb-3 line-clamp-2">
          {"description" in item ? (item as any).description : (item as any).tagline}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className={i < Math.floor(rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"} />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">{rating}</span>
        </div>

        {/* Heading */}
        <h3 className="font-melodrama text-lg font-bold text-foreground mb-3">{item.title}</h3>

        {/* Price */}
        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="font-melodrama text-base font-bold text-foreground">₹{item.priceLow.toLocaleString("en-IN")}</span>
            <span className="text-xs text-muted-foreground line-through">₹{oldPrice.toLocaleString("en-IN")}</span>
          </div>
          <button className="w-full bg-primary text-white font-satoshi text-xs font-semibold py-2 rounded-md hover:bg-primary/90 transition-colors">
            Enroll now
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function CoursesSection() {
  const [activeTab, setActiveTab] = useState<"bootcamps" | "courses">("bootcamps");
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = activeTab === "bootcamps" ? bootcampSectors : courseCategories;
  const items = activeTab === "bootcamps" ? bootcamps : courses;

  const filtered = items.filter((item) => {
    const categoryKey = activeTab === "bootcamps" ? "sector" : "category";
    return activeFilter === "All" || item[categoryKey as keyof typeof item] === activeFilter;
  });

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-melodrama text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-4 sm:mb-6">
              Master AI <span className="text-primary">Your Way</span>
            </h1>
            <p className="font-satoshi text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              Choose between intensive 2-day bootcamps with live instructors or self-paced courses you can take anytime. 25+ AI programs across every sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
              <button onClick={() => document.getElementById("ai-course")?.scrollIntoView({ behavior: "smooth" })} className="px-6 py-3 bg-primary text-white font-satoshi font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                Browse all programs
              </button>
              <button className="px-6 py-3 border border-border text-foreground font-satoshi font-semibold rounded-lg hover:bg-accent transition-colors">
                Watch demo
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 pt-12 border-t border-border/50">
              {[
                { value: "4.7+", label: "avg rating" },
                { value: "50,500+", label: "students" },
                { value: "25+", label: "programs" },
                { value: "100%", label: "satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-melodrama text-3xl sm:text-4xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="sticky top-16 z-40 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex gap-8">
            <Link to="/masterclass" className="py-4 px-2 font-satoshi font-semibold text-sm border-b-2 border-transparent text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 no-underline hover:no-underline">
              <Rocket size={18} />
              <span>Riddoff Masterclass</span>
            </Link>
            {(["bootcamps", "courses"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setActiveFilter("All");
                }}
                className={`py-4 px-2 font-satoshi font-semibold text-sm border-b-2 transition-colors flex items-center gap-2 ${activeTab === tab ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
              >
                {tab === "bootcamps" ? (
                  <>
                    <Zap size={18} />
                    <span>Live Bootcamps</span>
                  </>
                ) : (
                  <>
                    <BookOpen size={18} />
                    <span>Self-Paced Courses</span>
                  </>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full font-satoshi text-sm font-medium whitespace-nowrap transition-colors ${activeFilter === cat
                  ? "bg-foreground text-background"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="flex items-baseline justify-between mb-8">
            <div className="flex items-center gap-3">
              {activeTab === "bootcamps" ? (
                <Zap className="text-primary" size={28} />
              ) : (
                <BookOpen className="text-primary" size={28} />
              )}
              <h2 className="font-melodrama text-2xl sm:text-3xl font-bold text-foreground">
                {activeTab === "bootcamps" ? "Live Bootcamps" : "Self-Paced Courses"}
              </h2>
            </div>
            <p className="text-sm text-muted-foreground">{filtered.length} programs available</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}>
                <CourseCard item={item} />
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No programs found for this filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-secondary">
        <div className="container mx-auto">
          <h2 className="font-melodrama text-3xl sm:text-4xl font-bold text-secondary-foreground mb-12 text-center">
            Why Riddoff {activeTab === "bootcamps" ? "Bootcamps" : "Courses"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(activeTab === "bootcamps"
              ? [
                { emoji: "💬", title: "Live demo opens Day 1", desc: "See the finished capstone before you write a line of code." },
                { emoji: "👥", title: "1 TA per 10 students", desc: "Two TAs circulate during sprints so the instructor never stops." },
                { emoji: "🚀", title: "Deployed URL by Sunday", desc: "Every student walks out with a portfolio piece." },
                { emoji: "🤝", title: "28 hiring partners", desc: "Top graduates routed to GCCs in Kochi, Hyderabad, Bangalore." },
              ]
              : [
                { emoji: "🎯", title: "Learn at your own pace", desc: "Access materials forever—no deadlines or pressure." },
                { emoji: "👨‍💻", title: "Hands-on projects", desc: "Build real projects with starter code and templates." },
                { emoji: "📚", title: "Expert instructors", desc: "Learn from practitioners who've shipped AI in production." },
                { emoji: "🏆", title: "Career support", desc: "Join alumni network and access the job board." },
              ]
            ).map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-background rounded-lg p-6 border border-border"
              >
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="font-melodrama font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="font-satoshi text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Careers() {
  return <CoursesSection />;
}
