import * as React from 'react';

import SectionHeader from './SectionHeader';

import { Job, ResumeProps } from './types';

const Work = ({ resumeData: { work }}: ResumeProps) => (
    <div className="container work-container">
        <h2>Work Experience</h2>

        {work.map(Job)}
    </div>
);

const Job = (job: Job) => (
    <section className="job item">
        <SectionHeader
            level={3}
            name={job.position}
            startDate={job.startDate}
            endDate={job.endDate}
        />
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