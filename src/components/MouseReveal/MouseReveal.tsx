import { useEffect, useRef, useState } from 'react';
import './MouseReveal.css';

interface Point {
  x: number;
  y: number;
  timestamp: number;
  id: number;
}

interface MouseRevealProps {
  children: React.ReactNode;
}

// Detect Safari and mobile
const isSafari = typeof navigator !== 'undefined' && /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
const isMobile = typeof navigator !== 'undefined' && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

const MouseReveal: React.FC<MouseRevealProps> = ({ children }) => {
  const [points, setPoints] = useState<Point[]>([]);
  const lastPointRef = useRef<Point | null>(null);
  const pointIdRef = useRef(0);
  const svgRef = useRef<SVGSVGElement>(null);
  const lightLayerRef = useRef<HTMLDivElement>(null);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      const newPoint: Point = {
        x: e.clientX + window.scrollX,
        y: e.clientY + window.scrollY,
        timestamp: now,
        id: pointIdRef.current++,
      };

      // Only add point if it's far enough from the last point (for performance)
      if (!lastPointRef.current || 
          Math.hypot(newPoint.x - lastPointRef.current.x, newPoint.y - lastPointRef.current.y) > 10) {
        lastPointRef.current = newPoint;
        setPoints((prev) => [...prev, newPoint]);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Update SVG size



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
                {points.map((point) => {
                  const radius = 250;

                  return (
                    <circle
                      key={point.id}
                      cx={point.x}
                      cy={point.y}
                      r={radius}
                      fill="white"
                    />
                  );
                })}
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

      {/* Reset button - only show on desktop non-Safari browsers */}
      {!isSafari && !isMobile && (
        <button 
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
          >
            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
            <path d="M21 3v5h-5"/>
            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
            <path d="M3 21v-5h5"/>
          </svg>
          <span className="reset-label">Reset</span>
        </button>
      )}
    </div>
  );
};

export default MouseReveal;

