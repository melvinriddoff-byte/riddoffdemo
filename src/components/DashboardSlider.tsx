import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SalesDashboardMockup } from "@/pages/erp/Sales";
import { CRMDashboardMockup } from "@/pages/erp/CRM";
import { InventoryDashboardMockup } from "@/pages/erp/Inventory";

const tabs = [
  { id: "sales",     label: "Sales",     Component: SalesDashboardMockup },
  { id: "crm",       label: "CRM",       Component: CRMDashboardMockup },
  { id: "inventory", label: "Inventory", Component: InventoryDashboardMockup },
];

const NATURAL_W = 1100;
const NATURAL_H = 480;

const DashboardSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return;
      setZoom(Math.min(1, containerRef.current.offsetWidth / NATURAL_W));
    };
    update();
    const observer = new ResizeObserver(update);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActive((prev) => (prev + 1) % tabs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > active ? 1 : -1);
    setActive(index);
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -200 : 200, opacity: 0 }),
  };

  const { Component } = tabs[active];

  return (
    <div ref={containerRef} className="w-full max-w-7xl mx-auto">
      {/* Tab bar */}
      <div className="flex justify-center gap-2 mb-8">
        {tabs.map((t, i) => (
          <button
            key={t.id}
            onClick={() => goTo(i)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              i === active
                ? "bg-primary text-primary-foreground shadow-elevated"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Scaled mockup card */}
      <div
        className="rounded-2xl shadow-elevated border border-border overflow-hidden bg-white"
        style={{ height: Math.round(NATURAL_H * zoom) }}
      >
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={tabs[active].id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <div style={{ zoom, height: NATURAL_H, overflow: "hidden", width: NATURAL_W }}>
              <Component />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => goTo((active - 1 + tabs.length) % tabs.length)}
          className="p-2 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="flex items-center gap-2">
          {tabs.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => goTo((active + 1) % tabs.length)}
          className="p-2 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default DashboardSlider;
