import * as React from 'react';
import { v4 } from 'uuid';
import SectionHeader from './SectionHeader';
import { Education, ResumeProps } from './types';
import { formatDegree } from './util';

const EducationSection = ({resumeData: { education } }: ResumeProps) => (
    <section className="container education">
        <h2>Education</h2>

        {education.map(Education)}
    </section>
);

const Education = (education: Education) => (
    <section className="education__item">
        <SectionHeader
            className="education__item__header"
            level={3} 
            name={formatDegree(education.studyType, education.area)}
            website={education.url}
            releaseDate={education.releaseDate}
        />
        {education.specialization ? <span className="education__item__specialization">{education.specialization}</span> : null }

        <div className="education__item__details">
            <span className="education__item__institution">
                {education.institution}
            </span>
            {education.location ?
                <span className="education__item__location">{education.location}</span> : null}
            {education.gpa ?
                <span className="education__item__gpa pull-right">{education.gpa}</span> : null }
        </div>

        {education.courses ? 
        <ul className="education__item__courses">
            {education.courses.map(hl => <li key={v4()}>{hl}</li>)}
        </ul> : null }
    </section>

)

export default EducationSection;