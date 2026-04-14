import { useEffect, useRef, useState } from 'react';
import './MouseReveal.css';

interface Point {
  x: number;
  y: number;
  timestamp: number;
  id: number;
  r: number;
}

interface MouseRevealProps {
  children: React.ReactNode;
}

const BRUSH_RADIUS_OPTIONS = [
  { value: 50, label: 'Thin' },
  { value: 100, label: 'Medium' },
  { value: 150, label: 'Thick' },
  { value: 200, label: 'Large' },
] as const;

// Detect Safari and mobile
const isSafari = typeof navigator !== 'undefined' && /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
const isMobile = typeof navigator !== 'undefined' && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

const MouseReveal: React.FC<MouseRevealProps> = ({ children }) => {
  const [points, setPoints] = useState<Point[]>([]);
  const [brushActive, setBrushActive] = useState(false);
  const [brushRadius, setBrushRadius] = useState<number>(BRUSH_RADIUS_OPTIONS[1].value);
  const [thicknessMenuOpen, setThicknessMenuOpen] = useState(false);
  const lastPointRef = useRef<Point | null>(null);
  const pointIdRef = useRef(0);
  const svgRef = useRef<SVGSVGElement>(null);
  const lightLayerRef = useRef<HTMLDivElement>(null);
  const brushControlRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!thicknessMenuOpen) {
      return;
    }

    const onPointerDown = (e: MouseEvent) => {
      if (brushControlRef.current && !brushControlRef.current.contains(e.target as Node)) {
        setThicknessMenuOpen(false);
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setThicknessMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [thicknessMenuOpen]);

  // Track mouse movement only while brush mode is on
  useEffect(() => {
    if (!brushActive) {
      return;
    }

    const minDist = Math.max(6, brushRadius * 0.04);

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      const newPoint: Point = {
        x: e.clientX + window.scrollX,
        y: e.clientY + window.scrollY,
        timestamp: now,
        id: pointIdRef.current++,
        r: brushRadius,
      };

      if (
        !lastPointRef.current ||
        Math.hypot(newPoint.x - lastPointRef.current.x, newPoint.y - lastPointRef.current.y) > minDist
      ) {
        lastPointRef.current = newPoint;
        setPoints((prev) => [...prev, newPoint]);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [brushActive, brushRadius]);

  // Reset all paint strokes
  const resetPaint = () => {
    setPoints([]);
    lastPointRef.current = null;
    pointIdRef.current = 0;
  };

  return (
    <div className="mouse-reveal-container">
      {( isSafari || isMobile) ? (
        // Safari and Mobile: Just show dark mode without effect
        <div className="dark-mode">
          {children}
        </div>
      ) : (
        // Other browsers: SVG mask approach
        <>
          {/* SVG mask definition */}
          <svg ref={svgRef} className="reveal-mask-svg">
            <defs>
              <mask id="reveal-mask">
                <rect width="100%" height="100%" fill="black" />
                {points.map((point) => (
                  <circle
                    key={point.id}
                    cx={point.x}
                    cy={point.y}
                    r={point.r}
                    fill="white"
                  />
                ))}
              </mask>
            </defs>
          </svg>

          {/* Dark mode layer (default/base) */}
          <div className="content-layer dark-layer">
            <div className="dark-mode">
              {children}
            </div>
          </div>

          {/* Light mode layer with mask (revealed on mouse movement) */}
          <div ref={lightLayerRef} className="content-layer light-layer">
            {children}
          </div>
        </>
      )}

      {/* Paint controls — desktop non-Safari only */}
      {!isSafari && !isMobile && (
        <div className="mouse-reveal-controls">
          <div className="brush-control" ref={brushControlRef}>
            <div className={`brush-toggle-wrap${brushActive ? ' brush-toggle-wrap--on' : ''}`}>
              <button
                type="button"
                className="brush-toggle-main"
                onClick={() => setBrushActive((v) => !v)}
                aria-pressed={brushActive}
                aria-label={brushActive ? 'Turn off brush' : 'Turn on brush'}
                title={brushActive ? 'Turn off brush' : 'Turn on brush to reveal light mode'}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 0 0-3-3z" />
                  <path d="M9 8c-2 3-4 3.5-7 4l11 11c.5-3 .5-5-1-7" />
                  <path d="M14.5 17.5 4.5 15" />
                </svg>
                <span className="brush-toggle-label">Brush</span>
              </button>
              <button
                type="button"
                className={`brush-thickness-chevron-btn${thicknessMenuOpen ? ' brush-thickness-chevron-btn--open' : ''}`}
                onClick={() => setThicknessMenuOpen((o) => !o)}
                aria-expanded={thicknessMenuOpen}
                aria-haspopup="listbox"
                aria-label="Brush thickness"
                title="Brush thickness"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>

            {thicknessMenuOpen && (
              <ul className="brush-thickness-menu" role="listbox" aria-label="Brush thickness">
                {BRUSH_RADIUS_OPTIONS.map((opt) => (
                  <li key={opt.value} role="presentation">
                    <button
                      type="button"
                      role="option"
                      aria-selected={brushRadius === opt.value}
                      className={`brush-thickness-option${brushRadius === opt.value ? ' brush-thickness-option--selected' : ''}`}
                      onClick={() => {
                        setBrushRadius(opt.value);
                        setThicknessMenuOpen(false);
                      }}
                    >
                      {opt.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            type="button"
            className="reset-paint-btn"
            onClick={resetPaint}
            aria-label="Reset view"
            title="Reset view"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
              <path d="M21 3v5h-5" />
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
              <path d="M3 21v-5h5" />
            </svg>
            <span className="reset-label">Reset</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default MouseReveal;

