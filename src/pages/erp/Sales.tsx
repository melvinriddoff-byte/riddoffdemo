import { motion } from "framer-motion";
import { ShoppingCart, FileText, TrendingUp, Tag, BarChart2, Globe, Play, Clock, BarChart3, Calendar, ClipboardCheck, ScanBarcode, Eye, RefreshCw, Search, ChevronDown } from "lucide-react";

const features = [
  { icon: ShoppingCart, title: "Sessions", desc: "Open and close register sessions, track daily cash flow, and reconcile drawer totals at shift end." },
  { icon: FileText, title: "Billing", desc: "Generate invoices, manage payment terms, apply taxes, and track outstanding receivables in one place." },
  { icon: TrendingUp, title: "Sales Orders", desc: "Capture and confirm customer orders, allocate stock, and trigger fulfilment — all from a single order entry." },
  { icon: Tag, title: "Quotation Management", desc: "Build and send branded price quotes, set validity windows, and convert accepted quotes directly into sales orders." },
  { icon: BarChart2, title: "Returns", desc: "Process customer return requests, issue credit notes or refunds, and automatically restock returned items." },
  { icon: Globe, title: "Deliveries", desc: "Schedule outbound shipments, print picking lists and packing slips, and confirm delivery with proof of dispatch." },
];

const sessionRows = [
  { id: "SES-2026-00008", date: "2/21/2026", customer: "ZAKARIA-PORKULAM", phone: "9744385270", salesman: "R", company: "RIDDOFF TECHNOLOGIES", duration: "18m", scanned: 0, added: 0, outcome: "Not Interested", outcomeColor: "bg-muted text-muted-foreground" },
  { id: "SES-2026-00008", date: "2/21/2026", customer: "ZAKARIA-PORKULAM", phone: "9744385270", salesman: "R", company: "RIDDOFF TECHNOLOGIES", duration: "18m", scanned: 0, added: 0, outcome: "Active", outcomeColor: "bg-green-100 text-green-700" },
  { id: "SES-2026-00008", date: "2/21/2026", customer: "ZAKARIA-PORKULAM", phone: "9744385270", salesman: "R", company: "RIDDOFF TECHNOLOGIES", duration: "18m", scanned: 0, added: 0, outcome: "Quoted", outcomeColor: "bg-blue-100 text-blue-700" },
];

const sidebarItems = [
  { label: "Overview" },
  { label: "Sessions", active: true },
  { label: "Billing" },
  { label: "Sales Orders" },
  { label: "Customers" },
  { label: "Quotations" },
  { label: "Returns" },
  { label: "Price Lists" },
  { label: "Deliveries" },
];

const SalesDashboardMockup = () => (
  <div className="bg-white rounded-2xl shadow-elevated border border-border overflow-hidden text-[13px]">
    {/* Top bar */}
    <div className="flex items-center justify-between px-6 py-3 border-b border-gray-100">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xs">A</div>
        <div>
          <p className="font-bold text-foreground text-xs leading-none">AL RAMS</p>
          <p className="text-[10px] text-muted-foreground leading-none mt-0.5">ERP SYSTEM</p>
        </div>
        <div className="ml-4">
          <p className="font-bold text-foreground">Sales Sessions</p>
          <p className="text-[11px] text-muted-foreground">Track customer visits and sales performance</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-green-200 bg-green-50 text-green-700 text-xs font-medium">
          <Play size={11} /> Active Sessions <span className="bg-green-600 text-white rounded-full px-1.5 text-[10px]">1</span>
        </button>
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 text-xs font-medium">
          <Clock size={11} /> Session History
        </button>
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 text-xs font-medium">
          <BarChart3 size={11} /> Analytics
        </button>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 text-xs ml-2">
          <Calendar size={11} /> 1 – 28 Feb
        </div>
        <Search size={15} className="text-gray-400 ml-1" />
      </div>
    </div>

    <div className="flex">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-48 border-r border-gray-100 py-3">
        <p className="text-[10px] font-semibold text-muted-foreground px-4 mb-2 tracking-widest">OPERATIONS</p>
        <div className="px-3 py-2 flex items-center gap-2 text-muted-foreground hover:bg-gray-50 cursor-pointer rounded-lg mx-1">
          <BarChart3 size={14} /> Dashboard
        </div>
        {/* Sales expanded */}
        <div className="mx-1">
          <div className="px-3 py-2 flex items-center justify-between bg-primary/10 rounded-lg cursor-pointer">
            <div className="flex items-center gap-2 text-primary font-semibold">
              <ShoppingCart size={14} /> Sales
            </div>
            <ChevronDown size={12} className="text-primary" />
          </div>
          <div className="ml-4 mt-1 flex flex-col gap-0.5">
            {sidebarItems.map((item) => (
              <div
                key={item.label}
                className={`px-3 py-1.5 flex items-center gap-2 rounded-lg cursor-pointer text-[12px] ${item.active ? "bg-primary text-white font-medium" : "text-muted-foreground hover:bg-gray-50"}`}
              >
                <ShoppingCart size={11} className="opacity-60" /> {item.label}
              </div>
            ))}
          </div>
        </div>
        <div className="px-3 py-2 flex items-center gap-2 text-muted-foreground hover:bg-gray-50 cursor-pointer rounded-lg mx-1 mt-1">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="7" r="4" /><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" /><circle cx="17" cy="11" r="3" /><path d="M21 21v-1a3 3 0 0 0-3-3" /></svg> CRM
        </div>
        <div className="px-3 py-2 flex items-center gap-2 text-muted-foreground hover:bg-gray-50 cursor-pointer rounded-lg mx-1">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13" /><path d="m16 8 2 2 4-4" /><path d="M21 19H3" /><path d="M7 19v-4" /><path d="M11 19v-4" /><path d="M15 19v-4" /></svg> Procurement
        </div>
        <div className="px-3 py-2 flex items-center gap-2 text-muted-foreground hover:bg-gray-50 cursor-pointer rounded-lg mx-1">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9h18" /><path d="M3 15h18" /><rect x="3" y="3" width="18" height="18" rx="2" /></svg> Inventory
        </div>
        <div className="px-3 py-2 flex items-center gap-2 text-muted-foreground hover:bg-gray-50 cursor-pointer rounded-lg mx-1">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14" /><path d="M4.93 4.93a10 10 0 0 0 0 14.14" /></svg> Manufacturing
        </div>
        {/* User footer */}
        <div className="mt-auto px-3 pt-4 flex items-center gap-2 border-t border-gray-100 mx-1">
          <div className="w-7 h-7 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center font-bold">M</div>
          <div>
            <p className="text-[11px] font-semibold text-foreground">Melvin</p>
            <p className="text-[10px] text-muted-foreground">00000</p>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 p-5 bg-gray-50/50">
        {/* Stat cards */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 mb-5">
          {[
            { label: "Active Sessions", val: "0", sub: "Currently in progress", icon: Play, iconBg: "bg-green-100", iconColor: "text-green-600" },
            { label: "Today's Sessions", val: "0", sub: "Started Today", icon: Calendar, iconBg: "bg-blue-100", iconColor: "text-blue-600" },
            { label: "Converted Today", val: "0", sub: "Successful Conversions", icon: ClipboardCheck, iconBg: "bg-primary/10", iconColor: "text-primary" },
            { label: "Product Scanned", val: "0", sub: "In Active Sessions", icon: ScanBarcode, iconBg: "bg-gray-100", iconColor: "text-gray-500" },
          ].map((card) => (
            <div key={card.label} className="bg-white rounded-xl p-4 border border-gray-100 flex items-start justify-between">
              <div>
                <p className="text-xs text-muted-foreground mb-1">{card.label}</p>
                <p className="text-2xl font-bold text-foreground">{card.val}</p>
                <p className="text-[11px] text-muted-foreground mt-1">{card.sub}</p>
              </div>
              <div className={`w-9 h-9 rounded-xl ${card.iconBg} flex items-center justify-center`}>
                <card.icon size={16} className={card.iconColor} />
              </div>
            </div>
          ))}
        </div>

        {/* Session History table */}
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
            <p className="font-bold text-foreground">Session History</p>
            <RefreshCw size={14} className="text-muted-foreground" />
          </div>
          <div className="px-5 py-3 flex items-center gap-3 border-b border-gray-50">
            <div className="flex-1 flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 text-xs text-muted-foreground">
              <Search size={12} /> Search by customer or salesman...
            </div>
            <button className="flex items-center gap-1 px-3 py-2 rounded-lg border border-gray-200 text-xs text-muted-foreground">All Status <ChevronDown size={11} /></button>
            <button className="flex items-center gap-1 px-3 py-2 rounded-lg border border-gray-200 text-xs text-muted-foreground">All Outcomes <ChevronDown size={11} /></button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-green-50/60">
                  {["SESSION", "CUSTOMER", "SALESMAN", "DURATION", "PRODUCTS", "OUTCOME", "ACTIONS"].map((col) => (
                    <th key={col} className="text-left px-4 py-2.5 text-[11px] font-semibold text-muted-foreground tracking-wide">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sessionRows.map((row, i) => (
                  <tr key={i} className="border-t border-gray-50 hover:bg-gray-50/50">
                    <td className="px-4 py-3">
                      <p className="font-medium text-foreground text-xs">{row.id}</p>
                      <p className="text-[11px] text-muted-foreground">{row.date}</p>
                    </td>
                    <td className="px-4 py-3">
                      <p className="font-medium text-foreground text-xs">{row.customer}</p>
                      <p className="text-[11px] text-muted-foreground">{row.phone}</p>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-primary text-white text-[11px] flex items-center justify-center font-bold">{row.salesman}</div>
                        <p className="text-xs text-foreground leading-tight">{row.company}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-xs text-foreground">{row.duration}</td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">{row.scanned} Scanned · {row.added} added</td>
                    <td className="px-4 py-3">
                      <span className={`px-2.5 py-1 rounded-full text-[11px] font-medium ${row.outcomeColor}`}>{row.outcome}</span>
                    </td>
                    <td className="px-4 py-3">
                      <Eye size={14} className="text-muted-foreground cursor-pointer hover:text-foreground" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { SalesDashboardMockup };


const Sales = () => (
  <div>
    <section className="py-24 md:py-32 px-6 bg-gradient-hero">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-satoshi font-medium mb-6">Rabos ERP — Module</span>
          <h1 className="font-melodrama text-4xl md:text-6xl font-extrabold text-foreground mb-6">Sales</h1>
          <p className="font-satoshi text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From first quote to final payment — manage your entire sales cycle in one place and close deals faster with less manual work.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Dashboard Mockup */}
    <section className="py-10 px-6 -mt-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="overflow-x-auto">
            <div className="min-w-[700px]">
              <SalesDashboardMockup />
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Workflow Section */}
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50/0 to-gray-50/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-white text-sm font-satoshi font-medium mb-4 text-muted-foreground shadow-sm">
              Process
            </span>
            <h2 className="font-melodrama text-3xl md:text-5xl font-bold text-foreground mb-5">Sales Workflow</h2>
            <p className="font-satoshi text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured and automated pipeline designed to turn prospects into closed deals effortlessly.
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connecting line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0 -translate-x-1/2" />

          <div className="space-y-8 md:space-y-0">
            {features.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="relative flex flex-col md:flex-row items-center md:h-64"
                >
                  {/* Center Node */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full border-[6px] border-gray-50 shadow-sm items-center justify-center z-10">
                    <step.icon size={24} className="text-primary" />
                  </div>

                  {/* Left Side Content */}
                  <div className={`flex-1 w-full md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:hidden'}`}>
                    <div className="bg-card p-8 rounded-3xl shadow-card border border-border hover:shadow-elevated transition-all duration-300 relative z-20">
                      <div className="md:hidden w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                        <step.icon className="text-primary" size={24} />
                      </div>
                      <div className={`flex items-center gap-3 mb-4 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        {!isEven && <span className="text-sm font-bold text-primary/50">0{i + 1}</span>}
                        <h3 className="font-melodrama text-2xl font-bold text-foreground">{step.title}</h3>
                        {isEven && <span className="text-sm font-bold text-primary/50">0{i + 1}</span>}
                      </div>
                      <p className="font-satoshi text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Right Side Content */}
                  <div className={`flex-1 w-full md:w-1/2 ${!isEven ? 'md:pl-16 text-left' : 'md:hidden'}`}>
                    <div className="bg-card p-8 rounded-3xl shadow-card border border-border hover:shadow-elevated transition-all duration-300 relative z-20">
                      <div className="md:hidden w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                        <step.icon className="text-primary" size={24} />
                      </div>
                      <div className={`flex items-center gap-3 mb-4`}>
                        <span className="text-sm font-bold text-primary/50">0{i + 1}</span>
                        <h3 className="font-melodrama text-2xl font-bold text-foreground">{step.title}</h3>
                      </div>
                      <p className="font-satoshi text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Sales;
