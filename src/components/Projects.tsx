import * as React from 'react';
import { v4 } from 'uuid';
import { OSProject, ResumeProps } from './types';
import { formatDate } from './util';

const ProjectSection = ({ resumeData: {projects}}: ResumeProps) => (
    <div className="container project-container">
        <h2>Open Source Projects</h2>

        {projects.map(Project)}
    </div>
);

const Project = (project: OSProject) => (
    <section className="item">
        <div className="section-header clearfix">
            <h3 className="section-header__title pull-left">
                    <a href="{project.url}" target="_blank">
                        {project.title}
                    </a>
            </h3>
            <span className="section-header__date italic pull-right">
                {project.startDate ? 
                    <span className="startDate">{formatDate(project.startDate)}</span> : null 
                }
                {project.endDate ?
                    <span className="endDate"> - {formatDate(project.endDate)}</span> :
                    <span className="endDate"> - Present</span>
                }
            </span>
        </div>

        {project.role ? 
            <span className="project__role">{project.role}</span> : null
        }   

        {project.keywords ? 
            <ul className="project__keywords">
                {project.keywords.map(keyword => <li key={v4()}>{keyword}</li>)}
            </ul> : null
        }

        {project.summary ? <p className="summary">{project.summary}</p> : null }

        {project.highlights ? 
            <ul>
                {project.highlights.map(hl => <li key={v4()}>{hl}</li>)}
            </ul> : null }
    </section>
);

export default ProjectSection;