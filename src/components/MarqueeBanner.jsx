import { memo } from 'react';

const skills = [
  'Machine Learning',
  'Deep Learning',
  'Computer Vision',
  'Natural Language Processing (NLP)',
  'Machine Learning Operations (MLOps)',
  'Data Analysis',
  'Web Development',
];

const MarqueeBanner = memo(function MarqueeBanner() {
  return (
    <div className="relative z-20 cursor-default select-none my-16">
      {/* Tech HUD scanning lines on top/bottom */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none z-30 opacity-50" />
      
      <div className="bg-[#0A0A0A] border-y border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.1)] flex flex-col relative overflow-hidden">
        
        {/* Glow behind the marquee */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[150%] bg-cyan-500/10 blur-[50px] rounded-full pointer-events-none" />

        {/* ── Row 1: Outline Glowing Text, scrolling left ── */}
        <div className="py-4 md:py-6 overflow-hidden relative group border-b border-cyan-500/10">
          <div
            className="flex whitespace-nowrap gap-6 md:gap-14 will-change-transform group-hover:[animation-play-state:paused]"
            style={{ animation: 'marquee-scroll-left 28s linear infinite' }}
          >
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-6 md:gap-14 text-lg sm:text-2xl md:text-4xl font-black uppercase items-center">
                {skills.map((skill, j) => (
                  <span key={j} className="flex items-center gap-6 md:gap-14">
                    <span
                      className="text-transparent transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(6,182,212,0.8)]"
                      style={{ WebkitTextStroke: '1px rgba(34,211,238,0.7)' }}
                    >
                      {skill}
                    </span>
                    <span className="text-cyan-400 text-xs drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>

          {/* Edge Fades */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
        </div>

        {/* ── Row 2: Cyber HUD Mono Text, scrolling right ── */}
        <div className="py-3 md:py-4 bg-[#111111]/80 overflow-hidden relative group">
          <div
            className="flex whitespace-nowrap gap-6 md:gap-12 will-change-transform group-hover:[animation-play-state:paused]"
            style={{ animation: 'marquee-scroll-right 32s linear infinite' }}
          >
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-6 md:gap-12 text-sm sm:text-base md:text-lg font-mono uppercase items-center font-bold tracking-[0.08em]">
                {skills.map((skill, j) => (
                  <span key={j} className="flex items-center gap-6 md:gap-12">
                    <span className="text-cyan-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-300">
                      <span className="text-white/30 mr-2.5">[</span>
                      {skill}
                      <span className="text-white/30 ml-2.5">]</span>
                    </span>
                    <span className="text-purple-500/80 text-[10px] tracking-[0.2em]">///</span>
                  </span>
                ))}
              </div>
            ))}
          </div>

          {/* Edge Fades */}
          <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
        </div>

      </div>
    </div>
  );
});

export default MarqueeBanner;
