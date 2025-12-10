import React, { useEffect, useState } from "react";

export const ScrollOrbits: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const p = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(Math.min(Math.max(p, 0), 1));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftRotation = progress * 80;
  const rightRotation = -progress * 100;
  const scale = 0.9 + progress * 0.3; // 0.9 → 1.2

  // diagonal drift:
  //   top-left orbit → top-right
  //   bottom-right orbit → bottom-left
  const leftOffsetX = 100 * progress; // move right
  const leftOffsetY = -100 * progress; // move up

  const rightOffsetX = -120 * progress; // move left
  const rightOffsetY = 110 * progress; // move down

  return (
    <>
      {/* Top-left cluster */}
      <div className="scroll-orbit scroll-orbit-left" aria-hidden="true">
        <svg
          viewBox="0 0 200 200"
          style={{
            transform: `translate3d(${leftOffsetX}px, ${leftOffsetY}px, 0)
                        rotate(${leftRotation}deg)
                        scale(${scale})`,
          }}
        >
          <defs>
            {/* purple glow (matches your accent) */}
            <radialGradient id="orbitGlowLeft" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.95" />
              <stop offset="55%" stopColor="#6366f1" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#111827" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* soft glow base */}
          <circle cx="100" cy="100" r="84" fill="url(#orbitGlowLeft)" />

          {/* outer orbit ring */}
          <circle
            cx="100"
            cy="100"
            r="72"
            fill="none"
            stroke="#4f46e5"
            strokeOpacity="0.55"
            strokeWidth="1.2"
          />
          {/* mid orbit ring */}
          <circle
            cx="100"
            cy="100"
            r="52"
            fill="none"
            stroke="#818cf8"
            strokeOpacity="0.55"
            strokeWidth="1"
            strokeDasharray="4 7"
          />
          {/* inner ring */}
          <circle
            cx="100"
            cy="100"
            r="32"
            fill="none"
            stroke="#a855f7"
            strokeOpacity="0.6"
            strokeWidth="0.9"
            strokeDasharray="2 6"
          />

          {/* nodes distributed on different rings */}
          {/* outer ring nodes */}
          <circle cx="164" cy="92" r="3.2" fill="#c4b5fd" />
          <circle cx="40" cy="118" r="2.8" fill="#a5b4fc" />
          {/* mid ring nodes */}
          <circle cx="138" cy="48" r="2.4" fill="#e5e7ff" />
          <circle cx="60" cy="56" r="2.4" fill="#ddd6fe" />
          {/* inner ring nodes */}
          <circle cx="130" cy="142" r="2.2" fill="#f5d0fe" />
          <circle cx="72" cy="144" r="2.2" fill="#e9d5ff" />
        </svg>
      </div>

      {/* Bottom-right cluster */}
      <div className="scroll-orbit scroll-orbit-right" aria-hidden="true">
        <svg
          viewBox="0 0 200 200"
          style={{
            transform: `translate3d(${rightOffsetX}px, ${rightOffsetY}px, 0)
                        rotate(${rightRotation}deg)
                        scale(${scale})`,
          }}
        >
          <defs>
            {/* magenta / purple to stay on-brand */}
            <radialGradient id="orbitGlowRight" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.95" />
              <stop offset="55%" stopColor="#a855f7" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#020617" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx="100" cy="100" r="82" fill="url(#orbitGlowRight)" />

          {/* outer ring */}
          <circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke="#a855f7"
            strokeOpacity="0.6"
            strokeWidth="1.1"
          />
          {/* mid ring */}
          <circle
            cx="100"
            cy="100"
            r="50"
            fill="none"
            stroke="#c4b5fd"
            strokeOpacity="0.6"
            strokeWidth="1"
            strokeDasharray="5 7"
          />
          {/* inner ring */}
          <circle
            cx="100"
            cy="100"
            r="30"
            fill="none"
            stroke="#fb7185"
            strokeOpacity="0.65"
            strokeWidth="0.9"
            strokeDasharray="3 6"
          />

          {/* nodes */}
          {/* outer */}
          <circle cx="154" cy="74" r="3" fill="#f9a8ff" />
          <circle cx="52" cy="140" r="2.7" fill="#f5d0fe" />
          {/* mid */}
          <circle cx="56" cy="60" r="2.4" fill="#e9d5ff" />
          <circle cx="146" cy="134" r="2.4" fill="#fee2ff" />
          {/* inner */}
          <circle cx="118" cy="44" r="2.2" fill="#fecaca" />
          <circle cx="82" cy="156" r="2.2" fill="#fed7e2" />
        </svg>
      </div>
    </>
  );
};
