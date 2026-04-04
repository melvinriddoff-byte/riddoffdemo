import { motion } from "framer-motion";
import { Workflow, BrainCircuit, CloudCog, Layers } from "lucide-react";

const solutions = [
  { icon: Workflow, title: "Process Automation", desc: "Eliminate manual workflows with intelligent automation that scales with your business. From invoice processing to order fulfillment." },
  { icon: BrainCircuit, title: "AI-Powered Insights", desc: "Leverage machine learning to predict demand, optimize inventory, and uncover revenue opportunities hidden in your data." },
  { icon: CloudCog, title: "Cloud Integration", desc: "Connect your existing tools seamlessly. Native integrations with 200+ platforms and a robust API for custom connections." },
  { icon: Layers, title: "Multi-Entity Management", desc: "Manage multiple business units, locations, and currencies from a single unified platform without complexity." },
];

const Solutions = () => (
  <div>
    <section className="py-24 md:py-32 px-6 bg-gradient-hero">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-melodrama text-4xl md:text-6xl font-extrabold text-foreground mb-6">Solutions</h1>
          <p className="font-satoshi text-lg text-muted-foreground">Tailored approaches to your most complex operational challenges.</p>
        </motion.div>
      </div>
    </section>

    <section className="py-20 px-6">
      <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {solutions.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-elevated transition-all duration-300"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
              <s.icon className="text-primary" size={28} />
            </div>
            <h3 className="font-melodrama text-xl font-bold text-foreground mb-3">{s.title}</h3>
            <p className="font-satoshi text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default Solutions;
