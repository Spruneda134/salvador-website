"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function EducationPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const educationItems = [
    {
      institution: "Texas A&M University",
      shortName: "TAMU",
      degree: "Master of Computer Science",
      period: "Fall 2026 - Ongoing",
      colors: { primary: "#500000", secondary: "#3A0000" },
      logo: "🐾",
      coursework: ["Advanced Algorithms", "Machine Learning", "Distributed Systems"],
    },
    {
      institution: "University of Texas Rio Grande Valley",
      shortName: "UTRGV",
      degree: "Bachelor of Science in Computer Science",
      period: "Fall 2022 - Fall 2024",
      colors: { primary: "#F05023", secondary: "#C93A14" },
      logo: "🦂",
      coursework: ["Data Structures", "Software Engineering", "Operating Systems"],
    },
    {
      institution: "South Texas College",
      shortName: "STC",
      degree: "Interdisciplinary Studies",
      period: "Spring 2019 - Fall 2021",
      colors: { primary: "#0033A0", secondary: "#00226B" },
      logo: "🦅",
      coursework: ["Calculus I & II", "University Physics", "Intro to Programming"],
    },
  ];

  return (
    <div ref={containerRef} className="relative bg-black">
      {/* Fixed global title */}
      <motion.div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 mix-blend-difference">
        <h1 className="text-5xl tracking-tight font-bold text-white drop-shadow-sm pt-20 mb-12">
          Education
        </h1>
      </motion.div>

      {/* Stacking Sections */}
      {educationItems.map((item, index) => {
        return (
          <div
            key={index}
            className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
            style={{
              background: `linear-gradient(145deg, ${item.colors.primary} 0%, ${item.colors.secondary} 100%)`,
            }}
          >
            {/* Massive Background Text for Depth */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.1, scale: 1 }}
              transition={{ duration: 1 }}
              className="absolute -right-20 -bottom-20 text-[20vw] font-black text-white leading-none select-none pointer-events-none"
            >
              {item.shortName}
            </motion.div>

            {/* Main Content Container */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              
              {/* Left Column: Logo & Hero Text */}
              <div className="flex flex-col items-start">
                <motion.div
                  initial={{ opacity: 0, x: -50, rotate: -20 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                  viewport={{ once: false, margin: "-20%" }}
                  transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
                  className="text-8xl md:text-9xl mb-6 bg-white/10 p-6 rounded-3xl backdrop-blur-sm border border-white/20 shadow-2xl"
                >
                  {item.logo}
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-5xl md:text-6xl font-black text-white leading-tight mb-4 tracking-tight"
                >
                  {item.institution}
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="inline-block px-6 py-2 rounded-full bg-white text-black font-bold tracking-wider text-sm mb-6 shadow-xl"
                >
                  {item.period}
                </motion.div>
              </div>

              {/* Right Column: Details Glass Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-20%" }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
              >
                {/* Decorative accent line */}
                <div className="absolute top-0 left-0 w-2 h-full bg-white/40" />

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                  {item.degree}
                </h3>

                <div className="space-y-4">
                  <h4 className="text-sm uppercase tracking-widest text-white/60 font-semibold mb-4">
                    Highlighted Coursework
                  </h4>
                  
                  <div className="flex flex-wrap gap-3">
                    {item.coursework.map((course, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                        className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium border border-white/30 hover:bg-white/30 transition-colors"
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Scroll indicator - hides on the last item */}
            {index < educationItems.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
              >
                <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"
                />
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
}