import * as React from 'react';
import {v4} from 'uuid';

import SectionHeader from './SectionHeader';

import { ResumeProps, VolunteerWork } from './types';

const Volunteering = ({resumeData: { volunteer } }: ResumeProps) => (
    <div className="container volunteer-container">
        <h2>Volunteer</h2>

        {volunteer.map(Volunteer)}
    </div>
);

const Volunteer = (experience: VolunteerWork) => (
    <section className="job item">
        <SectionHeader 
            level={3} 
            name={experience.organization}
            website={experience.website}
            startDate={experience.startDate}
            endDate={experience.endDate}
        />
        {experience.position ? <span className="job__role">{experience.position}</span> : null }

        {experience.summary ?
        <p className="summary">{experience.summary}</p> : null}

        {experience.highlights ? 
        <ul>
            {experience.highlights.map(hl => <li key={v4()}>{hl}</li>)}
        </ul> : null }
    </section>

)

export default Volunteering;