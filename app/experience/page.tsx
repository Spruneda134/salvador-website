"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface ExperienceItem {
  logo?: string;
  company: string;
  role: string;
  dateRange: string;
  location: string;
  bullets: string[];
  tags: string[];
}

const workExperience: ExperienceItem[] = [
  {
    logo: "/logos/rgvm.png",
    company: "RGVision Media",
    role: "Full Stack Developer",
    dateRange: "Jan 2025 - Present",
    location: "McAllen, Texas, United States",
    bullets: [
      "Oversee updates, performance optimization, and troubleshooting for several high-traffic websites totaling 500k+ monthly visitors.",
      "Reduced initial page load time by 30% through lazy loading, image optimization, and code-splitting in React while preserving a consistent user experience.",
      "Architected a secure B2B exchange platform (RBPX) using Supabase and Next.js with Row Level Security policies to protect confidential business data.",
      "Integrated Stripe Connect subscription billing and Sanity CMS for dynamic content, automating financial and editorial workflows.",
      "Led the full Agile development lifecycle for multiple client projects, translating stakeholder requirements into scalable, deployed solutions.",
    ],
    tags: ["React", "Next.js", "Supabase", "Stripe", "Agile", "Performance"],
  },
  {
    logo: "/logos/rgvm.png",
    company: "RGVision Media / RioPlex Business Exchange",
    role: "UX/UI Developer",
    dateRange: "Sep 2024 - Dec 2024",
    location: "Hybrid",
    bullets: [
      "Designed and prototyped web interfaces in Figma, translating high-fidelity designs into responsive, pixel-perfect HTML5/CSS3 templates.",
      "Developed maintainable frontend themes using HTML, CSS, and JavaScript, ensuring cross-browser compatibility and accessibility.",
      "Improved technical SEO and Core Web Vitals with Lighthouse and SEMrush, generating a +20-point increase in Site Health Score.",
      "Translated complex product requirements into intuitive user flows, maintaining responsive behavior and strict brand consistency.",
    ],
    tags: ["Figma", "HTML", "CSS", "JavaScript", "SEO", "Responsive"],
  },
  {
    logo: "/logos/utrgv.png",
    company: "University of Texas Rio Grande Valley",
    role: "Teaching Assistant",
    dateRange: "Sep 2024 - Dec 2024",
    location: "Edinburg, Texas, United States",
    bullets: [
      "Collaborated with Dr. Zhixiang Chen to enhance CSCI 4333 and CSCI 3333 lab experiences with practical SQL, ER modeling, and algorithm exercises.",
      "Led weekly lab sessions for 100+ undergraduates, supporting hands-on learning in relational databases and data structures.",
      "Mentored students in debugging, query optimization, and clean code practices across database design and algorithms.",
      "Helped improve student performance by 15% through collaborative coding exercises and clear technical explanations.",
    ],
    tags: ["SQL", "Algorithms", "Teaching", "Mentorship", "Database", "Collaboration"],
  },
];

const volunteerExperience: ExperienceItem[] = [
  {
    logo: "/logos/utrgv.png",
    company: "University of Texas Rio Grande Valley",
    role: "Computer Science Academic Tutor",
    dateRange: "Aug 2023 - Dec 2024",
    location: "Edinburg, Texas, United States",
    bullets: [
      "Led PLTL sessions for CSCI 2380, mentoring 150+ undergraduate students in object-oriented programming and data structures.",
      "Reinforced concepts like inheritance, recursion, pointers, and C++ data structures through guided coding exercises.",
      "Encouraged inclusive collaboration using whiteboarding, live code walkthroughs, and step-by-step problem solving.",
      "Contributed measurable improvements in confidence and academic performance by breaking down complex topics into manageable lessons.",
    ],
    tags: ["Tutoring", "C++", "Data Structures", "Leadership", "Peer Learning"],
  },
  {
    logo: "/logos/utrgv.png",
    company: "TexPREP",
    role: "Mentor",
    dateRange: "Jun 2024 - Jul 2024",
    location: "On-site",
    bullets: [
      "Led hands-on STEM workshops for 20 middle school students, inspiring interest in engineering, mathematics, and science.",
      "Collaborated with faculty and college mentors to provide academic guidance and career advice for future STEM pathways.",
      "Created an inclusive, engaging environment that encouraged curiosity, teamwork, and active participation.",
    ],
    tags: ["STEM", "Mentorship", "Communication", "Workshop", "Education"],
  },
  {
    logo: "/logos/frontera.png",
    company: "Frontera Devs",
    role: "Computer Science Mentor",
    dateRange: "Sep 2025 - Oct 2025",
    location: "Remote",
    bullets: [
      "Provided 1:1 and small-group mentorship on career development, UX/UI design, and full-stack web development.",
      "Guided mentees through hands-on coding exercises and a project using Next.js, TypeScript, Tailwind CSS, Flask, and API integration.",
      "Delivered personalized feedback, technical support, and portfolio advice to strengthen real-world development skills.",
    ],
    tags: ["Mentorship", "Next.js", "TypeScript", "Full Stack", "Coaching"],
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 px-4 sm:p-10 flex flex-col items-center">
      <div className="max-w-5xl w-full">
        <div className="pt-12 sm:pt-20 pb-4 sm:pb-8">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight drop-shadow-sm text-center">Experience</h1>
        </div>

        <section className="space-y-6 sm:space-y-8">

          {workExperience.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group bg-white/95 border border-gray-200 shadow-xl rounded-[32px] p-4 sm:p-8 hover:-translate-y-1 hover:shadow-2xl transition-transform duration-300"
            >
              <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                  <div className="flex h-12 sm:h-16 w-12 sm:w-16 flex-shrink-0 items-center justify-center rounded-3xl bg-slate-100 border border-slate-200 overflow-hidden">
                    {item.logo ? (
                      <Image src={item.logo} alt={`${item.company} logo`} width={56} height={56} className="w-full h-full" />
                    ) : (
                      <span className="text-slate-500 font-semibold text-sm">{item.company.slice(0, 2)}</span>
                    )}
                  </div>

                  <div className="min-w-0">
                    <h2 className="text-lg sm:text-3xl font-semibold tracking-tight break-words">{item.role}</h2>
                    <p className="text-sm sm:text-lg text-slate-600 mt-0.5 sm:mt-1 break-words">{item.company}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-0.5 sm:gap-1 text-xs sm:text-sm text-slate-500 lg:text-right flex-shrink-0">
                  <span className="whitespace-nowrap">{item.dateRange}</span>
                  <span className="whitespace-nowrap">{item.location}</span>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-slate-700 text-sm sm:text-base">
                {item.bullets.map((bullet, bulletIndex) => (
                  <p key={bulletIndex} className="flex gap-2 sm:gap-3 leading-6 sm:leading-7">
                    <span className="mt-1.5 sm:mt-1 h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-slate-400 flex-shrink-0" />
                    <span>{bullet}</span>
                  </p>
                ))}
              </div>

              <div className="mt-4 sm:mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2 sm:px-3 py-1 text-xs sm:text-sm text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </section>

        <section className="mt-12 sm:mt-16 space-y-4 sm:space-y-6">
          <div>
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-center">Volunteering & Mentorship</h2>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {volunteerExperience.map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group bg-white/95 border border-gray-200 shadow-xl rounded-[32px] p-4 sm:p-8 hover:-translate-y-1 hover:shadow-2xl transition-transform duration-300"
              >
                <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                    <div className="flex h-12 sm:h-16 w-12 sm:w-16 flex-shrink-0 items-center justify-center rounded-3xl bg-slate-100 border border-slate-200 overflow-hidden">
                      {item.logo ? (
                        <Image src={item.logo} alt={`${item.company} logo`} width={56} height={56} className="w-full h-full" />
                      ) : (
                        <span className="text-slate-500 font-semibold text-xs sm:text-base">{item.company.slice(0, 2)}</span>
                      )}
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-2xl font-semibold tracking-tight break-words">{item.role}</h3>
                      <p className="text-sm sm:text-base text-slate-600 mt-0.5 sm:mt-1 break-words">{item.company}</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-0.5 sm:gap-1 text-xs sm:text-sm text-slate-500 lg:text-right flex-shrink-0">
                    <span className="whitespace-nowrap">{item.dateRange}</span>
                    <span className="whitespace-nowrap">{item.location}</span>
                  </div>
                </div>

                <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-slate-700 text-sm sm:text-base">
                  {item.bullets.map((bullet, bulletIndex) => (
                    <p key={bulletIndex} className="flex gap-2 sm:gap-3 leading-6 sm:leading-7">
                      <span className="mt-1.5 sm:mt-1 h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-slate-400 flex-shrink-0" />
                      <span>{bullet}</span>
                    </p>
                  ))}
                </div>

                <div className="mt-4 sm:mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}