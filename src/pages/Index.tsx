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
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #1a2f5a 0%, #0d1630 60%, #0a1228 100%)",
          paddingTop: "clamp(80px, 14vw, 160px)",
          paddingBottom: "clamp(64px, 10vw, 120px)",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        }}
      >
        <div className="container mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 border border-white/20 bg-white/10 text-white/80 px-4 py-1.5 rounded-full text-xs sm:text-sm font-satoshi font-medium mb-6 sm:mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
              Introducing Rabos ERP
            </span>
            <h1
              className="text-white mb-6 sm:mb-8"
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontWeight: 400,
                fontSize: "clamp(48px, 9vw, 120px)",
                lineHeight: 0.92,
                letterSpacing: "-0.02em",
              }}
            >
              The{" "}
              <span style={{ fontStyle: "italic" }}>future</span>
              {" "}of a<br />
              <span style={{ color: "rgba(255,255,255,0.45)" }}>clutter-free</span>{" "}
              company.
            </h1>
            <p className="font-satoshi text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
              Give every employee an intelligent agent that audits their SaaS, cancels the dead ones, and quietly reports back — so your team keeps what matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <Button
                size="lg"
                asChild
                className="bg-white text-[#0d1630] hover:bg-white/90 font-semibold rounded-full px-7 shadow-lg"
              >
                <Link to="/contact">
                  Start a free trial <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
              <Button
                size="lg"
                asChild
                className="bg-[#1a2f5a] border border-white/25 text-white hover:bg-white/10 rounded-full px-7"
              >
                <Link to="/contact">Book a demo</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Slider */}
      <section className="py-10 sm:py-20 px-3 sm:px-6">
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
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-8">
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
                className="text-center p-3 sm:p-6"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <f.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-melodrama font-semibold text-foreground text-sm sm:text-base mb-1 sm:mb-2">{f.title}</h3>
                <p className="font-satoshi text-xs sm:text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA */}
      <section className="py-14 sm:py-24 px-4 sm:px-6 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-melodrama text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 px-2">
              Ready to transform your operations?
            </h2>
            <p className="font-satoshi text-primary-foreground/80 max-w-lg mx-auto mb-6 sm:mb-8 text-sm sm:text-base px-4">
              Join thousands of companies already using Riddoff to streamline their business.
            </p>
            <div className="flex justify-center px-4">
              <Button variant="heroOutline" size="lg" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/contact">Get Started Today</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
