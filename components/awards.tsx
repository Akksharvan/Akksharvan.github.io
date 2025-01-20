"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { awardsData } from "@/lib/data";

export default function Awards() {
  const ref = useSectionInView("Awards");
  const carouselRef = useRef(null);

  return (
    <motion.section
      id="awards"
      ref={ref}
      className="scroll-mt-28 mb-28"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Awards</SectionHeading>

      <div className="flex flex-col items-center gap-6">
        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-scroll scrollbar-hide w-full max-w-2xl"
        >
          {awardsData.map((award, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg dark:bg-white/10 transition hover:bg-gray-200 dark:hover:bg-white/20 min-w-[20rem] text-center"
            >
              <h3 className="text-xl font-semibold">{award.name}</h3>
              <p className="text-sm text-gray-700 mt-1 dark:text-white/70">
                {award.issuer} - {award.issueDate}
              </p>
              <p className="mt-2 text-gray-700 dark:text-white/70">
                {award.description}
              </p>
              {award.informationURL && (
                <a
                  className="text-blue-500 underline text-sm block mt-2"
                  href={award.informationURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More Info
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
