import { motion } from "framer-motion";
import { Users, Target, PhoneCall, Mail, Clock, Star, Calendar, Search, Settings, Bell, RefreshCw, UserPlus, ChevronDown, TrendingUp, TrendingDown } from "lucide-react";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const features = [
  { icon: Users, title: "Leads Tracking", desc: "Capture and qualify incoming prospects from any source — web, referral, or campaign — and assign them to your sales team for follow-up." },
  { icon: Target, title: "Engagement", desc: "Log calls, emails, meetings, and tasks against each contact or lead, so your team always knows the last touchpoint and what's next." },
  { icon: PhoneCall, title: "Pipeline", desc: "Track every active deal across stages — from first contact to closed-won — with deal value, probability, and expected close date in one view" },
  { icon: Star, title: "Marketing", desc: "Plan and track campaigns, attribute leads to their source, and measure conversion rates so you know which channels drive real revenue." },
];

const payrollData = [
  { month: "Jan", value: 42 }, { month: "Feb", value: 38 }, { month: "Mar", value: 45 },
  { month: "Apr", value: 40 }, { month: "May", value: 95 }, { month: "Jun", value: 60 },
];

const attendanceData = [
  { day: "O1", in: 55, out: 75 }, { day: "O2", in: 50, out: 70 }, { day: "O3", in: 65, out: 85 },
  { day: "O4", in: 45, out: 65 }, { day: "O5", in: 70, out: 90 }, { day: "O6", in: 80, out: 95 },
  { day: "O7", in: 55, out: 72 }, { day: "O8", in: 48, out: 68 }, { day: "O9", in: 60, out: 80 },
  { day: "10", in: 52, out: 74 }, { day: "11", in: 58, out: 78 }, { day: "12", in: 90, out: 100 },
  { day: "13", in: 85, out: 98 }, { day: "14", in: 62, out: 82 }, { day: "15", in: 55, out: 75 },
  { day: "16", in: 70, out: 88 }, { day: "17", in: 50, out: 72 }, { day: "18", in: 88, out: 100 },
  { day: "19", in: 60, out: 80 },
];

const sidebarItems = [
  { label: "Overview", active: true },
  { label: "Leads" },
  { label: "Engagement" },
  { label: "Pipeline" },
  { label: "Marketing" },
];

const CRMDashboardMockup = () => (
  <div className="bg-white rounded-2xl shadow-elevated border border-border overflow-hidden text-[13px]">
    {/* Top bar */}
    <div className="flex items-center justify-between px-6 py-3 border-b border-gray-100">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0">A</div>
        <div className="mr-4">
          <p className="font-bold text-foreground text-xs leading-none">AL RAMS</p>
          <p className="text-[10px] text-muted-foreground leading-none mt-0.5">ERP SYSTEM</p>
        </div>
        <div>
          <p className="font-bold text-foreground text-base leading-tight">CRM Dashboard</p>
          <p className="text-[11px] text-muted-foreground">Customer relationship management overview</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 text-xs">
          <Calendar size={11} /> 1 – 28 Feb
        </div>
        <button className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-primary text-white text-xs font-semibold">
          <UserPlus size={12} /> New Lead
        </button>
        <RefreshCw size={14} className="text-gray-400 ml-1" />
        <Search size={14} className="text-gray-400" />
        <Bell size={14} className="text-gray-400" />
        <Settings size={14} className="text-gray-400" />
      </div>
    </div>

    <div className="flex">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-48 border-r border-gray-100 py-3 flex-shrink-0">
        <p className="text-[10px] font-semibold text-muted-foreground px-4 mb-2 tracking-widest">OPERATIONS</p>
        <div className="px-3 py-2 flex items-center gap-2 text-muted-foreground hover:bg-gray-50 cursor-pointer rounded-lg mx-1">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg> Dashboard
        </div>
        <div className="px-3 py-2 flex items-center justify-between text-muted-foreground hover:bg-gray-50 cursor-pointer rounded-lg mx-1">
          <div className="flex items-center gap-2"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="7" r="4" /><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" /></svg> Sales</div>
          <ChevronDown size={11} />
        </div>
        {/* CRM expanded */}
        <div className="mx-1">
          <div className="px-3 py-2 flex items-center justify-between bg-primary/10 rounded-lg cursor-pointer">
            <div className="flex items-center gap-2 text-primary font-semibold">
              <Users size={14} /> CRM
            </div>
            <ChevronDown size={12} className="text-primary" />
          </div>
          <div className="ml-4 mt-1 flex flex-col gap-0.5">
            {sidebarItems.map((item) => (
              <div key={item.label} className={`px-3 py-1.5 flex items-center gap-2 rounded-lg cursor-pointer text-[12px] ${item.active ? "bg-primary text-white font-medium" : "text-muted-foreground hover:bg-gray-50"}`}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-60"><circle cx="9" cy="7" r="4" /><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" /></svg> {item.label}
              </div>
            ))}
          </div>
        </div>
        {[
          { label: "Procurement", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13" /><path d="m16 8 2 2 4-4" /></svg> },
          { label: "Inventory", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9h18M3 15h18" /><rect x="3" y="3" width="18" height="18" rx="2" /></svg> },
          { label: "Manufacturing", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" /></svg> },
        ].map((item) => (
          <div key={item.label} className="px-3 py-2 flex items-center justify-between text-muted-foreground hover:bg-gray-50 cursor-pointer rounded-lg mx-1 mt-0.5">
            <div className="flex items-center gap-2">{item.icon} {item.label}</div>
            <ChevronDown size={11} />
          </div>
        ))}
        <p className="text-[10px] font-semibold text-muted-foreground px-4 mt-3 mb-2 tracking-widest">FINANCE & ACCOUNTING</p>
        {[{ label: "Accounts" }, { label: "Reports" }].map((item) => (
          <div key={item.label} className="px-3 py-2 flex items-center justify-between text-muted-foreground hover:bg-gray-50 cursor-pointer rounded-lg mx-1 mt-0.5">
            <div className="flex items-center gap-2"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg> {item.label}</div>
            <ChevronDown size={11} />
          </div>
        ))}
        <div className="mt-auto px-3 pt-4 flex items-center gap-2 border-t border-gray-100 mx-1">
          <div className="w-7 h-7 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center font-bold">M</div>
          <div><p className="text-[11px] font-semibold text-foreground">Melvin</p><p className="text-[10px] text-muted-foreground">00000</p></div>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 p-5 bg-gray-50/40 overflow-hidden">
        {/* Top stat row */}
        <div className="grid grid-cols-5 gap-3 mb-4">
          <div className="bg-white rounded-xl p-4 border border-gray-100 col-span-1">
            <p className="text-2xl font-bold text-foreground">36</p>
            <p className="text-[11px] text-green-600 flex items-center gap-0.5 mt-1"><TrendingUp size={10} /> +5.2% vs last period</p>
          </div>
          {[
            { label: "Total Payroll", val: "₹0.38M", trend: "+5.2%", up: true },
            { label: "Attendance Rate", val: "0.0%", trend: "+1.2%", up: true },
            { label: "Productivity Score", val: "0.0%", trend: "+3.5%", up: true },
            { label: "Employee Turnover", val: "12.2%", trend: "-2.1%", up: false },
          ].map((card) => (
            <div key={card.label} className="bg-white rounded-xl p-4 border border-gray-100 flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[11px] text-muted-foreground">{card.label}</p>
                  <p className="text-lg font-bold text-foreground mt-0.5">{card.val}</p>
                </div>
                <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5"><path d="M3 12s2-4 9-4 9 4 9 4-2 4-9 4-9-4-9-4z" /><circle cx="12" cy="12" r="3" /></svg>
                </div>
              </div>
              <p className={`text-[10px] flex items-center gap-0.5 mt-1 ${card.up ? "text-green-600" : "text-red-500"}`}>
                {card.up ? <TrendingUp size={10} /> : <TrendingDown size={10} />} {card.trend} vs last period
              </p>
            </div>
          ))}
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Payroll chart */}
          <div className="bg-white rounded-xl border border-gray-100 p-4">
            <div className="flex items-start justify-between mb-1">
              <div>
                <p className="text-xs font-semibold text-foreground">Payroll</p>
                <p className="text-xl font-bold text-foreground">367k</p>
                <span className="inline-block bg-green-100 text-green-700 text-[11px] px-2 py-0.5 rounded-full mt-1">+3.84%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] bg-green-50 border border-green-200 text-green-700 px-2 py-0.5 rounded-full">Last 6 Months</span>
                <ChevronDown size={12} className="text-muted-foreground" />
              </div>
            </div>
            <ResponsiveContainer width="100%" height={120}>
              <AreaChart data={payrollData} margin={{ top: 10, right: 0, left: -30, bottom: 0 }}>
                <defs>
                  <linearGradient id="payrollGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#166534" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#166534" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" tick={{ fontSize: 10, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 10, fill: "#94a3b8" }} axisLine={false} tickLine={false} domain={[0, 100]} ticks={[0, 25, 50, 75, 100]} />
                <Tooltip
                  content={({ active, payload, label }) =>
                    active && payload?.length ? (
                      <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-md text-xs">
                        <p className="text-muted-foreground">{label === "May" ? "May 2025" : label}</p>
                        <p className="font-bold text-foreground">{payload[0].value}%</p>
                      </div>
                    ) : null
                  }
                />
                <Area type="monotone" dataKey="value" stroke="#166534" strokeWidth={2} fill="url(#payrollGrad)" dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Attendance chart */}
          <div className="bg-white rounded-xl border border-gray-100 p-4">
            <div className="flex items-start justify-between mb-1">
              <div>
                <p className="text-xs font-semibold text-foreground">Attendance Report</p>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-xl font-bold text-foreground">92%</p>
                  <span className="inline-block bg-green-100 text-green-700 text-[11px] px-2 py-0.5 rounded-full">+1.84%</span>
                  <span className="text-[11px] text-muted-foreground">Attendance Rate</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] bg-green-50 border border-green-200 text-green-700 px-2 py-0.5 rounded-full">Last 6 Months</span>
                <ChevronDown size={12} className="text-muted-foreground" />
              </div>
            </div>
            <ResponsiveContainer width="100%" height={120}>
              <BarChart data={attendanceData} margin={{ top: 5, right: 0, left: -30, bottom: 0 }} barSize={5} barCategoryGap="30%">
                <XAxis dataKey="day" tick={{ fontSize: 9, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 9, fill: "#94a3b8" }} axisLine={false} tickLine={false} domain={[40, 110]} ticks={[]} />
                <Tooltip
                  content={({ active, payload }) =>
                    active && payload?.length ? (
                      <div className="bg-white border border-gray-200 rounded-lg px-2 py-1.5 shadow-md text-xs">
                        <p className="text-foreground font-medium">{payload[0].value}%</p>
                      </div>
                    ) : null
                  }
                />
                <Bar dataKey="out" fill="#d1fae5" radius={[2, 2, 0, 0]} />
                <Bar dataKey="in" fill="#166534" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-2 gap-4">
          {/* Employment Status */}
          <div className="bg-white rounded-xl border border-gray-100 p-5">
            <p className="text-sm font-bold text-foreground mb-4">Employment Status</p>
            <div className="w-full h-8 rounded-lg overflow-hidden flex mb-3">
              <div className="bg-primary h-full" style={{ width: "70%" }} />
              <div className="bg-green-300 h-full" style={{ width: "30%" }} />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mb-4">
              <span>0%</span><span>100%</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-primary" /><span className="text-xs text-foreground font-medium">Current</span></div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-green-300" /><span className="text-xs text-foreground font-medium">Budget</span></div>
            </div>
          </div>

          {/* Performance distribution */}
          <div className="bg-white rounded-xl border border-gray-100 p-5">
            <p className="text-sm font-bold text-foreground mb-3">Performance distribution</p>
            <div className="flex items-end justify-between gap-4">
              {/* Semi-circle gauge */}
              <div className="relative w-36 h-20 flex-shrink-0">
                <svg viewBox="0 0 120 65" className="w-full h-full">
                  {/* Background arcs */}
                  <path d="M 10 60 A 50 50 0 0 1 110 60" fill="none" stroke="#f0fdf4" strokeWidth="14" strokeLinecap="round" />
                  <path d="M 10 60 A 50 50 0 0 1 60 10" fill="none" stroke="#bbf7d0" strokeWidth="14" strokeLinecap="round" />
                  <path d="M 60 10 A 50 50 0 0 1 93 19" fill="none" stroke="#4ade80" strokeWidth="14" strokeLinecap="round" />
                  <path d="M 93 19 A 50 50 0 0 1 110 60" fill="none" stroke="#166534" strokeWidth="14" strokeLinecap="round" />
                  {/* Needle at 60% */}
                  <line x1="60" y1="60" x2="28" y2="28" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="60" cy="60" r="5" fill="#166534" />
                  <text x="60" y="56" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">60%</text>
                </svg>
              </div>
              {/* Legend */}
              <div className="flex flex-col gap-1.5">
                {[
                  { color: "bg-primary", label: "Entry(10k-20k)" },
                  { color: "bg-green-500", label: "Junior(20k-30k)" },
                  { color: "bg-green-300", label: "trainee(10k)" },
                  { color: "bg-green-100", label: "Mid-Level(30k-50k)" },
                  { color: "bg-gray-100", label: "Senior(50k)" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <div className={`w-2.5 h-2.5 rounded-sm ${item.color} border border-gray-200`} />
                    <span className="text-[11px] text-muted-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { CRMDashboardMockup };

const CRM = () => (
  <div>
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-hero">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block bg-primary/10 text-primary px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-satoshi font-medium mb-4 sm:mb-6">Rabos ERP — Module</span>
          <h1 className="font-melodrama text-3xl sm:text-4xl md:text-6xl font-extrabold text-foreground mb-4 sm:mb-6">CRM</h1>
          <p className="font-satoshi text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            Build deeper customer relationships with a CRM that connects every interaction to a complete picture of your business.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Dashboard Mockup */}
    <section className="py-6 sm:py-10 px-3 sm:px-6 -mt-2 sm:-mt-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="overflow-x-auto">
              <div className="min-w-[700px]">
                <CRMDashboardMockup />
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
            <h2 className="font-melodrama text-3xl md:text-5xl font-bold text-foreground mb-5">CRM Workflow</h2>
            <p className="font-satoshi text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured and automated pipeline designed to turn prospects into closed deals seamlessly.
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

export default CRM;
