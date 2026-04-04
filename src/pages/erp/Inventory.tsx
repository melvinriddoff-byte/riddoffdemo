import { motion } from "framer-motion";
import { Package, Warehouse, ScanBarcode, TrendingDown, Bell, RefreshCw, Search, ChevronDown, MoreVertical, Download, BarChart2, UserPlus, Plus, Filter } from "lucide-react";

const features = [
  { icon: Package, title: "Management", desc: "View and control your complete stock position in real time — current quantities, valuations, reorder levels, and movement history across all locations." },
  { icon: Warehouse, title: "Products", desc: "Define and manage your full product catalogue — SKUs, units of measure, categories, pricing tiers, and the attributes that drive every transaction." },
  { icon: ScanBarcode, title: "Stock Managements", desc: "Perform stock adjustments, write-offs, inter-warehouse transfers, and physical count reconciliations to keep your books aligned with reality." },
  { icon: TrendingDown, title: "Warehouses", desc: "Set up and manage multiple warehouse locations, define storage zones and bins, and control which products are stocked where across your network." },
];

const sidebarItems = [
  { label: "Overview" },
  { label: "Management", active: true },
  { label: "Products" },
  { label: "Stock Managements" },
  { label: "Warehouses" },
];

const InventoryDashboardMockup = () => (
  <div className="bg-white rounded-2xl shadow-elevated border border-border overflow-hidden text-[13px]">
    {/* Top bar */}
    <div className="flex items-center justify-between px-6 py-3 border-b border-gray-100">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0">A</div>
        <div className="mr-4">
          <p className="font-bold text-foreground text-xs leading-none">AL RAMS</p>
          <p className="text-[10px] text-muted-foreground leading-none mt-0.5">ERP SYSTEM</p>
        </div>
        <p className="font-bold text-foreground text-base">Inventory Management</p>
      </div>
      <div className="flex items-center gap-3 text-gray-400">
        <Download size={15} />
        <BarChart2 size={15} />
        <UserPlus size={15} />
        <Plus size={15} />
        <MoreVertical size={15} />
        <div className="w-px h-4 bg-gray-200 mx-1" />
        <Search size={15} />
        <Bell size={15} />
        <RefreshCw size={15} />
      </div>
    </div>

    <div className="flex">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-52 border-r border-gray-100 py-3 flex-shrink-0">
        <p className="text-[10px] font-semibold text-muted-foreground px-4 mb-2 tracking-widest">OPERATIONS</p>

        <div className="px-3 py-2 flex items-center gap-2 text-muted-foreground hover:bg-gray-50 cursor-pointer rounded-lg mx-1">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg> Dashboard
        </div>
        {[
          { label: "Sales", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg> },
          { label: "CRM", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> },
          { label: "Procurement", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13" /><path d="m16 8 2 2 4-4" /></svg> },
        ].map((item) => (
          <div key={item.label} className="px-3 py-2 flex items-center justify-between text-muted-foreground hover:bg-gray-50 cursor-pointer rounded-lg mx-1">
            <div className="flex items-center gap-2">{item.icon} {item.label}</div>
            <ChevronDown size={11} />
          </div>
        ))}

        {/* Inventory expanded */}
        <div className="mx-1 mt-0.5">
          <div className="px-3 py-2 flex items-center justify-between bg-primary/10 rounded-lg cursor-pointer">
            <div className="flex items-center gap-2 text-primary font-semibold">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9h18M3 15h18" /><rect x="3" y="3" width="18" height="18" rx="2" /></svg> Inventory
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

        <div className="px-3 py-2 flex items-center justify-between text-muted-foreground hover:bg-gray-50 cursor-pointer rounded-lg mx-1 mt-1">
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" /></svg> Manufacturing
          </div>
          <ChevronDown size={11} />
        </div>

        <p className="text-[10px] font-semibold text-muted-foreground px-4 mt-4 mb-2 tracking-widest">FINANCE & ACCOUNTING</p>
        {[{ label: "Accounts" }, { label: "Reports" }].map((item) => (
          <div key={item.label} className="px-3 py-2 flex items-center justify-between text-muted-foreground hover:bg-gray-50 cursor-pointer rounded-lg mx-1">
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg> {item.label}
            </div>
            <ChevronDown size={11} />
          </div>
        ))}

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
        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
          {[
            { label: "Total Products", val: "1", iconBg: "bg-blue-50", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg> },
            { label: "Inventory Value", val: "INR 0", valColor: "text-green-600", iconBg: "bg-green-50", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg> },
            { label: "Low Stock", val: "0", iconBg: "bg-amber-50", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg> },
            { label: "Out of Stock", val: "1", valColor: "text-red-500", iconBg: "bg-red-50", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2"><rect x="1" y="3" width="15" height="13" /><path d="M16 8h4l3 3v5h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg> },
          ].map((card) => (
            <div key={card.label} className="bg-white rounded-xl p-4 border border-gray-100 flex items-center gap-4">
              <div className={`w-10 h-10 rounded-xl ${card.iconBg} flex items-center justify-center flex-shrink-0`}>
                {card.icon}
              </div>
              <div>
                <p className="text-[11px] text-muted-foreground">{card.label}</p>
                <p className={`text-xl font-bold ${card.valColor ?? "text-foreground"}`}>{card.val}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Filters panel */}
        <div className="bg-white rounded-xl border border-gray-100 p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
              <Filter size={13} /> Filters
            </div>
            <span className="text-xs text-muted-foreground">2 Products</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
            <div>
              <p className="text-[11px] text-muted-foreground mb-1.5">Search</p>
              <div className="flex items-center gap-2 bg-green-50 border border-green-100 rounded-lg px-3 py-2 text-xs text-muted-foreground">
                <Search size={11} /> Name, SKU, barcode..
              </div>
            </div>
            {[
              { label: "Category", val: "All Categories" },
              { label: "Subcategory", val: "All Subcategories" },
              { label: "Warehouse", val: "All Warehouses" },
            ].map((f) => (
              <div key={f.label}>
                <p className="text-[11px] text-muted-foreground mb-1.5">{f.label}</p>
                <button className="w-full flex items-center justify-between bg-green-50 border border-green-100 rounded-lg px-3 py-2 text-xs text-foreground">
                  {f.val} <ChevronDown size={11} className="text-muted-foreground" />
                </button>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Bin Location", val: "All Locations" },
              { label: "Vendor", val: "All Vendors" },
              { label: "Material", val: "All Materials" },
              { label: "Created By", val: "All users" },
            ].map((f) => (
              <div key={f.label}>
                <p className="text-[11px] text-muted-foreground mb-1.5">{f.label}</p>
                <button className="w-full flex items-center justify-between bg-green-50 border border-green-100 rounded-lg px-3 py-2 text-xs text-foreground">
                  {f.val} <ChevronDown size={11} className="text-muted-foreground" />
                </button>
              </div>
            ))}
          </div>
          <p className="text-xs text-primary mt-3 cursor-pointer font-medium">+ Advance filters</p>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-green-50/50 border-b border-gray-100">
                {["SKU", "PRODUCT", "CATEGORY", "SUPPLIER", "BIN", "COST", "PRICE", "MRP", "STOCK", "STATUS"].map((col) => (
                  <th key={col} className="text-left px-4 py-3 text-[11px] font-semibold text-muted-foreground tracking-wide whitespace-nowrap">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-50 hover:bg-gray-50/50">
                <td className="px-4 py-4 text-xs text-muted-foreground">—</td>
                <td className="px-4 py-4 text-xs font-semibold text-foreground">Laptop and mouse</td>
                <td className="px-4 py-4 text-xs text-muted-foreground">Office Table</td>
                <td className="px-4 py-4 text-xs text-muted-foreground">Office Table</td>
                <td className="px-4 py-4 text-xs text-muted-foreground">—</td>
                <td className="px-4 py-4 text-xs text-foreground">INR 4,000</td>
                <td className="px-4 py-4 text-xs text-foreground">INR 4,000</td>
                <td className="px-4 py-4 text-xs text-foreground">INR 4,000</td>
                <td className="px-4 py-4 text-xs font-semibold text-red-500">0 / 0</td>
                <td className="px-4 py-4">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-foreground">
                    <span className="w-2 h-2 rounded-full bg-gray-800 inline-block" />
                    Out of Stock
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export { InventoryDashboardMockup };

const Inventory = () => (
  <div>
    <section className="py-24 md:py-32 px-6 bg-gradient-hero">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-satoshi font-medium mb-6">Rabos ERP — Module</span>
          <h1 className="font-melodrama text-4xl md:text-6xl font-extrabold text-foreground mb-6">Inventory</h1>
          <p className="font-satoshi text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Real-time inventory visibility across every warehouse and location, so you always know what you have and where it is.
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
                <InventoryDashboardMockup />
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
            <h2 className="font-melodrama text-3xl md:text-5xl font-bold text-foreground mb-5">Inventory Workflow</h2>
            <p className="font-satoshi text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured and automated pipeline designed to control your inventory management seamlessly.
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

export default Inventory;
