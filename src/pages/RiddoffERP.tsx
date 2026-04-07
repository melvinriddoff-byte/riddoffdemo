import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingCart, Users, ClipboardList, Package, Factory, Calculator, BarChart3, UserCheck, ListTodo } from "lucide-react";
import { SalesDashboardMockup } from "@/pages/erp/Sales";
import DashboardFrame from "@/components/DashboardFrame";

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
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-hero">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-primary/10 text-primary px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Rabos ERP
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-extrabold text-foreground mb-4 sm:mb-6">
              Rabos ERP
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
              Experience the future of enterprise management with our comprehensive and intuitive dashboard.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="py-8 sm:py-16 px-3 sm:px-6 -mt-4 sm:-mt-8">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <DashboardFrame naturalWidth={900}>
              <SalesDashboardMockup />
            </DashboardFrame>
          </motion.div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <span className="text-xs sm:text-sm font-medium text-primary mb-2 block">Modules</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              Comprehensive ERP Solutions
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-2">
              Everything you need to run your business efficiently, all in one integrated platform.
            </p>
          </motion.div>

          {/* Module cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
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
                  className="block bg-card rounded-2xl p-5 sm:p-6 shadow-card border border-border hover:shadow-elevated transition-shadow duration-300 cursor-pointer group h-full"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                    <m.icon className="text-primary" size={20} />
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-foreground mb-1 sm:mb-2">{m.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
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
