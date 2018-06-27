import * as React from 'react';
import {v4 as uuidv4} from 'uuid';

import SectionHeader from './SectionHeader';

import { OSProject, ResumeProps } from './types';

const ProjectSection = ({ resumeData: {projects}}: ResumeProps) => (
    <section className="container projects">
        <h2>Open Source Projects</h2>

        {projects.map(Project)}
    </section>
);

const Project = (project: OSProject) => (
    <section 
        key={uuidv4()}
        className="projects__item"
    >
        <SectionHeader
            className="projects__item__header"
            level={3}
            name={project.title}
            website={project.url}
            startDate={project.startDate}
            endDate={project.endDate}
            releaseDate={project.releaseDate}
        />

        {project.role ? 
            <span className="projects__item__role">{project.role}</span> : null
        }   

        {project.keywords ? 
            <ul className="projects__item__keywords">
                {project.keywords.map(keyword => <li key={uuidv4()}>{keyword}</li>)}
            </ul> : null
        }

        {project.summary ? <p className="projects__item__summary">{project.summary}</p> : null }

        {project.highlights ? 
            <ul className="projects__item__highlights">
                {project.highlights.map(hl => <li key={uuidv4()}>{hl}</li>)}
            </ul> : null }
    </section>
);

export default ProjectSection;