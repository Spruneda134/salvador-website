"use client";
import { motion } from "framer-motion";

export default function ExperiencePage() {
  const experience = [
    {
      role: "Peer-Led Team Learning (PLTL) Leader",
      company: "University of Texas Rio Grande Valley",
      duration: "Aug 2023 – Present",
      description:
        "Lead Computer Science II sessions, explain complex concepts, guide students through problem‑solving, and foster an inclusive learning environment.",
      tags: ["Teaching", "Leadership", "Java", "Communication"],
    },
    {
      role: "UX/UI Developer (Intern)",
      company: "RGVision Media / RioPlex Business Exchange",
      duration: "2024",
      description:
        "Improved UX/UI, implemented push notifications, created dynamic user-focused features, optimized mobile layouts, and contributed to design strategy.",
      tags: ["UX/UI", "WordPress", "Responsive Design", "HTML/CSS"],
    },
    {
      role: "Software Developer (Projects)",
      company: "Independent",
      duration: "2021 – Present",
      description:
        "Built production-level tools including an inventory system, multi-page web apps, interactive Python and Unity applications, and a polished Next.js Pokédex.",
      tags: ["Python", "Next.js", "Unity", "React", "Full Stack"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-10 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-12 tracking-tight drop-shadow-sm pt-20">Experience</h1>

      <div className="max-w-4xl w-full flex flex-col gap-10">
        {experience.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-white rounded-3xl shadow-xl border p-8 hover:shadow-2xl transition-all duration-300"
          >
            <h2 className="text-3xl font-semibold mb-1">{item.role}</h2>
            <h3 className="text-lg text-gray-600 mb-2">{item.company}</h3>
            <p className="text-sm text-gray-500 mb-4">{item.duration}</p>
            <p className="text-gray-700 leading-relaxed mb-4">{item.description}</p>

            <div className="flex flex-wrap gap-2 mt-2">
              {item.tags.map((tag, j) => (
                <span
                  key={j}
                  className="px-3 py-1 text-sm bg-gray-100 border border-gray-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
