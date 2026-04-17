"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const projects = [
    {
      title: "RioPlex Business Exchange",
      description:
        "As a Co-Founder of RBPX, I built an online platform designed to connect small business owners in regional markets—starting with Texas—with local buyers and investors. RBPX provides a private, structured environment for confidential business listings, exploring investment opportunities, and facilitating secure communication and deal-making.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Stripe", "Vercel"],
      image: "/projects/rioplex.jpg",
      github: "https://github.com/yourusername/rpbx", // Replace with actual GitHub link
      website: "https://rioplex.com", // Replace with actual website link
    },
    {
      title: "Pokédex Web App",
      description:
        "Developed a mobile-first full-stack Pokédex web app that lets users explore and interact with Pokémon data through an AI-powered interface. The frontend provides a responsive and dynamic Pokédex-like experience, while the backend integrates OpenAI's API to generate natural Pokémon responses.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Flask", "OpenAI API", "Render", "Vercel"],
      image: "/projects/pokedex.jpg",
      github: "https://github.com/yourusername/pokedex-backend", // Replace with actual GitHub link
      website: "https://pokedex-project.com", // Replace with actual website link
    },
    {
      title: "Schedulr",
      description:
        "Developed a comprehensive mobile productivity app for students using Swift and Xcode, with Firebase serving as the backend database. The app features secure user authentication and brings together scheduling, planning, and to-do list tools into a single, streamlined platform designed to improve academic organization.",
      tags: ["Swift", "Xcode", "Firebase", "iOS"],
      image: "/projects/schedulr.jpg",
      github: "https://github.com/yourusername/schedulr", // Replace with actual GitHub link
      presentation: "https://presentation-link.com", // Replace with actual presentation link
    },
    {
      title: "Chrono Crime",
      description:
        "Developed a 2D mystery investigation game in Unity featuring a turn-based combat system that emphasizes strategic decision-making during encounters with suspects and adversaries. Designed core gameplay mechanics, character interactions, and combat logic to create an engaging, narrative-driven experience.",
      tags: ["Unity", "C#"],
      image: "/projects/chrono-crime.jpg",
      github: "https://github.com/yourusername/chrono-crime", // Replace with actual GitHub link
    },
    {
      title: "Instagram Clone",
      description:
        "Developed a fully functional Instagram-style web application using Ruby on Rails, featuring robust user authentication, secure sessions, and profile management. Implemented core social features including image uploading, post creation, likes, comments, and a follow/unfollow system.",
      tags: ["Ruby on Rails", "PostgreSQL"],
      image: "/projects/instagram-clone.jpg",
      github: "https://github.com/yourusername/instagram-clone", // Replace with actual GitHub link
    },
    {
      title: "Inventory Management System",
      description:
        "Developed a Python-based Inventory Management System designed to help businesses efficiently manage stock levels and track product transactions. The system provides secure user authentication, real-time inventory updates, and automated stock adjustments.",
      tags: ["Python", "Tkinter"],
      image: "/projects/inventory.jpg",
      github: "https://github.com/yourusername/inventory-management", // Replace with actual GitHub link
      presentation: "https://presentation-link.com", // Replace with actual presentation link
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-10 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-12 tracking-tight drop-shadow-sm pt-20">Projects</h1>

      {/* PROJECTS LIST */}
      <div className="max-w-7xl w-full space-y-12">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`flex flex-col lg:flex-row ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-white rounded-3xl shadow-xl border overflow-hidden group cursor-pointer`}
          >
            <div className="relative lg:w-1/2 h-64 lg:h-auto overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="lg:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-3xl font-semibold mb-4 transition-colors group-hover:text-sky-600">
                {project.title}
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 text-sm bg-gray-100 border border-gray-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
                >
                  GitHub
                </a>
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
                  >
                    Website
                  </a>
                )}
                {project.presentation && (
                  <a
                    href={project.presentation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors font-medium"
                  >
                    Presentation
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}