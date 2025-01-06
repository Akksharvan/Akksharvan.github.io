import React from 'react';
import Project from './project';
import SectionHeading from './section-heading';

import { projectsData } from '@/lib/data';


export default function Projects() {
    return (
        <section id = "projects" className = "scroll-mt-28">
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