import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Box, Truck, Dumbbell, Building2 } from "lucide-react";

const products = [
  {
    num: "01",
    title: "Riddoff ERP",
    subtitle: "Enterprise resource planning built for operational clarity.",
    desc: "A modular ERP system designed for businesses that need control over inventory, finance, procurement, and operations — without the complexity of legacy systems.",
    icon: Box,
    link: "/products/riddoff-erp",
    linkText: "Let's get in Touch",
  },
  {
    num: "02",
    title: "FleetX",
    subtitle: "Fleet management for modern logistics.",
    desc: "Real-time tracking, route optimization, driver management, and maintenance scheduling — unified in a single platform built for scale.",
    icon: Truck,
    link: "/contact",
    linkText: "Learn More",
  },
  {
    num: "03",
    title: "GRYNDUP",
    subtitle: "Fitness technology that powers gyms and trainers.",
    desc: "Membership management, scheduling, payments, and member engagement — designed for fitness businesses that want to grow without friction.",
    icon: Dumbbell,
    link: "/contact",
    linkText: "Learn More",
  },
  {
    num: "04",
    title: "Enterprise Systems",
    subtitle: "Custom platforms for complex operations.",
    desc: "Purpose-built software for organizations with unique operational requirements. Multi-tenant, scalable, and designed for long-term maintainability.",
    icon: Building2,
    link: "/contact",
    linkText: "Learn More",
  },
];

const Products = () => {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-hero">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-melodrama text-3xl sm:text-4xl md:text-6xl font-extrabold text-foreground mb-4 sm:mb-6">
              Products
            </h1>
            <p className="font-satoshi text-base sm:text-lg text-muted-foreground leading-relaxed">
              Operational platforms designed to handle real-world complexity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product cards */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl space-y-8 md:space-y-16">
          {products.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card rounded-2xl p-5 md:p-12 shadow-card border border-border hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="flex items-start gap-6">
                <span className="text-5xl font-melodrama font-extrabold text-primary/20">
                  {p.num}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <p.icon className="text-primary" size={20} />
                    </div>
                    <h2 className="font-melodrama text-2xl md:text-3xl font-bold text-foreground">
                      {p.title}
                    </h2>
                  </div>
                  <p className="font-satoshi font-medium text-foreground/80 mb-3">{p.subtitle}</p>
                  <p className="font-satoshi text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
                  <Link
                    to={p.link}
                    className="font-satoshi inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
                  >
                    {p.linkText} <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
