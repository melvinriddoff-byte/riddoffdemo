import { motion } from "framer-motion";
import { Users, Lightbulb, BookOpen } from "lucide-react";

const sections = [
  {
    icon: BookOpen,
    title: "About Riddoff",
    subtitle: "Who we are and what we do.",
    desc: "Riddoff builds operational software for businesses that need more than a pretty interface. We focus on systems that work — reliably, at scale, and without the overhead of legacy enterprise tools.",
  },
  {
    icon: Lightbulb,
    title: "Philosophy",
    subtitle: "How we think about building software.",
    desc: "We believe software should serve the people using it, not the other way around. Every product we ship is designed around real workflows, real constraints, and real teams — not hypothetical use cases.",
  },
  {
    icon: Users,
    title: "Leadership",
    subtitle: "The team behind Riddoff.",
    desc: "Our team brings experience across enterprise operations, logistics, and product engineering. We've built systems used by thousands of people daily and carry that responsibility into everything we create.",
  },
];

const Company = () => (
  <div>
    {/* Hero */}
    <section className="py-24 md:py-32 px-6 bg-gradient-hero">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-melodrama text-4xl md:text-6xl font-extrabold text-foreground mb-6">About</h1>
          <p className="font-satoshi text-lg text-muted-foreground">
            Why Riddoff exists and how we think about building technology.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Sections */}
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        {sections.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="bg-card rounded-2xl p-8 shadow-card border border-border"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
              <item.icon className="text-primary" size={28} />
            </div>
            <h3 className="font-melodrama text-xl font-bold text-foreground mb-1">{item.title}</h3>
            <p className="font-satoshi text-sm font-medium text-primary mb-3">{item.subtitle}</p>
            <p className="font-satoshi text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Quote */}
    <section className="py-20 px-6" style={{ backgroundColor: "#013a63" }}>
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-melodrama text-2xl md:text-4xl font-bold text-white leading-snug mb-4">
            "We build systems that run businesses."
          </p>
          <p className="font-satoshi text-white/70 leading-relaxed max-w-xl mx-auto">
            Not interfaces for presentations. Not demos for pitches. Real software that teams rely on every day to operate, make decisions, and grow.
          </p>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Company;
