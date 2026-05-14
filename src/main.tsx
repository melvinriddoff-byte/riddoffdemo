import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ResponsiveEngine } from "./lib/responsive-antigravity";

// Initialise the responsive engine once at app startup
const engine = new ResponsiveEngine({
  debug:         false,  // set true to show breakpoint badge
  injectCSS:     true,   // write TYPE_SCALE + SPACING_SCALE to :root CSS vars
  observeImages: true,   // lazy-load <img data-src="…"> via IntersectionObserver
  touchTargets:  false,  // kept off to avoid overriding existing UI sizing
});

engine.init();

// Global breakpoint change listener
window.addEventListener("ag:breakpoint", (e) => {
  const detail = (e as CustomEvent<{ breakpoint: string; width: number }>).detail;
  if (import.meta.env.DEV) {
    console.log("[ag] BP changed:", detail);
  }
});

createRoot(document.getElementById("root")!).render(<App />);
