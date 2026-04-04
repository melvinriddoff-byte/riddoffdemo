import { motion } from "framer-motion";
import { Factory, Layers, Wrench, ShieldCheck, Calendar, Gauge, ChevronDown, Search, Bell, Settings } from "lucide-react";
import { AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const features = [
  { icon: Factory, title: "Production Planning", desc: "Schedule production runs based on demand forecasts, available materials, and machine capacity. Minimize idle time and maximize output efficiency." },
  { icon: Layers, title: "Bill of Materials", desc: "Define multi-level BOMs for every finished product. Track component consumption, manage revisions, and ensure accurate costing through the production process." },
  { icon: Wrench, title: "Work Orders", desc: "Create, assign, and track work orders from the shop floor. Monitor progress in real time, record labour hours, and update inventory automatically on completion." },
  { icon: ShieldCheck, title: "Quality Control", desc: "Build quality checkpoints into every production stage. Define inspection criteria, log results, and manage non-conformances with root cause analysis." },
  { icon: Calendar, title: "Resource Planning", desc: "Balance machine, labour, and material resources across production schedules. Identify constraints early and reschedule to prevent bottlenecks." },
  { icon: Gauge, title: "Shop Floor Management", desc: "Give operators a real-time view of their work queue. Record production output, downtime, and material usage directly from the shop floor interface." },
];

const cashFlowData = [
  { month: "Jan", inflow: 40, outflow: 5 }, { month: "Feb", inflow: 180, outflow: 8 },
  { month: "Mar", inflow: 320, outflow: 10 }, { month: "Apr", inflow: 60, outflow: 6 },
  { month: "May", inflow: 20, outflow: 5 }, { month: "Jun", inflow: 80, outflow: 0 },
  { month: "Jul", inflow: 110, outflow: 0 }, { month: "Sep", inflow: 150, outflow: 0 },
  { month: "Nov", inflow: 200, outflow: 0 }, { month: "Dec", inflow: 240, outflow: 0 },
];

const agingData = [
  { label: "1-30", value: 14000, color: "#166534" },
  { label: "31-60", value: 10000, color: "#4ade80" },
  { label: "61-90", value: 5000, color: "#fbbf24" },
];

const recentLineData = [
  { month: "Jan", v: 50 }, { month: "Feb", v: 52 }, { month: "Mar", v: 55 },
  { month: "Apr", v: 53 }, { month: "May", v: 60 },
];

const pieData = [
  { name: "Raw Materials", value: 35, color: "#3b82f6" },
  { name: "Labor", value: 28, color: "#166534" },
  { name: "Operations", value: 22, color: "#fbbf24" },
  { name: "Marketing", value: 10, color: "#a3a354" },
  { name: "Others", value: 5, color: "#6b7280" },
];

const sidebarSections = [
  { section: "OPERATIONS", items: [
    { label: "Dashboard" }, { label: "Sales" }, { label: "CRM" },
    { label: "Procurement" }, { label: "Inventory" }, { label: "Manufacturing" },
  ]},
  { section: "FINANCE & ACCOUNTING", items: [
    { label: "Overview", active: true }, { label: "Chart of Accounts" },
    { label: "Cash/Bank" }, { label: "Ledgers" }, { label: "Payments" },
    { label: "Receivables" }, { label: "Payables" }, { label: "Credit" }, { label: "Budgets" },
  ]},
];

const FinanceDashboardMockup = () => (
  <div className="bg-white rounded-2xl shadow-elevated border border-border overflow-hidden text-[13px]">
    {/* Top bar */}
    <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0">A</div>
        <div>
          <p className="font-bold text-foreground text-xs leading-none">AL RAMS</p>
          <p className="text-[10px] text-muted-foreground leading-none mt-0.5">ERP SYSTEM</p>
        </div>
        <div className="ml-4">
          <p className="font-bold text-foreground text-base">Finance Overview</p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-gray-400">
        <div className="flex items-center gap-1 bg-green-50 border border-green-200 text-green-700 px-2 py-1 rounded-lg text-[11px] font-medium">
          <span className="w-2 h-2 rounded-sm bg-green-500 inline-block" /> 3
        </div>
        <Search size={14} /><Bell size={14} /><Settings size={14} />
      </div>
    </div>

    <div className="flex">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-48 border-r border-gray-100 py-3 flex-shrink-0">
        {sidebarSections.map((sec) => (
          <div key={sec.section}>
            <p className="text-[9px] font-semibold text-muted-foreground px-4 mb-1.5 mt-3 tracking-widest">{sec.section}</p>
            {sec.items.map((item) => (
              <div
                key={item.label}
                className={`px-3 py-1.5 mx-1 flex items-center justify-between rounded-lg cursor-pointer text-[12px] ${
                  item.active ? "bg-primary text-white font-semibold" : "text-muted-foreground hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-2">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-60 flex-shrink-0"><circle cx="12" cy="12" r="10"/></svg>
                  {item.label}
                </div>
                {!item.active && <ChevronDown size={10} className="opacity-40" />}
              </div>
            ))}
          </div>
        ))}
        <div className="mt-auto px-3 pt-3 flex items-center gap-2 border-t border-gray-100 mx-1">
          <div className="w-7 h-7 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center font-bold flex-shrink-0">M</div>
          <div>
            <p className="text-[11px] font-semibold text-foreground leading-none">Melvin</p>
            <p className="text-[9px] text-muted-foreground leading-none mt-0.5">00000</p>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 p-4 bg-gray-50/30 overflow-hidden">
        {/* Stat cards */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          {[
            { label: "Revenue (YTD)", sub: "Total Revenue", val: "INR 355K", footer: "vs last year", footerVal: "0%", iconBg: "bg-green-50", iconColor: "#166534", badge: null },
            { label: "Receivables", sub: "Outstanding", val: "INR 32K", footer: "Overdue", footerVal: "8K", iconBg: "bg-amber-50", iconColor: "#d97706", badge: "bg-amber-100 text-amber-700" },
            { label: "Payables", sub: "Accounts Payable", val: "INR 27K", footer: "Due Soon", footerVal: "8K", iconBg: "bg-red-50", iconColor: "#ef4444", badge: "bg-red-100 text-red-600" },
            { label: "Cash Balance", sub: "This month", val: "INR 323K", footer: "This month", footerVal: "8.3%", iconBg: "bg-blue-50", iconColor: "#3b82f6", badge: null },
          ].map((card) => (
            <div key={card.label} className="bg-white rounded-xl border border-gray-100 p-3">
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-7 h-7 rounded-lg ${card.iconBg} flex items-center justify-center flex-shrink-0`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={card.iconColor} strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                </div>
                <p className="text-[11px] font-semibold text-foreground leading-tight">{card.label}</p>
              </div>
              <p className="text-[10px] text-muted-foreground mb-0.5">{card.sub}</p>
              <p className="text-base font-bold text-foreground">{card.val}</p>
              <div className="flex items-center justify-between mt-1.5 border-t border-gray-50 pt-1.5">
                <p className="text-[10px] text-muted-foreground">{card.footer}</p>
                {card.badge ? (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${card.badge}`}>{card.footerVal}</span>
                ) : (
                  <span className="text-[10px] font-semibold text-foreground">{card.footerVal}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Charts row 1 */}
        <div className="grid grid-cols-3 gap-3 mb-3">
          {/* Cash Flow Trend — 2 cols */}
          <div className="col-span-2 bg-white rounded-xl border border-gray-100 p-4">
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="text-xs font-bold text-foreground">Cash Flow Trend</p>
                <p className="text-[11px] text-muted-foreground">Inflow vs Outflow</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                  <div className="w-4 h-1.5 rounded bg-green-400" /> Inflow
                </div>
                <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                  <div className="w-4 h-1.5 rounded border border-red-400 bg-red-50" /> Outflow
                </div>
                <span className="text-[10px] bg-green-50 border border-green-200 text-green-700 px-2 py-0.5 rounded-full">Last 6 Months</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={140}>
              <AreaChart data={cashFlowData} margin={{ top: 5, right: 0, left: -25, bottom: 0 }}>
                <defs>
                  <linearGradient id="inflowGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#166534" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#166534" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" tick={{ fontSize: 9, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 9, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb" }} />
                <Area type="monotone" dataKey="inflow" stroke="#166534" strokeWidth={2} fill="url(#inflowGrad)" dot={false} />
                <Area type="monotone" dataKey="outflow" stroke="#ef4444" strokeWidth={1.5} fill="rgba(239,68,68,0.05)" dot={{ r: 3, fill: "#ef4444" }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Expense Breakdown */}
          <div className="bg-white rounded-xl border border-gray-100 p-4">
            <p className="text-xs font-bold text-foreground mb-0.5">Expense Breakdown</p>
            <p className="text-[11px] text-muted-foreground mb-2">By category</p>
            <div className="flex items-center gap-2">
              <ResponsiveContainer width={90} height={90}>
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" innerRadius={28} outerRadius={44} dataKey="value" strokeWidth={0}>
                    {pieData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-col gap-1">
                {pieData.map((item) => (
                  <div key={item.name} className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: item.color }} />
                    <span className="text-[10px] text-muted-foreground">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Charts row 2 */}
        <div className="grid grid-cols-4 gap-3">
          {/* Gross Margin */}
          <div className="bg-white rounded-xl border border-gray-100 p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-purple-50 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"><line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>
              </div>
              <p className="text-xs font-bold text-foreground">Gross Margin</p>
            </div>
            <div className="flex items-center justify-center py-1">
              <div className="relative w-16 h-16">
                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="#7c3aed" strokeWidth="3"
                    strokeDasharray={`${35 * 1} ${100 - 35}`} strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-foreground">35%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Net Profit */}
          <div className="bg-white rounded-xl border border-gray-100 p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-green-50 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#166534" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
              </div>
              <p className="text-xs font-bold text-foreground">Net Profit</p>
            </div>
            <p className="text-xl font-bold text-foreground">INR 53K</p>
            <p className="text-[11px] text-muted-foreground">YTD</p>
          </div>

          {/* Receivables Aging */}
          <div className="bg-white rounded-xl border border-gray-100 p-3">
            <p className="text-xs font-bold text-foreground mb-0.5">Receivables Aging</p>
            <p className="text-[11px] text-muted-foreground mb-2">By days outstanding</p>
            <ResponsiveContainer width="100%" height={80}>
              <BarChart data={agingData} margin={{ top: 0, right: 0, left: -30, bottom: 0 }} barSize={16}>
                <XAxis dataKey="label" tick={{ fontSize: 9, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 8, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ fontSize: 10, borderRadius: 6 }} />
                {agingData.map((entry, i) => (
                  <Bar key={i} dataKey="value" fill={entry.color} radius={[3, 3, 0, 0]} />
                ))}
                <Bar dataKey="value" radius={[3, 3, 0, 0]}>
                  {agingData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="flex items-center gap-3 mt-1">
              {agingData.map((d) => (
                <div key={d.label} className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-sm" style={{ background: d.color }} />
                  <span className="text-[9px] text-muted-foreground">{d.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white rounded-xl border border-gray-100 p-3">
            <div className="flex items-center justify-between mb-1">
              <div>
                <p className="text-xs font-bold text-foreground">Recent Transactions</p>
                <p className="text-[11px] text-muted-foreground">Latest activity</p>
              </div>
              <span className="text-[11px] text-green-600 font-medium cursor-pointer">View All</span>
            </div>
            <ResponsiveContainer width="100%" height={60}>
              <LineChart data={recentLineData} margin={{ top: 5, right: 0, left: -30, bottom: 0 }}>
                <XAxis dataKey="month" tick={{ fontSize: 9, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 8, fill: "#94a3b8" }} axisLine={false} tickLine={false} domain={[0, 100]} ticks={[0, 50, 100]} />
                <Line type="monotone" dataKey="v" stroke="#166534" strokeWidth={2} dot={{ r: 3, fill: "#166534" }} />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-[11px] text-muted-foreground mt-1">No recent transactions</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ManufacturingModule = () => (
  <div>
    <section className="py-24 md:py-32 px-6 bg-gradient-hero">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-satoshi font-medium mb-6">Rabos ERP — Module</span>
          <h1 className="font-melodrama text-4xl md:text-6xl font-extrabold text-foreground mb-6">Manufacturing</h1>
          <p className="font-satoshi text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Optimize every step of production — from planning and scheduling to quality control and shop floor execution.
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
          <FinanceDashboardMockup />
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
            <h2 className="font-melodrama text-3xl md:text-5xl font-bold text-foreground mb-5">Manufacturing Workflow</h2>
            <p className="font-satoshi text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured and automated pipeline designed to control your production process from planning to completion.
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

export default ManufacturingModule;
