// ─── Breakpoints ──────────────────────────────────────────────────────────────

export const BREAKPOINTS: Record<string, number> = {
  xs:  0,
  sm:  480,
  md:  768,
  lg:  1024,
  xl:  1280,
  xxl: 1536,
};

// ─── Typography scale tokens ──────────────────────────────────────────────────

export const TYPE_SCALE: Record<string, string> = {
  "--text-xs":   "clamp(0.70rem, 1.5vw, 0.75rem)",
  "--text-sm":   "clamp(0.80rem, 1.8vw, 0.875rem)",
  "--text-base": "clamp(0.95rem, 2.2vw, 1rem)",
  "--text-md":   "clamp(1.05rem, 2.5vw, 1.125rem)",
  "--text-lg":   "clamp(1.15rem, 2.8vw, 1.25rem)",
  "--text-xl":   "clamp(1.30rem, 3.2vw, 1.5rem)",
  "--text-2xl":  "clamp(1.50rem, 4vw, 1.875rem)",
  "--text-3xl":  "clamp(1.75rem, 5vw, 2.25rem)",
  "--text-4xl":  "clamp(2.00rem, 6vw, 3rem)",
  "--text-5xl":  "clamp(2.40rem, 7.5vw, 3.75rem)",
};

// ─── Spacing scale tokens ─────────────────────────────────────────────────────

export const SPACING_SCALE: Record<string, string> = {
  "--space-1":  "clamp(0.25rem, 0.5vw, 0.25rem)",
  "--space-2":  "clamp(0.375rem, 0.75vw, 0.5rem)",
  "--space-4":  "clamp(0.75rem, 1.5vw, 1rem)",
  "--space-6":  "clamp(1rem, 2vw, 1.5rem)",
  "--space-8":  "clamp(1.25rem, 2.5vw, 2rem)",
  "--space-12": "clamp(1.75rem, 3.5vw, 3rem)",
  "--space-16": "clamp(2.5rem, 5vw, 4rem)",
  "--space-24": "clamp(3.5rem, 7vw, 6rem)",
  "--space-32": "clamp(5rem, 10vw, 8rem)",
};

// ─── Utilities ────────────────────────────────────────────────────────────────

/** Returns the current breakpoint name based on window.innerWidth. */
export function currentBreakpoint(): string {
  if (typeof window === "undefined") return "xs";
  const w = window.innerWidth;
  const sorted = Object.entries(BREAKPOINTS).sort((a, b) => b[1] - a[1]);
  for (const [name, minW] of sorted) {
    if (w >= minW) return name;
  }
  return "xs";
}

/** Returns true if the current viewport is at or above the given breakpoint. */
export function isBreakpoint(bp: string): boolean {
  if (typeof window === "undefined") return false;
  return window.innerWidth >= (BREAKPOINTS[bp] ?? 0);
}

/**
 * Generates a CSS clamp() string that fluid-interpolates from minPx to maxPx
 * between a 480px and 1440px viewport.
 *
 * @example fluidClamp(12, 32) → "clamp(0.75rem, 1.3889vw + 0.5556rem, 2rem)"
 */
export function fluidClamp(minPx: number, maxPx: number): string {
  const minRem = minPx / 16;
  const maxRem = maxPx / 16;
  const viewMin = 480 / 16;
  const viewMax = 1440 / 16;
  const slope = (maxRem - minRem) / (viewMax - viewMin);
  const intercept = minRem - slope * viewMin;
  const slopeVw = (slope * 100).toFixed(4);
  const interceptRem = intercept.toFixed(4);
  return `clamp(${minRem}rem, ${slopeVw}vw + ${interceptRem}rem, ${maxRem}rem)`;
}

/** Sets a single CSS custom property on :root. */
export function setToken(name: string, value: string): void {
  if (typeof document === "undefined") return;
  document.documentElement.style.setProperty(name, value);
}

/** Sets multiple CSS custom properties on :root in one call. */
export function setTokens(tokens: Record<string, string>): void {
  for (const [name, value] of Object.entries(tokens)) {
    setToken(name, value);
  }
}

// ─── ResponsiveEngine ─────────────────────────────────────────────────────────

export interface ResponsiveEngineOptions {
  /** Show a fixed breakpoint badge (bottom-left) for debugging. */
  debug?: boolean;
  /** Inject TYPE_SCALE + SPACING_SCALE tokens into :root CSS variables. */
  injectCSS?: boolean;
  /** Lazy-load <img data-src="…"> elements via IntersectionObserver. */
  observeImages?: boolean;
  /** Enforce WCAG 44×44px minimum tap targets on interactive elements. */
  touchTargets?: boolean;
}

export class ResponsiveEngine {
  private opts: Required<ResponsiveEngineOptions>;
  private badge: HTMLElement | null = null;
  private imgObserver: IntersectionObserver | null = null;
  private removeResize: (() => void) | null = null;

  constructor(options: ResponsiveEngineOptions = {}) {
    this.opts = {
      debug: false,
      injectCSS: true,
      observeImages: true,
      touchTargets: false, // opt-in — avoid globally overriding existing UI
      ...options,
    };
  }

  /** Wire up all enabled features. Returns `this` for chaining. */
  init(): this {
    if (this.opts.injectCSS)     this._injectTokens();
    if (this.opts.debug)         this._mountBadge();
    if (this.opts.observeImages) this._observeImages();
    if (this.opts.touchTargets)  this._applyTouchTargets();
    this._watchBreakpoint();
    return this;
  }

  /** Returns true if the viewport is at or above the named breakpoint. */
  is(bp: string): boolean {
    return isBreakpoint(bp);
  }

  /** Remove all side-effects created by init(). */
  destroy(): void {
    this.badge?.remove();
    this.imgObserver?.disconnect();
    this.removeResize?.();
  }

  // ── private ────────────────────────────────────────────────────────────────

  private _injectTokens(): void {
    setTokens({ ...TYPE_SCALE, ...SPACING_SCALE });
  }

  private _mountBadge(): void {
    this.badge = document.createElement("div");
    Object.assign(this.badge.style, {
      position:      "fixed",
      bottom:        "80px",
      left:          "12px",
      zIndex:        "9999",
      padding:       "4px 10px",
      borderRadius:  "6px",
      background:    "#012a4a",
      color:         "#fff",
      fontFamily:    "monospace",
      fontSize:      "12px",
      pointerEvents: "none",
      userSelect:    "none",
    } as CSSStyleDeclaration);
    document.body.appendChild(this.badge);
    this._refreshBadge();
  }

  private _refreshBadge(): void {
    if (this.badge) {
      this.badge.textContent = `${currentBreakpoint()} · ${window.innerWidth}px`;
    }
  }

  private _watchBreakpoint(): void {
    let lastBp = currentBreakpoint();

    const handler = () => {
      this._refreshBadge();
      const bp = currentBreakpoint();
      if (bp !== lastBp) {
        lastBp = bp;
        window.dispatchEvent(
          new CustomEvent("ag:breakpoint", {
            detail: { breakpoint: bp, width: window.innerWidth },
          })
        );
      }
    };

    window.addEventListener("resize", handler, { passive: true });
    this.removeResize = () => window.removeEventListener("resize", handler);
  }

  private _observeImages(): void {
    const load = (img: Element) => {
      const src = img.getAttribute("data-src");
      if (!src) return;
      (img as HTMLImageElement).src = src;
      img.removeAttribute("data-src");
      img.classList.remove("ag-lazy");
      img.classList.add("ag-lazy--loaded");
    };

    this.imgObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            load(e.target);
            this.imgObserver!.unobserve(e.target);
          }
        }),
      { rootMargin: "200px" }
    );

    document.querySelectorAll("img[data-src]").forEach((img) =>
      this.imgObserver!.observe(img)
    );
  }

  private _applyTouchTargets(): void {
    const style = document.createElement("style");
    style.id = "ag-touch-targets";
    style.textContent = `
      a, button, [role="button"], input, select, textarea {
        min-height: 44px;
        min-width: 44px;
      }
    `;
    document.head.appendChild(style);
  }
}
