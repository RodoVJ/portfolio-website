import { useEffect, useRef, useState } from 'react';
import './DeployPipeline.css';

interface Stage {
  id: string;
  label: string;
  pos: number;
}

const SECTIONS: Array<{ id: string; label: string; offset?: number }> = [
  { id: 'about', label: 'build:about' },
  { id: 'skills', label: 'test:stack' },
  { id: 'experience', label: 'deploy:experience' },
  { id: 'projects', label: 'deploy:projects', offset: -0.05  },
  { id: 'education', label: 'verify:education', offset: -0.08 },
  { id: 'contact', label: 'release:contact' },
];

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

const DeployPipeline = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const stageRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [stages, setStages] = useState<Stage[]>([]);
  const stagesRef = useRef<Stage[]>([]);

  const goToStage = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const compute = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const next = SECTIONS.map((s) => {
        const el = document.getElementById(s.id);
        const top = el ? el.offsetTop : 0;
        const base = max > 0 ? top / max : 0;
        return { id: s.id, label: s.label, pos: clamp01(base + (s.offset ?? 0)) };
      });
      stagesRef.current = next;
      setStages(next);
    };

    compute();
    const t = window.setTimeout(compute, 600);
    window.addEventListener('resize', compute);
    window.addEventListener('load', compute);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener('resize', compute);
      window.removeEventListener('load', compute);
    };
  }, []);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const root = rootRef.current;
      if (!root) return;

      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? clamp01(window.scrollY / max) : 0;
      root.style.setProperty('--progress', String(p));
      root.dataset.complete = p >= 0.995 ? 'true' : 'false';

      const list = stagesRef.current;
      // The "running" stage is the first one we haven't reached yet.
      let runningIndex = list.findIndex((s) => s.pos > p + 0.001);
      if (runningIndex === -1) runningIndex = list.length; // everything passed

      list.forEach((s, i) => {
        const el = stageRefs.current[i];
        if (!el) return;
        let state: string;
        if (p >= s.pos - 0.001) state = 'passed';
        else if (i === runningIndex) state = 'running';
        else state = 'pending';
        if (el.dataset.state !== state) el.dataset.state = state;
      });
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [stages]);

  return (
    <div className="pipeline" ref={rootRef} data-complete="false">
      <div className="pl-head" aria-hidden="true">
        <span className="pl-head-dot" />
        ci · main
      </div>

      <div className="pl-area">
        <div className="pl-line" aria-hidden="true">
          <div className="pl-line-fill" />
        </div>

        {stages.map((s, i) => (
          <button
            type="button"
            className="pl-stage"
            key={s.id}
            data-state="pending"
            ref={(el) => {
              stageRefs.current[i] = el;
            }}
            style={{ top: `${s.pos * 100}%` }}
            onClick={() => goToStage(s.id)}
            aria-label={`Jump to ${s.id} section`}
          >
            <span className="pl-info">
              <span className="pl-name">{s.label}</span>
              <span className="pl-state" />
            </span>
            <span className="pl-node">
              <svg className="pl-check" viewBox="0 0 24 24" width="11" height="11" aria-hidden="true">
                <path
                  d="M5 12.5l4.5 4.5L19 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        ))}
      </div>

      <div className="pl-foot" aria-hidden="true" />
    </div>
  );
};

export default DeployPipeline;
