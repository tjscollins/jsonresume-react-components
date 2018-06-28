import * as React from 'react';
import {v4 as uuidv4} from 'uuid';

import SectionHeader from './SectionHeader';

import { Job, ResumeProps } from './types';

const Work = ({ resumeData: { work }}: ResumeProps) => (
    <section className="container work">
        <h2>Work Experience</h2>

        {work.map(Job)}
    </section>
);

const Job = (job: Job) => (
    <section 
        key={uuidv4()}
        className="work__job"
    >
        <SectionHeader
            className="work__job__header"
            level={3}
            name={job.position}
            startDate={job.startDate}
            endDate={job.endDate}
        />
        <a className="work__job__company" href={job.website}>{job.company}</a>
        <p className="work__job__summary">{job.summary}</p>

        <ul className="work__job__highlights">
            {job.highlights ?
                job.highlights.map(
                    (highlight) => (
                        <li 
                            key={uuidv4()} 
                            className="work__job__highlights__item"
                        >
                            {highlight}
                        </li>
                    )
                ) :
                null
            }
        </ul>
    </section>
)

export default Work;