import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingCart, Users, ClipboardList, Package, Factory, Calculator, BarChart3, UserCheck, ListTodo } from "lucide-react";
import { SalesDashboardMockup } from "@/pages/erp/Sales";

const modules = [
  { icon: ShoppingCart, title: "Sales", desc: "Manage orders, invoices, and customer transactions with ease.", href: "/products/riddoff-erp/sales" },
  { icon: Users, title: "CRM", desc: "Build stronger relationships with integrated customer data.", href: "/products/riddoff-erp/crm" },
  { icon: ClipboardList, title: "Procurement", desc: "Streamline your purchasing process and vendor management.", href: "/products/riddoff-erp/procurement" },
  { icon: Package, title: "Inventory", desc: "Real-time tracking of stock levels and warehouse operations.", href: "/products/riddoff-erp/inventory" },
  { icon: Factory, title: "Manufacturing", desc: "Optimize production planning and quality control.", href: "/products/riddoff-erp/manufacturing" },
  { icon: Calculator, title: "Accounts", desc: "Comprehensive financial management and bookkeeping.", href: "/products/riddoff-erp/accounts" },
  { icon: BarChart3, title: "Reports", desc: "Data-driven insights with customisable reporting tools.", href: "/products/riddoff-erp/reports" },
  { icon: UserCheck, title: "HR & Payroll", desc: "Simplified employee management and automated payroll.", href: "/products/riddoff-erp/hr-payroll" },
  { icon: ListTodo, title: "Task", desc: "Efficient project management and personalised task tracking.", href: "/products/riddoff-erp/task" },
];


const RiddoffERP = () => {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 md:py-32 px-6 bg-gradient-hero">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Rabos ERP
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold text-foreground mb-6">
              Rabos ERP
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Experience the future of enterprise management with our comprehensive and intuitive dashboard.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="py-16 px-6 -mt-8">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SalesDashboardMockup />
          </motion.div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-primary mb-2 block">Modules</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Comprehensive ERP Solutions
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Everything you need to run your business efficiently, all in one integrated platform.
            </p>
          </motion.div>

          {/* Stacked cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {modules.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 30, rotate: -1 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Link
                  to={m.href}
                  className="block bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-elevated transition-shadow duration-300 cursor-pointer group h-full"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <m.icon className="text-primary" size={22} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{m.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RiddoffERP;
