import * as React from 'react';
import {formatDate} from './util';

import { Job, ResumeProps } from './types';

const Work = ({ resumeData: { work }}: ResumeProps) => (
    <div className="container work-container">
        <h2>Work Experience</h2>

        {work.map(Job)}
    </div>
);

const Job = (job: Job) => (
    <section className="job item">
        <h3>{job.position}</h3>
        <span className="section-header__date italic pull-right">
            <span className="startDate">{formatDate(job.startDate)}</span>
            {job.endDate ? 
                <span className="endDate"> - {formatDate(job.endDate)}</span> :
                <span className="endDate"> - Present</span>}
        </span>
        <a className="job__company" href={job.website}>{job.company}</a>
        <p className="summary">{job.summary}</p>

        <ul className="job__highlights">
            {job.highlights ?
                job.highlights.map(
                    (highlight) => (
                        <li className="job__highlights__item">{highlight}</li>
                    )
                ) :
                null
            }
        </ul>
    </section>
)

export default Work;