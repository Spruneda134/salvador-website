"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PortfolioPage() {
  const portfolioItems = [
    {
      title: "AHSTI",
      image: "/portfolio/1.png",
      website: "https://ahsti.org/",
    },
    {
      title: "Vida Careers",
      image: "/portfolio/2.png",
      website: "https://vidacareers.org/",
    },
    {
      title: "RGV Partnership",
      image: "/portfolio/3.png",
      website: "https://rgvpartnership.com/",
    },
    {
      title: "Peña Eye",
      image: "/portfolio/4.png",
      website: "https://penaeye.com/",
    },
    {
      title: "Lone Star Shredding",
      image: "/portfolio/5.png",
      website: "https://lonestarshredding.com/",
    },
    {
      title: "Southern Bright Boot",
      image: "/portfolio/6.png",
      website: "https://southernbrightboot.com/",
    },
    {
      title: "Statewide Insurance RGV",
      image: "/portfolio/7.png",
      website: "https://statewideinsurancergv.com/",
    },
    {
      title: "NAM TX",
      image: "/portfolio/8.png",
      website: "https://namtx.us/",
    },
    {
      title: "HCH Realty",
      image: "/portfolio/9.png",
      website: "https://hchrealty.us/",
    },
    {
      title: "Hope Insurance",
      image: "/portfolio/10.png",
      website: "https://hopeins.us/",
    },
    {
      title: "Framework Homes",
      image: "/portfolio/11.png",
      website: "https://frameworkhomes.us/",
    },
    {
      title: "VMK Companies",
      image: "/portfolio/12.png",
      website: "https://vmkcompanies.com/",
    },
    {
      title: "AOTREC",
      image: "/portfolio/13.png",
      website: "https://aotrec.com/",
    },
    {
      title: "La Victoria Adult Day Care Centers",
      image: "/portfolio/14.png",
      website: "https://trial.lavictoriaadultdaycarecenters.com/",
    },
    {
      title: "UCA STX",
      image: "/portfolio/15.png",
      website: "https://ucastx.com/",
    },
    {
      title: "LTR RGV",
      image: "/portfolio/16.png",
      website: "https://ltrrgv.com/",
    },
    {
      title: "Walter Reyna",
      image: "/portfolio/17.png",
      website: "https://walterreyna.com/",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 px-4 sm:p-10 flex flex-col items-center">
      <h1 className="text-3xl sm:text-5xl font-bold mb-8 sm:mb-12 tracking-tight drop-shadow-sm pt-12 sm:pt-20 text-center">Portfolio</h1>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 max-w-7xl w-full">
        {portfolioItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-3xl shadow-xl border overflow-hidden group cursor-pointer"
          >
            <div className="relative h-40 sm:h-56 w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-2xl font-semibold mb-4 sm:mb-6 text-center transition-colors group-hover:text-sky-600">
                {item.title}
              </h2>

              <div className="flex gap-2 sm:gap-4 justify-center">
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 sm:px-4 py-2 text-sm sm:text-base bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}