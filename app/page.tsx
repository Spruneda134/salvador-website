"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [screen, setScreen] = useState(0);
  const animRef = useRef(false);
  const TRANSITION_MS = 1000;

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

  return (
    <div className="h-screen w-full overflow-hidden relative">
      {/* === BACKGROUNDS === */}
<div className="fixed top-0 left-0 w-full h-full bg-blue-100 -z-10" />

      {/* === IMAGE === */}
      <div
        className={`absolute bottom-0 left-1/2 transform transition-all duration-1000 ease-in-out z-30 ${
          screen === 0
            ? "-translate-x-1/2 opacity-100"
            : screen === 1
            ? "-translate-x-[700px] opacity-100"
            : screen >= 2
            ? "-translate-x-[1400px] opacity-0 pointer-events-none"
            : "-translate-x-1/2 opacity-100"
        }`}
      >
        <Image
          src="/images/salvador.png"
          alt="Salvador Pruneda"
          width={600}
          height={600}
          className="w-[600px] h-auto transition-opacity duration-1000"
        />
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
          <div className="flex items-center justify-between max-w-[1140px] w-full mx-auto">
            <div>
              <h1 className="text-8xl font-bold leading-tight pl-10">Salvador</h1>
              <h2 className="text-8xl font-bold leading-tight">Pruneda</h2>
            </div>
            <div>
              <h2 className="text-8xl font-bold leading-tight text-right pr-10">
                Software
              </h2>
              <h2 className="text-8xl font-bold leading-tight text-right">
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
                range of skills across modern frameworks and tools. Each project
                reflects my focus on problem-solving, clean design, and
                delivering impactful solutions for real-world needs.
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

            <div className="w-1/2">
              <div className="bg-gray-300 h-50 w-2/3 mx-auto"></div>
            </div>
          </div>
        </section>

        {/* SCREEN 4 */}
        <section className="flex-shrink-0 w-full h-screen flex flex-col justify-center items-center">
          <div className="flex items-center justify-between max-w-[1140px] w-full mx-auto">
            
            <div className="w-1/2">
              <div className="bg-gray-300 h-50 w-2/3 mx-auto"></div>
            </div>

            <div className="w-1/2 text-left pr-10">
              <h2 className="text-l font-semibold leading-tight">Experience</h2>
              <h3 className="text-4xl font-semibold leading-tight">
                Making An Impact In The Rio Grande Valley
              </h3>
              <p className="mt-2">
As a Software Engineer at RGVision Media in McAllen, TX, I build responsive, production-ready web applications using Next.js, TypeScript, Tailwind CSS, and Supabase. My work has led to faster load times, improved user experiences across devices, and consistent cross-browser performance. Serving the Rio Grande Valley, a predominantly Hispanic community, I take pride in creating digital solutions that make technology more accessible, reliable, and impactful for local businesses and organizations. I also manage full-cycle project delivery, collaborating with stakeholders to ensure solutions meet both technical standards and community needs.
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
      </div>

      {/* === FINAL SCREEN (VERTICAL SCROLL) === */}
      <div
        className="absolute top-0 left-0 w-full transition-transform duration-1000 ease-in-out"
        style={{
          transform:
            screen === 4 ? "translateY(0)" : "translateY(100vh)",
          zIndex: screen === 4 ? 30 : 0,
        }}
      >
        <section className="w-full h-screen flex flex-col justify-center items-center relative bg-red-200">
          <div className="text-center max-w-[800px]">
            <h2 className="text-l font-semibold leading-tight">Contact</h2>
            <h2 className="text-5xl font-bold mb-4">Let’s Connect!</h2>
            <p className="text-lg mb-6">
              I’m always open to new opportunities, collaborations, and conversations about technology, design, and development. Whether you’re looking to build a project, discuss an idea, or just connect, feel free to reach out, I’d love to hear from you. Send me a message through Linkedin, or email me at spruneda134@gmail.com.
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
