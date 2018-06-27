import * as React from 'react';
import {v4 as uuidv4} from 'uuid';

import SectionHeader from './SectionHeader';

import { ResumeProps, VolunteerWork } from './types';

const Volunteering = ({resumeData: { volunteer } }: ResumeProps) => (
    <section className="container volunteering">
        <h2>Volunteer</h2>

        {volunteer.map(Volunteer)}
    </section>
);

const Volunteer = (experience: VolunteerWork) => (
    <section 
        key={uuidv4()}
        className="volunteerin__item"
    >
        <SectionHeader 
            className="volunteering__item__header"
            level={3} 
            name={experience.organization}
            website={experience.website}
            startDate={experience.startDate}
            endDate={experience.endDate}
        />
        {experience.position ? <span className="volunteering__item__role">{experience.position}</span> : null }

        {experience.summary ?
        <p className="volunteering__item__summary">{experience.summary}</p> : null}

        {experience.highlights ? 
        <ul className="volunteering__item__highlights">
            {experience.highlights.map(hl => <li key={uuidv4()}>{hl}</li>)}
        </ul> : null }
    </section>

)

export default Volunteering;