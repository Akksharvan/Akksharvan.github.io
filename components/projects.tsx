"use client";

import React, { useEffect } from 'react';
import Project from './project';
import SectionHeading from './section-heading';

import { projectsData } from '@/lib/data';
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from '@/context/active-section-context';


export default function Projects() {
    const { ref, inView} = useInView({ threshold: 0.50 });
    const { setActiveSection } = useActiveSectionContext();

    useEffect(() => {
        if (inView) setActiveSection("Projects");
    }, [inView, setActiveSection]);
    
    return (
        <section ref = { ref } id = "projects" className = "scroll-mt-28">
            <SectionHeading>
                My Projects
            </SectionHeading>

            <div>
                {
                    projectsData.map((project, index) => (
                        <Project
                        key = {index}
                        title = {project.title}
                        description = {project.description}
                        tags = {project.tags}
                        imageUrl = {project.imageUrl}/>
                    ))
                }
            </div>
        </section>
    )
}