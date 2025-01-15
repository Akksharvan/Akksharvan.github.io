"use client";

import React from "react";
import SectionHeading from "./section-heading";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
    const ref = useSectionInView("About");

    return (
        <motion.section
            className = "mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            id = "about"
            ref = { ref }
            initial = {{ opacity: 0, y: 100 }}
            animate = {{ opacity: 1, y: 0 }}
            transition = {{ delay: 0.175 }}>

            <SectionHeading>About Me</SectionHeading>

            <p className = "mb-3">
                I&apos;m a student studying Computer Science & Applied Mathematics at UNC Chapel Hill. I&apos;m passionate about software development, machine learning, and data science. I am deeply passionate about the intersection of machine learning and software development. <span className = "italic">My favorite part of programming</span> is building innovative solutions that make a real impact. I <span className = "underline">love</span> tackling complex challenges, from developing ensemble ML models for stock prediction to implementing transformers from scratch. I&apos;m currently looking for internships and full-time opportunities in software development, machine learning, and data science. Feel free to reach out to me if you have any opportunities or projects you&apos;d like to work on together.
            </p>
        </motion.section>
    )
}