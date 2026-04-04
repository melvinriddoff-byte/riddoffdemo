import { motion } from "framer-motion";
import {
  BarChart3, LayoutDashboard, Download, Clock, Target, PieChart,
  ShoppingCart, Users, Package, Boxes, Cog, DollarSign, ClipboardList,
  Search, Calendar, RefreshCw, ChevronDown, Eye, Filter, Plus,
  Minus, Send, AlertTriangle,
} from "lucide-react";

const steps = [
  {
    icon: LayoutDashboard,
    step: "01",
    title: "Real-time Dashboards",
    desc: "Monitor the metrics that matter most on live, configurable dashboards. Drag and drop widgets to build the view that fits your role and workflow.",
  },
  {
    icon: BarChart3,
    step: "02",
    title: "Custom Reports",
    desc: "Build any report from scratch using a drag-and-drop report builder. Filter by date, entity, category, or any field — without writing a single line of code.",
  },
  {
    icon: Download,
    step: "03",
    title: "Export & Share",
    desc: "Export reports to PDF, Excel, or CSV with one click. Schedule automatic distribution to stakeholders via email on daily, weekly, or monthly cycles.",
  },
  {
    icon: Clock,
    step: "04",
    title: "Scheduled Reports",
    desc: "Define report schedules once and let the system handle delivery. Reports run automatically and land in inboxes before the workday begins.",
  },
  {
    icon: Target,
    step: "05",
    title: "KPI Tracking",
    desc: "Set performance targets for any metric and track progress over time. Surface exceptions and underperforming areas with visual threshold indicators.",
  },
  {
    icon: PieChart,
    step: "06",
    title: "Data Visualization",
    desc: "Present complex data in charts, graphs, heat maps, and trend lines. Make decisions faster with insights that are easy to read and hard to ignore.",
  },
];

const sidebarNav = [
  { label: "Dashboard", icon: BarChart3 },
  { label: "Sales", icon: ShoppingCart },
  { label: "CRM", icon: Users },
  { label: "Procurement", icon: Package },
  { label: "Inventory", icon: Boxes },
  { label: "Manufacturing", icon: Cog },
];

const sidebarFinance = [
  { label: "Accounts", icon: DollarSign },
  { label: "Reports", icon: BarChart3, active: true },
];

const sidebarWorkforce = [
  { label: "HR & Payroll", icon: Users },
  { label: "Task", icon: ClipboardList },
];

const reportRows = [
  { name: "Monthly Sales Summary", type: "Financial", lastRun: "Feb 28, 2026", nextRun: "Mar 31, 2026", status: "Active", statusColor: "bg-green-100 text-green-700" },
  { name: "Inventory Turnover Report", type: "Operations", lastRun: "Feb 15, 2026", nextRun: "—", status: "Manual", statusColor: "bg-gray-100 text-gray-600" },
  { name: "Payroll Summary", type: "HR", lastRun: "Feb 28, 2026", nextRun: "Mar 28, 2026", status: "Active", statusColor: "bg-green-100 text-green-700" },
  { name: "Customer Acquisition", type: "CRM", lastRun: "Feb 10, 2026", nextRun: "—", status: "Draft", statusColor: "bg-amber-100 text-amber-700" },
  { name: "Weekly KPI Overview", type: "Analytics", lastRun: "Mar 1, 2026", nextRun: "Mar 8, 2026", status: "Active", statusColor: "bg-green-100 text-green-700" },
];

export const ReportsDashboardMockup = () => (
  <div className="relative bg-white rounded-2xl shadow-elevated border border-border overflow-hidden text-[13px]">
    {/* Top bar */}
    <div className="flex items-center justify-between px-6 py-3 border-b border-gray-100">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xs">A</div>
        <div>
          <p className="font-bold text-foreground text-xs leading-none">AL RAMS</p>
          <p className="text-[10px] text-muted-foreground leading-none mt-0.5">ERP SYSTEM</p>
        </div>
        <div className="ml-4">
          <p className="font-bold text-foreground">Reports</p>
          <p className="text-[11px] text-muted-foreground">View and manage all your business reports</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-medium">
          <LayoutDashboard size={11} /> Dashboards <span className="bg-primary text-white rounded-full px-1.5 text-[10px]">3</span>
        </button>
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 text-xs font-medium">
          <Clock size={11} /> Scheduled
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
      <div className="hidden md:flex flex-col w-48 border-r border-gray-100 py-3 shrink-0">
        <p className="text-[10px] font-semibold text-muted-foreground px-4 mb-2 tracking-widest">OPERATIONS</p>
        {sidebarNav.map((item) => (
          <div key={item.label} className="px-3 py-2 flex items-center gap-2 text-muted-foreground hover:bg-gray-50 cursor-pointer rounded-lg mx-1">
            <item.icon size={14} /> {item.label}
          </div>
        ))}
        <p className="text-[10px] font-semibold text-muted-foreground px-4 mb-2 mt-3 tracking-widest">FINANCE & ACCOUNTING</p>
        {sidebarFinance.map((item) => (
          <div
            key={item.label}
            className={`px-3 py-2 flex items-center gap-2 cursor-pointer rounded-lg mx-1 ${
              item.active
                ? "bg-primary text-white font-semibold"
                : "text-muted-foreground hover:bg-gray-50"
            }`}
          >
            <item.icon size={14} /> {item.label}
          </div>
        ))}
        <p className="text-[10px] font-semibold text-muted-foreground px-4 mb-2 mt-3 tracking-widest">WORKFORCE</p>
        {sidebarWorkforce.map((item) => (
          <div key={item.label} className="px-3 py-2 flex items-center gap-2 text-muted-foreground hover:bg-gray-50 cursor-pointer rounded-lg mx-1">
            <item.icon size={14} /> {item.label}
          </div>
        ))}
        {/* User */}
        <div className="mt-auto pt-4 px-3 flex items-center gap-2 border-t border-gray-100 mt-6">
          <div className="w-7 h-7 bg-muted rounded-full flex items-center justify-center text-muted-foreground font-bold text-xs">M</div>
          <div>
            <p className="font-semibold text-foreground text-[11px] leading-none">Melvin</p>
            <p className="text-[10px] text-muted-foreground">00000</p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6 min-w-0">
        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            { label: "Total Reports", value: "24", sub: "All time", icon: BarChart3 },
            { label: "Scheduled", value: "8", sub: "Auto-delivery active", icon: Clock },
            { label: "Exported This Month", value: "47", sub: "PDF, Excel, CSV", icon: Download },
            { label: "Active Dashboards", value: "3", sub: "Live & updating", icon: LayoutDashboard },
          ].map((stat) => (
            <div key={stat.label} className="bg-white border border-gray-100 rounded-xl p-4 flex items-start justify-between">
              <div>
                <p className="text-muted-foreground text-[11px] mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-[10px] text-muted-foreground mt-1">{stat.sub}</p>
              </div>
              <div className="w-9 h-9 bg-primary/8 rounded-xl flex items-center justify-center">
                <stat.icon size={16} className="text-primary/60" />
              </div>
            </div>
          ))}
        </div>

        {/* Reports table */}
        <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
            <p className="font-semibold text-foreground">Report Library</p>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-gray-500 text-xs">
                <Search size={11} /> Search reports...
              </div>
              <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 text-xs">
                <Filter size={11} /> All Types <ChevronDown size={10} />
              </button>
              <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary text-white text-xs font-medium">
                <Plus size={11} /> New Report
              </button>
              <RefreshCw size={14} className="text-gray-400 ml-1" />
            </div>
          </div>

          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                {["REPORT NAME", "TYPE", "LAST RUN", "NEXT RUN", "STATUS", "ACTIONS"].map((h) => (
                  <th key={h} className="text-left px-5 py-2.5 text-[10px] font-semibold text-muted-foreground tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {reportRows.map((row) => (
                <tr key={row.name} className="border-b border-gray-50 hover:bg-gray-50/60">
                  <td className="px-5 py-3 font-medium text-foreground">{row.name}</td>
                  <td className="px-5 py-3 text-muted-foreground">{row.type}</td>
                  <td className="px-5 py-3 text-muted-foreground">{row.lastRun}</td>
                  <td className="px-5 py-3 text-muted-foreground">{row.nextRun}</td>
                  <td className="px-5 py-3">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-medium ${row.statusColor}`}>{row.status}</span>
                  </td>
                  <td className="px-5 py-3">
                    <Eye size={14} className="text-gray-400 hover:text-primary cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>

      {/* AI Chat — absolute overlay, bottom-right of dashboard */}
      <div className="absolute bottom-4 right-4 flex flex-col w-64 rounded-2xl shadow-2xl border border-gray-200 overflow-hidden bg-white" style={{ height: 400 }}>
        {/* Header */}
        <div className="flex items-center justify-between px-3 py-2.5 bg-[#1a2744] shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-xs">R</div>
            <div>
              <p className="text-white font-semibold text-[11px] leading-none">Rab</p>
              <div className="flex items-center gap-1 mt-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <p className="text-[9px] text-emerald-400">AI Sales Analyst · Online</p>
              </div>
            </div>
          </div>
          <button className="w-5 h-5 rounded-md bg-white/10 flex items-center justify-center text-white/70">
            <Minus size={10} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-3 py-3 flex flex-col gap-3 bg-white">
          <div className="flex flex-col gap-0.5">
            <div className="bg-gray-50 border border-gray-100 rounded-xl rounded-tl-sm px-3 py-2 max-w-[88%]">
              <p className="text-foreground text-[11px] leading-relaxed">Hello Melvin! I've analysed your Feb data. Revenue is up 12.4% — great month. Ready for March forecast?</p>
            </div>
            <p className="text-[9px] text-muted-foreground pl-1">2:14 PM</p>
          </div>

          <div className="flex flex-col items-end gap-0.5">
            <div className="bg-[#1a2744] rounded-xl rounded-tr-sm px-3 py-2 max-w-[88%]">
              <p className="text-white text-[11px] leading-relaxed font-medium">What's your sales forecast for next month?</p>
            </div>
            <p className="text-[9px] text-muted-foreground pr-1">2:15 PM</p>
          </div>

          <div className="flex flex-col gap-0.5">
            <div className="bg-gray-50 border border-gray-100 rounded-xl rounded-tl-sm px-3 py-2 max-w-[88%]">
              <p className="text-foreground text-[11px] leading-relaxed">Based on 14 months of data, I'm projecting <span className="font-bold">₹9.8L revenue in March</span> — a 16.7% growth. Sessions should hit 287 with a 38% conversion rate.</p>
            </div>
            <p className="text-[9px] text-muted-foreground pl-1">2:16 PM</p>
          </div>

          <div className="flex flex-col items-end gap-0.5">
            <div className="bg-[#1a2744] rounded-xl rounded-tr-sm px-3 py-2 max-w-[88%]">
              <p className="text-white text-[11px] leading-relaxed font-medium">What's the biggest risk I should watch?</p>
            </div>
            <p className="text-[9px] text-muted-foreground pr-1">2:17 PM</p>
          </div>

          <div className="flex flex-col gap-0.5">
            <div className="bg-amber-50 border border-amber-200 rounded-xl rounded-tl-sm px-3 py-2 max-w-[88%]">
              <div className="flex items-center gap-1 mb-1">
                <AlertTriangle size={10} className="text-amber-500" />
                <p className="text-amber-600 font-semibold text-[10px]">Risk Detected</p>
              </div>
              <p className="text-foreground text-[11px] leading-relaxed">FMCG stockouts could cost ₹80K–₹1.2L in March. Restock by Mar 5 to stay on forecast. Tuesday conversion is 22% below average.</p>
            </div>
            <p className="text-[9px] text-muted-foreground pl-1">2:17 PM</p>
          </div>
        </div>

        {/* Input */}
        <div className="shrink-0 px-2.5 py-2.5 border-t border-gray-100 bg-white flex items-center gap-2">
          <div className="flex-1 px-2.5 py-1.5 rounded-lg border border-gray-200 text-[10px] text-muted-foreground bg-gray-50 truncate">
            Ask Rab anything about your reports...
          </div>
          <button className="w-7 h-7 rounded-lg bg-[#1a2744] flex items-center justify-center shrink-0">
            <Send size={11} className="text-white" />
          </button>
        </div>
      </div>
  </div>
);

const Reports = () => (
  <div>
    <section className="py-24 md:py-32 px-6 bg-gradient-hero">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-satoshi font-medium mb-6">Rabos ERP — Module</span>
          <h1 className="font-melodrama text-4xl md:text-6xl font-extrabold text-foreground mb-6">Reports</h1>
          <p className="font-satoshi text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Turn your operational data into actionable intelligence with real-time dashboards, custom reports, and automated delivery.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 -mx-6 md:-mx-16 lg:-mx-32 xl:-mx-48"
        >
          <ReportsDashboardMockup />
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
            <h2 className="font-melodrama text-3xl md:text-5xl font-bold text-foreground mb-5">Reports Workflow</h2>
            <p className="font-satoshi text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured pipeline that transforms raw operational data into clear, actionable intelligence.
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connecting line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0 -translate-x-1/2" />

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, i) => {
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
                      <div className="flex items-center gap-3 mb-4">
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

export default Reports;
