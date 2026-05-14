import { motion } from "framer-motion";
import { Workflow, BrainCircuit, BarChart3, Server } from "lucide-react";

const platforms = [
  {
    num: "01",
    icon: Workflow,
    title: "Automation",
    subtitle: "Workflow orchestration and process automation.",
    desc: "From simple task automation to complex multi-system orchestration. We build automation that replaces manual processes and reduces operational friction.",
  },
  {
    num: "02",
    icon: BrainCircuit,
    title: "AI Systems",
    subtitle: "Intelligent decision engines and AI integration.",
    desc: "Practical AI that solves real business problems — from document processing to predictive analytics. No hype, just systems that work.",
  },
  {
    num: "03",
    icon: BarChart3,
    title: "Analytics",
    subtitle: "Data infrastructure and business intelligence.",
    desc: "Unified data platforms, real-time dashboards, and analytics that inform decisions. Built for organizations that take data seriously.",
  },
  {
    num: "04",
    icon: Server,
    title: "Infrastructure",
    subtitle: "Scalable cloud and application infrastructure.",
    desc: "Multi-tenant SaaS platforms, microservices architecture, and cloud infrastructure designed for reliability and scale.",
  },
];

const Infrastructure = () => (
  <div>
    {/* Hero */}
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-hero">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-melodrama text-3xl sm:text-4xl md:text-6xl font-extrabold text-foreground mb-4 sm:mb-6">Platforms</h1>
          <p className="font-satoshi text-lg text-muted-foreground">
            The systems that power automation, intelligence, and scale.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Platform cards */}
    <section className="py-12 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl space-y-4 md:space-y-8">
        {platforms.map((p, i) => (
          <motion.div
            key={p.num}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl p-5 md:p-10 shadow-card border border-border flex gap-4 md:gap-6 items-start hover:shadow-elevated transition-shadow duration-300"
          >
            <span className="font-melodrama text-4xl font-extrabold text-primary/20 shrink-0 leading-none pt-1">
              {p.num}
            </span>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <p.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-melodrama text-xl font-bold text-foreground">{p.title}</h3>
              </div>
              <p className="font-satoshi text-sm font-medium text-primary mb-2">{p.subtitle}</p>
              <p className="font-satoshi text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default Infrastructure;
