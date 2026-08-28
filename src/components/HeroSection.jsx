import { memo, useRef, useState, useEffect } from 'react';
import { Gsap, useGsapReducedMotion, useGsapScroll, useGsapTransform } from '../utils/gsapAnimate';
import { Terminal, Code2, Database, Cpu, Download, ArrowUpRight, Server, Network, Layers, Activity } from 'lucide-react';

// Shared Intl formatter — created once, reused on every tick
const jakartaFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Jakarta',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true,
});

// === LOCATION & TIME BADGE ===
// Uses direct DOM update via ref to avoid React re-renders every second
const LocationTimeBadge = () => {
  const timeRef = useRef(null);

  useEffect(() => {
    const update = () => {
      if (timeRef.current) {
        timeRef.current.textContent = jakartaFormatter.format(new Date());
      }
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-5 font-mono text-xs uppercase tracking-[0.15em] text-white/50">
      <div className="flex items-center gap-2">
        <span className="font-bold text-white/70">Based in Indonesia</span>
      </div>
      <div className="w-[1px] h-3 bg-black/15" />
      <div className="flex items-center gap-1.5 tabular-nums">
        <span className="text-white/40 hidden sm:inline">LOCAL:</span>
        <span ref={timeRef} className="font-bold text-white/70" />
      </div>
    </div>
  );
};

// === DECORATIVE ORBITING ELEMENTS (Left & Right) ===
const OrbitingDecoration = ({ icon: Icon, delay, className, isRevealed, enableAmbientMotion }) => (
  <Gsap.div
    initial={false}
    animate={
      isRevealed
        ? { opacity: 1, y: 0, scale: 1 }
        : { opacity: 0, y: 12, scale: 0.9 }
    }
    transition={{
      opacity: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
      y: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
      scale: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
    }}
    className={`absolute flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-cyan-500/30 bg-[#111111]/80 backdrop-blur-md shadow-[0_10px_30px_rgba(6,182,212,0.2)] ${className}`}
    style={enableAmbientMotion && isRevealed ? {
      animation: `hero-float 5.8s ${delay + 0.35}s ease-in-out infinite`,
      willChange: 'transform',
    } : undefined}
  >
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-transparent" />
    <Icon size={18} className="relative text-cyan-400" />
  </Gsap.div>
);

// === MAIN COMPONENT ===
const HeroSection = memo(function HeroSection({ isRevealed = true }) {
  const containerRef = useRef(null);
  const reduceMotion = useGsapReducedMotion();
  const [enableParallax, setEnableParallax] = useState(false);
  const [enableAmbientMotion, setEnableAmbientMotion] = useState(false);

  const { scrollYProgress } = useGsapScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Subtle scroll parallax
  const bgY = useGsapTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const contentY = useGsapTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  useEffect(() => {
    if (typeof window === 'undefined' || reduceMotion) {
      setEnableParallax(false);
      setEnableAmbientMotion(false);
      return;
    }

    const parallaxMedia = window.matchMedia('(min-width: 1024px) and (hover: hover) and (pointer: fine)');
    const updateParallax = () => {
      setEnableParallax(parallaxMedia.matches);
      setEnableAmbientMotion(parallaxMedia.matches);
    };

    updateParallax();

    if (parallaxMedia.addEventListener) {
      parallaxMedia.addEventListener('change', updateParallax);
    } else {
      parallaxMedia.addListener(updateParallax);
    }

    return () => {
      if (parallaxMedia.removeEventListener) {
        parallaxMedia.removeEventListener('change', updateParallax);
      } else {
        parallaxMedia.removeListener(updateParallax);
      }
    };
  }, [reduceMotion]);

  return (
    <header
      ref={containerRef}
      id="hero-section"
      className="min-h-[100svh] w-full relative bg-[#0A0A0A] selection:bg-cyan-300 selection:text-white overflow-hidden flex flex-col items-center justify-center pt-16 pb-16"
    >
      {/* ── TECHNICAL MICRO-COPY (HUD CORNERS) ── */}
      <div className="absolute top-[80px] left-6 hidden xl:flex flex-col gap-1 font-mono text-[9px] text-cyan-500/50 uppercase tracking-[0.2em] z-30 pointer-events-none">
        <span>SYS.INIT // OK</span>
        <span>MEM_USAGE: 42.8%</span>
      </div>
      <div className="absolute top-[80px] right-6 hidden xl:flex flex-col items-end gap-1 font-mono text-[9px] text-cyan-500/50 uppercase tracking-[0.2em] z-30 pointer-events-none">
        <span>LATENCY: 12ms</span>
        <span>UPLINK_ESTABLISHED</span>
      </div>
      <div className="absolute bottom-12 left-6 hidden xl:flex flex-col gap-1 font-mono text-[9px] text-cyan-500/50 uppercase tracking-[0.2em] z-30 pointer-events-none">
        <span>COORDINATES: [14.02, 102.44]</span>
        <span className="animate-pulse text-cyan-400">SCANNING...</span>
      </div>

      {/* ── BACKGROUND ENGINEERING Grid & Dynamic Glow ── */}
      <Gsap.div
        initial={false}
        animate={isRevealed ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={enableParallax ? { y: bgY } : undefined}
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center"
      >

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.12),transparent_48%),linear-gradient(to_bottom,rgba(6,182,212,0.04),transparent_48%)]" />

        {/* 1. Base Moving Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* CRT Scanline Overlay */}
        <div 
          className="absolute inset-0 z-20 pointer-events-none opacity-20"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '100% 4px' }}
        />

        {/* Radar Sweep */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] pointer-events-none opacity-[0.15] mix-blend-screen"
          style={{ 
            background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(34,211,238,0.3) 60deg, transparent 60deg)',
            animation: 'radar-spin 8s linear infinite'
          }}
        />



        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 18% 18%, rgba(163, 230, 53, 0.14), transparent 44%), radial-gradient(circle at 82% 15%, rgba(132, 204, 22, 0.1), transparent 42%), radial-gradient(circle at 50% 85%, rgba(190, 242, 100, 0.09), transparent 50%), linear-gradient(135deg, rgba(163, 230, 53, 0.02), rgba(234, 179, 8, 0.01))'
          }}
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] max-w-[920px] max-h-[920px] rounded-full border border-cyan-500/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72vw] h-[72vw] max-w-[720px] max-h-[720px] rounded-full border border-cyan-500/10" />

        {/* 3. Dynamic Organic Glowing Orbs — CSS animations for zero JS overhead */}
        {/* Replaced heavy blur filters with radial gradients for massive performance gains */}
        <div
          className="absolute top-1/2 left-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full opacity-[0.25] bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.8)_0%,transparent_60%)]"
          style={enableAmbientMotion && isRevealed ? {
            animation: 'hero-orb-1 10s ease-in-out infinite',
            willChange: 'transform',
          } : { transform: 'translate3d(-50%, -50%, 0)' }}
        />
        <div
          className="absolute top-1/4 right-[20%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full opacity-[0.2] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.8)_0%,transparent_60%)]"
          style={enableAmbientMotion && isRevealed ? {
            animation: 'hero-orb-2 12s 2s ease-in-out infinite',
            willChange: 'transform',
          } : undefined}
        />
        <div
          className="absolute bottom-[10%] left-[20%] w-[45vw] h-[45vw] max-w-[650px] max-h-[650px] rounded-full opacity-[0.15] bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.8)_0%,transparent_60%)]"
          style={enableAmbientMotion && isRevealed ? {
            animation: 'hero-orb-3 15s 1s ease-in-out infinite',
            willChange: 'transform',
          } : undefined}
        />

        {/* 4. Radial Vignette to blend gracefully with section edges */}
        <div className="absolute inset-0 bg-[#0A0A0A] [mask-image:radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-75" />

        {/* Soft bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
      </Gsap.div>

      {/* ── MAIN CONTENT (PERFECTLY CENTERED) ── */}
      {/* Parallax wrapper (scroll-driven y only) */}
      <Gsap.div
        style={enableParallax ? { y: contentY } : undefined}
        className="relative z-10 w-full max-w-[1200px] px-5 sm:px-6 md:px-12 flex flex-col items-center text-center mt-8"
      >
        {/* Iris reveal + entrance wrapper */}
        <Gsap.div
          initial={false}
          animate={isRevealed
            ? { opacity: 1, y: 0, filter: 'blur(0px)', clipPath: 'circle(150% at 50% 100%)' }
            : { opacity: 0, y: 14, filter: 'blur(3px)', clipPath: 'circle(0% at 50% 100%)' }
          }
          transition={{
            clipPath: { duration: 1.25, ease: [0.2, 0.95, 0.3, 1] },
            opacity: { duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
            y: { duration: 1.0, delay: 0.08, ease: [0.22, 1, 0.36, 1] },
            filter: { duration: 0.8, delay: 0.1 },
          }}
          className="w-full flex flex-col items-center"
        >

        {/* Location & Time — visible at top */}
        <Gsap.div
          initial={false}
          animate={isRevealed ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="mb-3 md:mb-4"
        >
          <LocationTimeBadge />
        </Gsap.div>

        {/* 2. Massive Clear Typography */}
        <div className="flex flex-col items-center justify-center relative w-full mb-4 md:mb-5">
          {/* Left Decoration */}
          <OrbitingDecoration icon={Code2} delay={0.15} className="left-0 sm:left-2 lg:left-16 top-2" isRevealed={isRevealed} enableAmbientMotion={enableAmbientMotion} />
          <OrbitingDecoration icon={Terminal} delay={0.45} className="left-6 sm:left-12 lg:left-28 bottom-8 hidden sm:flex" isRevealed={isRevealed} enableAmbientMotion={enableAmbientMotion} />
          <OrbitingDecoration icon={Server} delay={0.35} className="left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 hidden md:flex" isRevealed={isRevealed} enableAmbientMotion={enableAmbientMotion} />
          <OrbitingDecoration icon={Activity} delay={0.55} className="left-20 sm:left-32 lg:left-48 -top-8 hidden lg:flex" isRevealed={isRevealed} enableAmbientMotion={enableAmbientMotion} />

          <Gsap.h1
            initial={false}
            animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(4.25rem,14vw,9rem)] font-black uppercase tracking-tight text-white leading-[0.88]"
          >
            FIRDAUS
          </Gsap.h1>

          <Gsap.h1
            initial={false}
            animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(4.25rem,14vw,9rem)] font-black uppercase tracking-tight text-transparent leading-[0.88] mt-2 sm:mt-0 font-outline-fallback"
          >
            ZICKRIAN
          </Gsap.h1>

          {/* Right Decoration */}
          <OrbitingDecoration icon={Database} delay={0.28} className="right-0 sm:right-2 lg:right-16 top-10" isRevealed={isRevealed} enableAmbientMotion={enableAmbientMotion} />
          <OrbitingDecoration icon={Cpu} delay={0.58} className="right-6 sm:right-12 lg:right-28 -bottom-2 hidden sm:flex" isRevealed={isRevealed} enableAmbientMotion={enableAmbientMotion} />
          <OrbitingDecoration icon={Network} delay={0.42} className="right-2 sm:right-4 lg:right-6 top-1/3 hidden md:flex" isRevealed={isRevealed} enableAmbientMotion={enableAmbientMotion} />
          <OrbitingDecoration icon={Layers} delay={0.65} className="right-24 sm:right-36 lg:right-56 -top-4 hidden lg:flex" isRevealed={isRevealed} enableAmbientMotion={enableAmbientMotion} />
        </div>

        {/* 3. Clean Slogan with Green Accent */}
        <Gsap.div
          initial={false}
          animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.38, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-2 mt-0"
        >
          <h2 className="text-[clamp(1.35rem,4.2vw,2.25rem)] font-bold text-white/80 tracking-tight flex items-center justify-center flex-wrap gap-2 px-2">
            Architecting <span className="bg-cyan-400/30 px-2 rounded-md ring-1 ring-cyan-500/20">Intelligent</span> Paradigms<span className="text-cyan-500 font-extrabold -ml-1">.</span>
          </h2>
          <p className="font-sans text-base text-white/60 max-w-xl leading-7 mt-2 px-4">
            AI Engineer & Full-Stack Developer specializing in high-performance, scalable systems.
          </p>
        </Gsap.div>

        {/* 4. CTA Buttons */}
        <Gsap.div
          initial={false}
          animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ delay: 0.5, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mt-5"
        >
          <button
            onClick={() => document.getElementById('project-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-cyan-600 transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(34,211,238,0.7),inset_0_0_15px_rgba(34,211,238,0.6)]"
          >
            <span className="flex items-center gap-2 drop-shadow-[0_0_8px_rgba(34,211,238,1)]">
              View Projects <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button>
          <a
            href="/cv.pdf"
            download
            className="group flex items-center gap-2 bg-transparent text-white border-2 border-white/20 px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider hover:bg-black hover:text-cyan-400 transition-all duration-300"
          >
            Download CV <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
        </Gsap.div>



        </Gsap.div>

      </Gsap.div>
    </header>
  );
});

export default HeroSection;
