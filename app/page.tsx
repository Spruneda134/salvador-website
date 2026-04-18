"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [screen, setScreen] = useState(0);
  const animRef = useRef(false);
  const TRANSITION_MS = 1000;

  // === WHEEL NAVIGATION ===
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (animRef.current) return;

      setScreen((prev) => {
        const maxScreen = 4;
        const next =
          e.deltaY > 0 ? Math.min(prev + 1, maxScreen) : Math.max(prev - 1, 0);

        if (next !== prev) {
          animRef.current = true;
          setTimeout(() => (animRef.current = false), TRANSITION_MS + 50);
        }

        return next;
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  const goToScreen = (index: number) => {
    if (index !== screen && !animRef.current) setScreen(index);
  };

  // === MOUSE MOTION FOR SALVADOR IMAGE ===
  const imageInnerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
const mouseRef = useRef({ x: 0, y: 0 });

useEffect(() => {
  mouseRef.current = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  };
}, []);

  useEffect(() => {
    const update = () => {
      rafRef.current = null;
      const el = imageInnerRef.current;
      if (!el) return;

      // only move when Salvador image is visible (screen 0 or 1)
      if (screen > 1) {
        el.style.transform = "translate3d(0, 0, 0)";
        return;
      }

      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = mouseRef.current.x - cx;
      const dy = mouseRef.current.y - cy;

      const rx = dx / rect.width;
      const ry = dy / rect.height;

      const MAX_X = 12; // subtle horizontal motion
      const MAX_Y = 10; // subtle vertical motion

      const tx = -rx * MAX_X;
      const ty = -ry * MAX_Y;

      el.style.transform = `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(
        2
      )}px, 0)`;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (rafRef.current === null) rafRef.current = requestAnimationFrame(update);
    };

    const handleLeave = () => {
      mouseRef.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      if (rafRef.current === null) rafRef.current = requestAnimationFrame(update);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [screen]);

  return (
    <>
      {/* MOBILE LAYOUT (hidden on md and up) */}
      <div className="md:hidden w-full bg-blue-100 min-h-screen overflow-y-auto">
        {/* Hero Section */}
        <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 pt-12 pb-8 bg-gradient-to-b from-blue-100 to-white">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-2">Salvador</h1>
            <h2 className="text-5xl font-bold mb-6">Pruneda</h2>
            <p className="text-2xl font-semibold text-gray-700">Software Engineer</p>
          </div>
          
          <Image
            src="/images/salvador.png"
            alt="Salvador Pruneda"
            width={500}
            height={500}
            className="w-64 h-64 object-contain mb-8"
          />

          <div className="space-y-3 w-full max-w-xs">
            <a href="#about" className="block bg-blue-600 text-white py-3 rounded-lg text-center font-semibold hover:bg-blue-700">
              Learn More
            </a>
            <a href="#contact" className="block bg-gray-300 text-black py-3 rounded-lg text-center font-semibold hover:bg-gray-400">
              Get In Touch
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-white">
          <div className="max-w-md text-center">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Hello! I'm a software engineer with a passion for building responsive, user-friendly applications. I specialize in React, Next.js, TypeScript, and modern frameworks.
            </p>
            <div className="flex gap-3">
              <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700">
                Resume
              </button>
              <button className="flex-1 bg-gray-300 text-black py-2 rounded-lg font-semibold hover:bg-gray-400">
                LinkedIn
              </button>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gray-50">
          <div className="max-w-md text-center">
            <h2 className="text-4xl font-bold mb-4">Projects</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Full-stack web applications designed with modern frameworks and best practices. From sleek interfaces to robust backends.
            </p>
            <a href="/portfolio" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
              View Portfolio
            </a>
          </div>
        </section>

        {/* Experience Section */}
        <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-white">
          <div className="max-w-md text-center">
            <h2 className="text-4xl font-bold mb-4">Experience</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Software Engineer at RGVision Media, building production-ready applications with Next.js, TypeScript, and Tailwind CSS.
            </p>
            <a href="/experience" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
              View Experience
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-red-300 to-red-200">
          <div className="max-w-md text-center">
            <h2 className="text-4xl font-bold mb-4">Let's Connect!</h2>
            <p className="text-lg text-gray-800 leading-relaxed mb-8">
              I'm always open to collaboration and new opportunities.
            </p>
            <a href="mailto:spruneda134@gmail.com" className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
              Send Me an Email
            </a>
          </div>
        </section>
      </div>

      {/* DESKTOP LAYOUT (hidden on mobile) */}
      <div className="hidden md:block h-screen w-full overflow-hidden relative">
      {/* === BACKGROUND === */}
      <div className="fixed top-0 left-0 w-full h-full bg-blue-100 -z-10" />

      {/* === SALVADOR IMAGE === */}
      <div
        className={`absolute bottom-0 left-1/2 transform transition-all duration-1000 ease-in-out z-30 ${
          screen === 0
            ? "-translate-x-1/2 opacity-100"
            : screen === 1
            ? "sm:-translate-x-[700px] -translate-x-1/2 delay-200 opacity-100"
            : screen >= 2
            ? "sm:-translate-x-[1400px] -translate-x-1/2 delay-200 opacity-0 pointer-events-none"
            : "-translate-x-1/2 delay-200 opacity-100"
        }`}
      >
        <div
          ref={imageInnerRef}
          className="transition-transform duration-300 ease-out will-change-transform"
        >
          <Image
            src="/images/salvador.png"
            alt="Salvador Pruneda"
            width={1000}
            height={1000}
            className="w-auto h-[60vh] sm:h-[80vh] object-contain -mb-2 sm:-mb-5 overflow-hidden"
          />
        </div>
      </div>

      {/* === GRAY BOX ANIMATION (screens 2–4) === */}
      <div
        className={`hidden md:flex absolute top-1/2 left-1/2 transform transition-all duration-1000 ease-in-out z-30
        ${
          screen === 2
            ? "translate-x-1/2 opacity-100 delay-0"
            : screen === 3
            ? "-translate-x-[540px] opacity-100 delay-200"
            : screen === 4
            ? "-translate-x-[1400px] opacity-0 pointer-events-none delay-500"
            : "translate-x-[1400px] opacity-0 pointer-events-none delay-0"
        }`}
      >
        <div className="bg-gray-300 h-[300px] w-[300px] flex items-center justify-center rounded-xl shadow-md">
          <p className="text-xl font-semibold text-gray-700">
            This is getting replaced
          </p>
        </div>
      </div>

      {/* === HORIZONTAL SCREENS (0–3) === */}
      <div
        className="flex h-screen transition-transform duration-1000 ease-in-out"
        style={{
          transform:
            screen <= 3
              ? `translateX(-${screen * 100}vw)`
              : `translateX(-300vw)`,
        }}
      >
        {/* SCREEN 1 */}
        <section className="flex-shrink-0 w-full h-screen flex flex-col justify-center items-center px-4 sm:px-0">
          <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between max-w-[1140px] w-full mx-auto gap-4 sm:gap-0">
            <div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold leading-none">
                Salvador
              </h1>
              <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold leading-none">Pruneda</h2>
            </div>
            <div>
              <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold leading-none text-right">
                Software
              </h2>
              <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold leading-none text-right">
                Engineer
              </h2>
            </div>
          </div>
        </section>

        {/* SCREEN 2 */}
        <section className="flex-shrink-0 w-full h-screen flex flex-col justify-center items-center px-4 sm:px-0">
          <div className="flex flex-col sm:flex-row items-center justify-between max-w-[1140px] w-full mx-auto gap-8 sm:gap-4">
            <div className="hidden sm:block w-1/2"></div>
            <div className="w-full sm:w-1/2 text-left">
              <h2 className="text-xs sm:text-sm font-semibold leading-tight uppercase">About Me</h2>
              <h3 className="text-2xl sm:text-4xl font-semibold leading-tight mt-2">
                Bridging Design and Development
              </h3>
              <p className="mt-4 text-sm sm:text-base leading-relaxed">
                Hello! I’m Salvador Pruneda Jr, a software engineer with a
                passion for building responsive, user-friendly applications that
                balance functionality with great design. With experience in
                React, Next.js, TypeScript, and modern UI frameworks, I enjoy
                turning ideas into polished digital experiences. Beyond coding,
                I enjoying playing music on my instruments, working out with
                friends, and watching movies with my family.
              </p>
              <div className="space-x-3 sm:space-x-5 mt-6 flex flex-wrap gap-3">
                <button className="bg-gray-200 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base hover:bg-gray-300 transition-colors">
                  Resume
                </button>
                <button className="bg-gray-200 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base hover:bg-gray-300 transition-colors">
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SCREEN 3 */}
        <section className="flex-shrink-0 w-full h-screen flex flex-col justify-center items-center px-4 sm:px-0">
          <div className="flex flex-col sm:flex-row items-center justify-between max-w-[1140px] w-full mx-auto gap-8 sm:gap-4">
            <div className="w-full sm:w-1/2 text-left">
              <h2 className="text-xs sm:text-sm font-semibold leading-tight uppercase">
                Projects & Portfolio
              </h2>
              <h3 className="text-2xl sm:text-4xl font-semibold leading-tight mt-2">
                Full-Stack Applications From Design to Deployment
              </h3>
              <p className="mt-4 text-sm sm:text-base leading-relaxed">
                I specialize in designing and developing full-stack web and
                software applications that balance performance, usability, and
                scalability. From creating sleek, responsive user interfaces to
                building robust backend systems, my projects showcase a wide
                range of skills across modern frameworks and tools.
              </p>
            </div>

            <div className="hidden sm:block w-1/2"></div>
          </div>
        </section>

        {/* SCREEN 4 */}
        <section className="flex-shrink-0 w-full h-screen flex flex-col justify-center items-center px-4 sm:px-0">
          <div className="flex flex-col sm:flex-row items-center justify-between max-w-[1140px] w-full mx-auto gap-8 sm:gap-4">
            <div className="hidden sm:block w-1/2"></div>

            <div className="w-full sm:w-1/2 text-left">
              <h2 className="text-xs sm:text-sm font-semibold leading-tight uppercase">Experience</h2>
              <h3 className="text-2xl sm:text-4xl font-semibold leading-tight mt-2">
                Making An Impact In The Rio Grande Valley
              </h3>
              <p className="mt-4 text-sm sm:text-base leading-relaxed">
                As a Software Engineer at RGVision Media, I build responsive,
                production-ready web applications using Next.js, TypeScript,
                Tailwind CSS, and Supabase. My work improves load times and
                enhances accessibility across devices for local businesses.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* === FINAL SCREEN (VERTICAL SCROLL) === */}
      <div
        className="absolute top-0 left-0 w-full transition-transform duration-1000 ease-in-out"
        style={{
          transform: screen === 4 ? "translateY(0)" : "translateY(100vh)",
          zIndex: screen === 4 ? 30 : 0,
        }}
      >
        <section className="w-full h-screen flex flex-col justify-center items-center relative bg-red-200 px-4">
          <div className="text-center max-w-[800px]">
            <h2 className="text-xs sm:text-sm font-semibold leading-tight uppercase">Contact</h2>
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 mt-3">Let's Connect!</h2>
            <p className="text-base sm:text-lg mb-6 leading-relaxed">
              I’m always open to collaborations and opportunities. Email me at{" "}
              <b>spruneda134@gmail.com</b>.
            </p>
          </div>
        </section>
      </div>

      {/* === PAGINATION === */}
      <div className="fixed bottom-4 right-4 sm:fixed sm:top-1/2 sm:right-10 sm:transform sm:-translate-y-1/2 flex flex-row sm:flex-col gap-2 sm:gap-3 z-50 bg-white/30 backdrop-blur-sm p-3 rounded-full sm:bg-transparent sm:p-0 sm:backdrop-blur-none">
        {[0, 1, 2, 3, 4].map((i) => (
          <button
            key={i}
            onClick={() => goToScreen(i)}
            className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
              screen === i
                ? "bg-gray-800 scale-125"
                : "bg-gray-400 hover:bg-gray-600"
            }`}
            aria-label={`Go to screen ${i + 1}`}
          />
        ))}
      </div>
      </div>
    </>
  );
}
