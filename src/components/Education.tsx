import * as React from 'react';
import { v4 } from 'uuid';
import SectionHeader from './SectionHeader';
import { Education, ResumeProps } from './types';
import { formatDegree } from './util';

const EducationSection = ({resumeData: { education } }: ResumeProps) => (
    <div className="container volunteer-container">
        <h2>Volunteer</h2>

        {education.map(Education)}
    </div>
);

const Education = (education: Education) => (
    <section className="job item">
        <SectionHeader 
            level={3} 
            name={formatDegree(education.studyType, education.area)}
            website={education.url}
            releaseDate={education.releaseDate}
        />
        {education.specialization ? <span className="education__item__specialization">{education.specialization}</span> : null }

        <div>
            <span className="education__item__type-area">
                {education.institution}
            </span>
            {education.location ?
                <span className="education__item__location">{education.location}</span> : null}
            {education.gpa ?
                <span className="education__item__gpa pull-right">{education.gpa}</span> : null }
        </div>

        {education.courses ? 
        <ul className="education__item__courses two-column">
            {education.courses.map(hl => <li key={v4()}>{hl}</li>)}
        </ul> : null }
    </section>

)

export default EducationSection;