import { motion } from "framer-motion";
import { ClipboardList, Truck, CheckSquare, DollarSign, Building2, ReceiptText, Search, Bell, Settings, ChevronDown, MoreVertical, ChevronLeft, ChevronRight, Calendar } from "lucide-react";

const features = [
  { icon: ClipboardList, title: "Purchase Orders", desc: "Raise and send formal purchase orders to vendors, track approval status, and link each order to the goods or services expected in return." },
  { icon: Building2, title: "Manifacturing Queue", desc: "Schedule and prioritise production jobs, allocate raw materials from inventory, and track each job from work order to finished goods." },
  { icon: CheckSquare, title: "Vendors", desc: "Maintain a complete supplier directory with contact details, payment terms, lead times, and purchase history for every vendor you work with." },
  { icon: DollarSign, title: "Vendor Groups", desc: "Organise vendors into categories — by product type, region, or tier — and apply group-level payment terms, tax rules, and approval workflows at once." },
  { icon: Truck, title: "Goods Receipt", desc: "Record incoming stock against open purchase orders, flag quantity or quality discrepancies, and automatically update inventory on confirmation." },
  { icon: ReceiptText, title: "Vendors Returns", desc: "Initiate returns of damaged or excess goods back to the vendor, generate return authorisations, and deduct returned quantities from stock." },
  { icon: ReceiptText, title: "Vendors Credits", desc: "Track credit notes issued by vendors against returns or overcharges, and apply them automatically to offset future bills or payables." },
  { icon: ReceiptText, title: "Vendors Bills", desc: "Capture and match incoming supplier invoices against purchase orders and goods receipts, then route them for approval and payment processing." },

];

const orders = [
  { po: "PO-0002", vendor: "Alrams test", vendorId: "VND-ALRAMS-845", orderDate: "2/11/2026", expectedDate: "—", items: "1 items", total: "INR 66,080", status: "Confirmed", statusColor: "bg-blue-50 text-blue-600", dot: "bg-blue-500" },
  { po: "PO-0002", vendor: "Alrams test", vendorId: "VND-ALRAMS-845", orderDate: "2/11/2026", expectedDate: "2/6/2026", items: "1 items", total: "INR 66,080", status: "Received", statusColor: "bg-green-50 text-green-700", dot: "bg-green-500" },
];

const sidebarItems = [
  { label: "Overview" },
  { label: "Purchase Orders", active: true },
  { label: "Manufacturing Queue" },
  { label: "Vendors" },
  { label: "Vendors Groups" },
  { label: "Goods Receipt" },
  { label: "Vendors Returns" },
  { label: "Vendors Credits" },
  { label: "Vendor Bills" },
];

const ProcurementDashboardMockup = () => (
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
          <p className="font-bold text-foreground text-base leading-tight">Purchase Orders</p>
          <p className="text-[11px] text-muted-foreground">Manage procurement orders</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Search size={15} className="text-gray-400" />
        <Bell size={15} className="text-gray-400" />
        <Settings size={15} className="text-gray-400" />
      </div>
    </div>

    <div className="flex">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-52 border-r border-gray-100 py-3 flex-shrink-0">
        <p className="text-[10px] font-semibold text-muted-foreground px-4 mb-2 tracking-widest">OPERATIONS</p>

        {/* Dashboard */}
        <div className="px-3 py-2 flex items-center gap-2 text-muted-foreground hover:bg-gray-50 cursor-pointer rounded-lg mx-1">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg> Dashboard
        </div>

        {/* Sales collapsed */}
        <div className="px-3 py-2 flex items-center justify-between text-muted-foreground hover:bg-gray-50 cursor-pointer rounded-lg mx-1">
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="7" r="4" /><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" /></svg> Sales
          </div>
          <ChevronDown size={11} />
        </div>

        {/* CRM collapsed */}
        <div className="px-3 py-2 flex items-center justify-between text-muted-foreground hover:bg-gray-50 cursor-pointer rounded-lg mx-1">
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> CRM
          </div>
          <ChevronDown size={11} />
        </div>

        {/* Procurement expanded */}
        <div className="mx-1">
          <div className="px-3 py-2 flex items-center justify-between bg-primary/10 rounded-lg cursor-pointer">
            <div className="flex items-center gap-2 text-primary font-semibold">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13" /><path d="m16 8 2 2 4-4" /><path d="M21 19H3" /></svg> Procurement
            </div>
            <ChevronDown size={12} className="text-primary" />
          </div>
          <div className="ml-4 mt-1 flex flex-col gap-0.5">
            {sidebarItems.map((item) => (
              <div key={item.label} className={`px-3 py-1.5 flex items-center gap-2 rounded-lg cursor-pointer text-[12px] ${item.active ? "bg-primary text-white font-medium" : "text-muted-foreground hover:bg-gray-50"}`}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-60"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg> {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* Inventory collapsed */}
        <div className="px-3 py-2 flex items-center justify-between text-muted-foreground hover:bg-gray-50 cursor-pointer rounded-lg mx-1 mt-1">
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9h18M3 15h18" /><rect x="3" y="3" width="18" height="18" rx="2" /></svg> Inventory
          </div>
          <ChevronDown size={11} />
        </div>

        {/* Manufacturing collapsed */}
        <div className="px-3 py-2 flex items-center justify-between text-muted-foreground hover:bg-gray-50 cursor-pointer rounded-lg mx-1">
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" /></svg> Manufacturing
          </div>
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
      <div className="flex-1 p-5 bg-gray-50/40">
        {/* Filter bar */}
        <div className="bg-white rounded-xl border border-gray-100 px-5 py-3.5 flex items-center gap-3 mb-5 flex-wrap">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>
            <span className="font-medium text-foreground">Group by:</span>
          </div>
          <button className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-800 px-3 py-1.5 rounded-lg text-xs font-medium">
            No Grouping <ChevronDown size={12} />
          </button>
          <div className="flex-1" />
          <button className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-800 px-3 py-1.5 rounded-lg text-xs font-medium">
            All Status <ChevronDown size={12} />
          </button>
          <button className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-800 px-3 py-1.5 rounded-lg text-xs font-medium">
            dd – mm – yyyy <Calendar size={12} />
          </button>
          <button className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-800 px-3 py-1.5 rounded-lg text-xs font-medium">
            dd – mm – yyyy <Calendar size={12} />
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-green-50/60 border-b border-gray-100">
                <th className="w-10 px-4 py-3">
                  <div className="w-4 h-4 border-2 border-gray-300 rounded" />
                </th>
                {["PO NUMBER", "VENDOR", "ORDER DATE", "EXPECTED DATE", "ITEMS", "TOTAL", "STATUS", "ACTIONS"].map((col) => (
                  <th key={col} className="text-left px-3 py-3 text-[11px] font-semibold text-muted-foreground tracking-wide whitespace-nowrap">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {orders.map((row, i) => (
                <tr key={i} className="border-t border-gray-50 hover:bg-gray-50/50">
                  <td className="px-4 py-4">
                    <div className="w-4 h-4 border-2 border-gray-300 rounded" />
                  </td>
                  <td className="px-3 py-4 font-bold text-foreground text-xs">{row.po}</td>
                  <td className="px-3 py-4">
                    <p className="font-semibold text-foreground text-xs">{row.vendor}</p>
                    <p className="text-[11px] text-muted-foreground">{row.vendorId}</p>
                  </td>
                  <td className="px-3 py-4 text-xs text-foreground">{row.orderDate}</td>
                  <td className="px-3 py-4 text-xs text-muted-foreground">{row.expectedDate}</td>
                  <td className="px-3 py-4 text-xs text-foreground">{row.items}</td>
                  <td className="px-3 py-4 text-xs font-medium text-foreground">{row.total}</td>
                  <td className="px-3 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium ${row.statusColor}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${row.dot}`} />
                      {row.status}
                    </span>
                  </td>
                  <td className="px-3 py-4">
                    <MoreVertical size={14} className="text-muted-foreground cursor-pointer hover:text-foreground" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex items-center justify-between px-5 py-3 border-t border-gray-100">
            <p className="text-xs text-muted-foreground">Showing 1 to 2 of 2 orders</p>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-1 bg-green-50 border border-green-200 text-green-800 px-2.5 py-1 rounded-lg text-xs font-medium">
                25/Page <ChevronDown size={11} />
              </button>
              <div className="flex items-center gap-1">
                <button className="w-7 h-7 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:border-primary hover:text-primary">
                  <ChevronLeft size={13} />
                </button>
                <button className="px-3 h-7 flex items-center justify-center rounded-lg bg-green-50 border border-green-200 text-green-800 text-xs font-medium">
                  Page 1 of 1
                </button>
                <button className="w-7 h-7 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:border-primary hover:text-primary">
                  <ChevronRight size={13} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Procurement = () => (
  <div>
    <section className="py-24 md:py-32 px-6 bg-gradient-hero">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-satoshi font-medium mb-6">Rabos ERP — Module</span>
          <h1 className="font-melodrama text-4xl md:text-6xl font-extrabold text-foreground mb-6">Procurement</h1>
          <p className="font-satoshi text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Streamline every step of your purchasing process — from requisition to receipt — with full control over spend and supplier relationships.
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
                <ProcurementDashboardMockup />
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
            <h2 className="font-melodrama text-3xl md:text-5xl font-bold text-foreground mb-5">Procurement Workflow</h2>
            <p className="font-satoshi text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured and automated pipeline designed to control your purchasing from requisition to receipt.
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

export default Procurement;
