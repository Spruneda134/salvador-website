"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PortfolioPage() {
  const portfolioItems = [
    {
      title: "AHSTI",
      image: "/portfolio/ahsti.jpg",
      website: "https://ahsti.org/",
    },
    {
      title: "Vida Careers",
      image: "/portfolio/vidacareers.jpg",
      website: "https://vidacareers.org/",
    },
    {
      title: "RGV Partnership",
      image: "/portfolio/rgvpartnership.jpg",
      website: "https://rgvpartnership.com/",
    },
    {
      title: "Peña Eye",
      image: "/portfolio/penaeye.jpg",
      website: "https://penaeye.com/",
    },
    {
      title: "Lone Star Shredding",
      image: "/portfolio/lonestarshredding.jpg",
      website: "https://lonestarshredding.com/",
    },
    {
      title: "Southern Bright Boot",
      image: "/portfolio/southernbrightboot.jpg",
      website: "https://southernbrightboot.com/",
    },
    {
      title: "Statewide Insurance RGV",
      image: "/portfolio/statewideinsurancergv.jpg",
      website: "https://statewideinsurancergv.com/",
    },
    {
      title: "NAM TX",
      image: "/portfolio/namtx.jpg",
      website: "https://namtx.us/",
    },
    {
      title: "HCH Realty",
      image: "/portfolio/hchrealty.jpg",
      website: "https://hchrealty.us/",
    },
    {
      title: "Hope Insurance",
      image: "/portfolio/hopeins.jpg",
      website: "https://hopeins.us/",
    },
    {
      title: "Framework Homes",
      image: "/portfolio/frameworkhomes.jpg",
      website: "https://frameworkhomes.us/",
    },
    {
      title: "VMK Companies",
      image: "/portfolio/vmkcompanies.jpg",
      website: "https://vmkcompanies.com/",
    },
    {
      title: "AOTREC",
      image: "/portfolio/aotrec.jpg",
      website: "https://aotrec.com/",
    },
    {
      title: "La Victoria Adult Day Care Centers",
      image: "/portfolio/lavictoriaadultdaycarecenters.jpg",
      website: "https://trial.lavictoriaadultdaycarecenters.com/",
    },
    {
      title: "UCA STX",
      image: "/portfolio/ucastx.jpg",
      website: "https://ucastx.com/",
    },
    {
      title: "LTR RGV",
      image: "/portfolio/ltrrgv.jpg",
      website: "https://ltrrgv.com/",
    },
    {
      title: "Walter Reyna",
      image: "/portfolio/walterreyna.jpg",
      website: "https://walterreyna.com/",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-10 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-12 tracking-tight drop-shadow-sm pt-20">Portfolio</h1>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full">
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
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-6 text-center transition-colors group-hover:text-sky-600">
                {item.title}
              </h2>

              <div className="flex gap-4 justify-center">
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
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