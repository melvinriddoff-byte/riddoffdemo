import { motion } from "framer-motion";
import { Factory, Heart, ShoppingBag, Truck } from "lucide-react";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    subtitle: "From local workshops to global factories.",
    desc: "Grow your operations with a system that adapts while maintaining your production standards. Features include shop floor control, BOM management, and quality assurance.",
  },
  {
    icon: Heart,
    title: "Non-profits",
    subtitle: "Fund tracking, transparency, and compliance.",
    desc: "Secure donor trust by showing exactly how their contributions are driving real-world change along with ironclad financial governance and grant management.",
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    subtitle: "Backend for multi-channel empires.",
    desc: "Grow your business from a single shop to a multi-channel empire with a backend that manages your entire retail operations, including POS and e-commerce sync.",
  },
  {
    icon: Truck,
    title: "Distribution",
    subtitle: "Automated network fulfillment.",
    desc: "Serve more customers by automating distribution across your network, allowing you to enter new markets with zero friction. Optimized for logistics and wholesale.",
  },
];

const Industries = () => (
  <div>
    {/* Hero */}
    <section className="py-24 md:py-32 px-6 bg-gradient-hero">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-melodrama text-4xl md:text-6xl font-extrabold text-foreground mb-6">Industries</h1>
          <p className="font-satoshi text-lg text-muted-foreground">
            Where our software runs businesses, not just interfaces.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Industry cards */}
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {industries.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-elevated transition-all duration-300"
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
  </div>
);

export default Industries;
