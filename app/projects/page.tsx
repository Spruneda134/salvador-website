"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Inventory Management System",
      description:
        "A Python + Tkinter system that automates inventory tracking with real-time updates.",
      tags: ["Python", "Tkinter", "Automation"],
      image: "/projects/inventory.jpg",
    },
    {
      title: "2D Mystery/Detective Game",
      description:
        "A Unity game featuring turn-based combat, custom mechanics, and a detective narrative.",
      tags: ["Unity", "C#", "Game Dev"],
      image: "/projects/game.jpg",
    },
    {
      title: "RioPlex Business Exchange Website",
      description:
        "UX/UI improvements, push notifications, and feature implementations for a business-investor platform.",
      tags: ["WordPress", "UX/UI", "Frontend"],
      image: "/projects/rioplex.jpg",
    },
    {
      title: "Pokédex Web App",
      description:
        "A modern interactive Pokédex built with Next.js, Tailwind, and Framer Motion.",
      tags: ["Next.js", "React", "Framer Motion"],
      image: "/projects/pokedex.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-10 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-12 tracking-tight drop-shadow-sm pt-20">Projects</h1>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-3xl shadow-xl border overflow-hidden group cursor-pointer"
          >
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3 transition-colors group-hover:text-sky-600">
                {project.title}
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 text-sm bg-gray-100 border border-gray-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}