"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function Contact() {
    const ref = useSectionInView("Contact");

    return (
        <motion.section id = "contact" ref = { ref } className = "mb-20 sm:mb-28 w-[min(100%,38rem)] text-center" initial = {{ opacity: 0 }} whileInView = {{ opacity: 1 }} transition = {{ duraction: 1 }} viewport = {{ once: true }}>
            <SectionHeading> Contact Me </SectionHeading>
            <p className = "text-gray-700 -met-6"> Please contact me directly at <a className = "underline" href = "mailto:akksharvan@gmail.com"> akksharvan@gmail.com </a> or through this form. </p>
            <form className = "mt-10 flex flex-col">
                <input aria-label = "email" className = "h-14 rounded-lg border border-black/10 px-4" type = "email" required maxLength = { 500 }placeholder = "Your email" />
                <textarea aria-label = "content" required maxLength = { 500 } className = "h-52 my-3 rounded-lg border border-black/10 p-4" placeholder = "Your message" />
                <button className = "group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105" type = "submit"> Submit </button>
            </form>
        </motion.section>
    )
}