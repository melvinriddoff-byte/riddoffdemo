import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import DashboardSlider from "@/components/DashboardSlider";
import Testimonials from "@/components/Testimonials";
import { ArrowRight, Zap, Shield, BarChart3, Users } from "lucide-react";
const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 md:py-36 px-6 overflow-hidden bg-gradient-hero">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-satoshi font-medium mb-6">
              Introducing Rabos ERP
            </span>
            <h1 className="font-melodrama text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight mb-6">
              The Future of Smarter{" "}
              <span className="text-gradient">RABOS</span>
            </h1>
            <p className="font-satoshi text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Automate your busywork with intelligent agents that learn, adapt, and execute—so your team can focus on what matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Start a free trial <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/contact">Book a demo</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Slider */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-melodrama text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Your Operations, One Dashboard
            </h2>
            <p className="font-satoshi text-center text-muted-foreground mb-12 max-w-xl mx-auto">
              Seamlessly manage Sales, CRM, and Inventory from a unified command center.
            </p>
            <DashboardSlider />
          </motion.div>
        </div>
      </section>

      {/* Features row */}
      <section className="py-20 px-6 bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { icon: Zap, title: "Intelligent Automation", desc: "AI-driven workflows that adapt to your business processes." },
              { icon: Shield, title: "Enterprise Security", desc: "SOC2 compliant with end-to-end encryption." },
              { icon: BarChart3, title: "Real-time Analytics", desc: "Live dashboards for instant decision-making." },
              { icon: Users, title: "Team Collaboration", desc: "Built-in tools for seamless team coordination." },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center p-6"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <f.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-melodrama font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="font-satoshi text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-melodrama text-3xl md:text-5xl font-bold mb-6">
              Ready to transform your operations?
            </h2>
            <p className="font-satoshi text-primary-foreground/80 max-w-lg mx-auto mb-8">
              Join thousands of companies already using Riddoff to streamline their business.
            </p>
            <Button variant="heroOutline" size="lg" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
