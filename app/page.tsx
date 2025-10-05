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
  const mouseRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

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
    <div className="h-screen w-full overflow-hidden relative">
      {/* === BACKGROUND === */}
      <div className="fixed top-0 left-0 w-full h-full bg-blue-100 -z-10" />

      {/* === SALVADOR IMAGE === */}
      <div
        className={`absolute bottom-0 left-1/2 transform transition-all duration-1000 ease-in-out z-30 ${
          screen === 0
            ? "-translate-x-1/2 opacity-100"
            : screen === 1
            ? "-translate-x-[700px] delay-200 opacity-100"
            : screen >= 2
            ? "-translate-x-[1400px] delay-200 opacity-0 pointer-events-none"
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
            className="w-auto h-[80vh] object-contain -mb-5 overflow-hidden"
          />
        </div>
      </div>

      {/* === GRAY BOX ANIMATION (screens 2–4) === */}
      <div
        className={`absolute top-1/2 left-1/2 transform transition-all duration-1000 ease-in-out z-30
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
        <section className="flex-shrink-0 w-full h-screen flex flex-col justify-center items-center">
          <div className="flex items-center justify-between max-w-[1140px] w-full mx-auto pb-30 2xl:pb-50">
            <div>
              <h1 className="text-8xl font-bold leading-none pl-15">
                Salvador
              </h1>
              <h2 className="text-8xl font-bold leading-none">Pruneda</h2>
            </div>
            <div>
              <h2 className="text-8xl font-bold leading-none text-right pr-15">
                Software
              </h2>
              <h2 className="text-8xl font-bold leading-none text-right">
                Engineer
              </h2>
            </div>
          </div>
        </section>

        {/* SCREEN 2 */}
        <section className="flex-shrink-0 w-full h-screen flex flex-col justify-center items-center">
          <div className="flex items-center justify-between max-w-[1140px] w-full mx-auto">
            <div className="w-1/2"></div>
            <div className="w-1/2 text-left pr-10">
              <h2 className="text-l font-semibold leading-tight">About Me</h2>
              <h3 className="text-4xl font-semibold leading-tight">
                Bridging Design and Development
              </h3>
              <p className="mt-2">
                Hello! I’m Salvador Pruneda Jr, a software engineer with a
                passion for building responsive, user-friendly applications that
                balance functionality with great design. With experience in
                React, Next.js, TypeScript, and modern UI frameworks, I enjoy
                turning ideas into polished digital experiences. Beyond coding,
                I enjoying playing music on my instruments, working out with
                friends, and watching movies with my family.
              </p>
              <div className="space-x-5 mt-4">
                <button className="bg-gray-200 px-3 py-2 rounded-lg">
                  Resume
                </button>
                <button className="bg-gray-200 px-3 py-2 rounded-lg">
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SCREEN 3 */}
        <section className="flex-shrink-0 w-full h-screen flex flex-col justify-center items-center">
          <div className="flex items-center justify-between max-w-[1140px] w-full mx-auto">
            <div className="w-1/2 text-left pr-10">
              <h2 className="text-l font-semibold leading-tight">
                Projects & Portfolio
              </h2>
              <h3 className="text-4xl font-semibold leading-tight">
                Full-Stack Applications From Design to Deployment
              </h3>
              <p className="mt-2">
                I specialize in designing and developing full-stack web and
                software applications that balance performance, usability, and
                scalability. From creating sleek, responsive user interfaces to
                building robust backend systems, my projects showcase a wide
                range of skills across modern frameworks and tools.
              </p>
            </div>

            <div className="w-1/2"></div>
          </div>
        </section>

        {/* SCREEN 4 */}
        <section className="flex-shrink-0 w-full h-screen flex flex-col justify-center items-center">
          <div className="flex items-center justify-between max-w-[1140px] w-full mx-auto">
            <div className="w-1/2"></div>

            <div className="w-1/2 text-left pr-10">
              <h2 className="text-l font-semibold leading-tight">Experience</h2>
              <h3 className="text-4xl font-semibold leading-tight">
                Making An Impact In The Rio Grande Valley
              </h3>
              <p className="mt-2">
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
        <section className="w-full h-screen flex flex-col justify-center items-center relative bg-red-200">
          <div className="text-center max-w-[800px]">
            <h2 className="text-l font-semibold leading-tight">Contact</h2>
            <h2 className="text-5xl font-bold mb-4">Let’s Connect!</h2>
            <p className="text-lg mb-6">
              I’m always open to collaborations and opportunities. Email me at{" "}
              <b>spruneda134@gmail.com</b>.
            </p>
          </div>
        </section>
      </div>

      {/* === PAGINATION === */}
      <div className="absolute top-1/2 right-10 transform -translate-y-1/2 flex flex-col gap-3 z-50">
        {[0, 1, 2, 3, 4].map((i) => (
          <button
            key={i}
            onClick={() => goToScreen(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              screen === i
                ? "bg-gray-800 scale-125"
                : "bg-gray-400 hover:bg-gray-600"
            }`}
            aria-label={`Go to screen ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
