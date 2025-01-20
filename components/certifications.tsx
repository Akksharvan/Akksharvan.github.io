"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { certificationsData } from "@/lib/data";

export default function Certifications() {
    const ref = useSectionInView("Certifications");
    const [currentPage, setCurrentPage] = useState(0);
    const cardsPerPage = 3;

    const totalPages = Math.ceil(certificationsData.length / cardsPerPage);

    const getCurrentCards = () => {
        const start = currentPage * cardsPerPage;
        const end = start + cardsPerPage;
        return certificationsData.slice(start, end);
    };

    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    return (
        <motion.section
            id="certifications"
            ref={ref}
            className="scroll-mt-28 mb-28"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <SectionHeading>Certifications</SectionHeading>
            <div className="flex flex-col gap-6">
                {getCurrentCards().map((cert, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 p-4 rounded-lg dark:bg-white/10 transition-all hover:bg-gray-200 dark:hover:bg-white/20"
                    >
                        <h3 className="text-xl font-semibold">{cert.name}</h3>
                        <p className="text-sm text-gray-700 mt-1 dark:text-white/70">
                            {cert.issuer} — {cert.issueDate}
                        </p>
                        {cert.credentialURL && (
                            <a
                                className="text-blue-500 underline text-sm"
                                href={cert.credentialURL}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Credential Link
                            </a>
                        )}
                    </div>
                ))}
            </div>
            
            <div className="flex justify-center gap-4 mt-6">
                <button
                    onClick={prevPage}
                    className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 dark:bg-white/10 dark:hover:bg-white/20"
                >
                    Previous
                </button>
                <span className="flex items-center">
                    {currentPage + 1} / {totalPages}
                </span>
                <button
                    onClick={nextPage}
                    className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 dark:bg-white/10 dark:hover:bg-white/20"
                >
                    Next
                </button>
            </div>
        </motion.section>
    );
}
