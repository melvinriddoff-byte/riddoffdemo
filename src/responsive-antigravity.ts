export interface ResponsiveEngineOptions {
  debug?: boolean;
  injectCSS?: boolean;
  observeImages?: boolean;
  touchTargets?: boolean;
  breakpoints?: Record<string, number>;
}

export default class ResponsiveEngine {
  private options: ResponsiveEngineOptions;
  private breakpoints: Record<string, number>;
  private currentBreakpoint: string = '';
  private debugBadge: HTMLDivElement | null = null;
  private imageObserver: IntersectionObserver | null = null;

  constructor(options: ResponsiveEngineOptions = {}) {
    this.options = {
      debug: false,
      injectCSS: false,
      observeImages: false,
      touchTargets: false,
      ...options,
    };

    // Default Tailwind-like breakpoints
    this.breakpoints = this.options.breakpoints || {
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      '2xl': 1536,
    };
  }

  public init(): void {
    if (this.options.injectCSS) {
      this.injectBaseCSS();
    }
    if (this.options.touchTargets) {
      this.injectTouchTargetsCSS();
    }
    if (this.options.debug) {
      this.setupDebugBadge();
    }
    if (this.options.observeImages) {
      this.setupImageObserver();
    }

    this.setupListeners();
    this.updateBreakpoint();
  }

  public is(breakpoint: string): boolean {
    const minWidth = this.breakpoints[breakpoint];
    if (minWidth === undefined) {
      console.warn(`Breakpoint '${breakpoint}' not found.`);
      return false;
    }
    return window.innerWidth >= minWidth;
  }

  private setupListeners(): void {
    let resizeTimer: number;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        this.updateBreakpoint();
      }, 100);
    });
  }

  private updateBreakpoint(): void {
    const width = window.innerWidth;
    let newBreakpoint = 'xs'; // Base case (smaller than sm)
    
    // Find the largest matching breakpoint
    let maxMatch = 0;
    for (const [bp, minWidth] of Object.entries(this.breakpoints)) {
      if (width >= minWidth && minWidth > maxMatch) {
        newBreakpoint = bp;
        maxMatch = minWidth;
      }
    }

    if (this.currentBreakpoint !== newBreakpoint) {
      this.currentBreakpoint = newBreakpoint;
      
      if (this.options.debug && this.debugBadge) {
        this.debugBadge.textContent = `${newBreakpoint} (${width}px)`;
      }

      // Dispatch custom event
      const event = new CustomEvent('ag:breakpoint', {
        detail: {
          breakpoint: newBreakpoint,
          width: width,
        }
      });
      window.dispatchEvent(event);
    } else if (this.options.debug && this.debugBadge) {
        // Just update the width if still on same breakpoint
        this.debugBadge.textContent = `${newBreakpoint} (${width}px)`;
    }
  }

  private setupDebugBadge(): void {
    if (document.getElementById('ag-debug-badge')) return;

    this.debugBadge = document.createElement('div');
    this.debugBadge.id = 'ag-debug-badge';
    Object.assign(this.debugBadge.style, {
      position: 'fixed',
      bottom: '10px',
      right: '10px',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      padding: '4px 8px',
      borderRadius: '4px',
      fontFamily: 'monospace',
      fontSize: '12px',
      zIndex: '9999',
      pointerEvents: 'none'
    });
    
    document.body.appendChild(this.debugBadge);
  }

  private injectBaseCSS(): void {
    if (document.getElementById('ag-base-css')) return;

    const style = document.createElement('style');
    style.id = 'ag-base-css';
    
    let css = `
      html { box-sizing: border-box; }
      *, *:before, *:after { box-sizing: inherit; }
      img, video { max-width: 100%; height: auto; display: block; }
      @media (prefers-reduced-motion: reduce) {
        *, ::before, ::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      }

      /* AG Container */
      .ag-container {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        padding-left: 1rem;
        padding-right: 1rem;
      }

      /* AG Grid */
      .ag-grid {
        display: grid;
        grid-template-columns: repeat(12, minmax(0, 1fr));
        gap: 1rem;
      }
      
      /* AG Lazy Loading */
      .ag-lazy {
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
      }
      .ag-lazy.ag-loaded {
        opacity: 1;
      }

      /* Base Grid Spans (Mobile First) */
    `;

    // Add base 1-12 span utilities
    for (let i = 1; i <= 12; i++) {
        css += `.ag-span-${i} { grid-column: span ${i} / span ${i}; }\n`;
    }

    // Add base hide classes
    css += `.ag-hide-xs { display: none; }\n`;
    css += `.ag-hide-sm { display: none; }\n`;
    css += `.ag-hide-md { display: none; }\n`;
    css += `.ag-hide-lg { display: none; }\n`;
    css += `.ag-hide-xl { display: none; }\n`;

    // Generate responsive utilities
    for (const [bp, minWidth] of Object.entries(this.breakpoints)) {
        css += `\n@media (min-width: ${minWidth}px) {\n`;
        
        // Container max-width
        css += `  .ag-container { max-width: ${minWidth}px; }\n`;

        // Responsive grid spans e.g. ag-md:span-6
        for (let i = 1; i <= 12; i++) {
            // we escape the colon for CSS validity
            css += `  .ag-${bp}\\:span-${i} { grid-column: span ${i} / span ${i}; }\n`;
        }

        // Responsive visibility e.g. if we are above 'xs' break, we unhide ag-hide-xs
        if (bp === 'md') {
             // Let's do a simple unhide scale based on the request (shows on md+)
             css += `  .ag-hide-xs { display: block; }\n`;
             css += `  .ag-hide-grid { display: grid; }\n`; // If it was a grid instead of block
             css += `  .ag-hide-flex { display: flex; }\n`; 
        }

        css += `}\n`;
    }

    style.textContent = css;
    document.head.appendChild(style);
  }

  private injectTouchTargetsCSS(): void {
    if (document.getElementById('ag-touch-targets-css')) return;

    const style = document.createElement('style');
    style.id = 'ag-touch-targets-css';
    // Ensure all interactive elements have at least 44x44 WCAG recommended touch target size
    style.textContent = `
      button, 
      [role="button"], 
      input[type="button"], 
      input[type="submit"], 
      input[type="reset"],
      .ag-touch-target {
        min-height: 44px;
        min-width: 44px;
      }
      
      a {
        position: relative;
      }
      a::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 44px;
        min-height: 44px;
        width: 100%;
        height: 100%;
      }
    `;
    document.head.appendChild(style);
  }

  private setupImageObserver(): void {
    if (!('IntersectionObserver' in window)) {
      console.warn('IntersectionObserver not supported - images will load normally.');
      this.loadAllImages();
      return;
    }

    this.imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          this.loadImage(img);
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    // Observe all images with data-src
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => {
      if (this.imageObserver) {
          this.imageObserver.observe(img);
      }
    });

    // Also set up a mutation observer for dynamically added images
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes) {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) { // Element node
              const el = node as HTMLElement;
              if (el.tagName === 'IMG' && el.hasAttribute('data-src')) {
                this.imageObserver?.observe(el);
              }
              // Check children too
              const childImages = el.querySelectorAll('img[data-src]');
              childImages.forEach(childImg => this.imageObserver?.observe(childImg));
            }
          });
        }
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });
  }

  private loadImage(img: HTMLImageElement): void {
    const src = img.getAttribute('data-src');
    if (!src) return;
    
    img.src = src;
    img.removeAttribute('data-src');
    
    // Handle responsive data-srcset if provided
    const srcset = img.getAttribute('data-srcset');
    if (srcset) {
      img.srcset = srcset;
      img.removeAttribute('data-srcset');
    }
    
    img.onload = () => {
      img.classList.add('ag-loaded');
    };
  }

  private loadAllImages(): void {
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => this.loadImage(img as HTMLImageElement));
  }
}
