"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const boardMembers = [
  { name: "Indy Dhial", role: "President", image: "/board/indy.jpg" },
  { name: "Ryan Aujla", role: "Vice President", image: "/board/ryan.jpg" },
  { name: "Vishal Sharma", role: "Treasurer", image: "/board/vishal.jpg" },
  { name: "Rajinder Bajwa", role: "Secretary", image: "/board/rajinder.jpg" },
  { name: "Surej Dhillon", role: "Director", image: "/board/surej.jpg" },
  { name: "Ricky Dhillon", role: "Director", image: "/board/ricky.jpg" },
  { name: "Surinder Gosal", role: "Director", image: "/board/surinder.jpg" },
  { name: "TJ Grewal", role: "Director", image: "/board/tj.jpg" },
  { name: "Jasvinder Heera", role: "Director", image: "/board/jasvinder.jpg" },
];

export default function BoardOfDirectors() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#ee3042] mb-12"
        >
          Board of Directors
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {boardMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-[#fef6f6] rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <div className="relative w-full h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="!text-lg font-semibold text-black">{member.name}</h3>
                <p className="!text-sm !text-[#7c7c7c]">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
