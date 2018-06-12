import * as React from 'react';

import { Interest, ResumeProps } from './types';

const InterestsSection = ({ resumeData: { interests }}: ResumeProps) => (
    <div className="container interests">
        <h2>Interests</h2>
        {interests.map(Interest)}
    </div>
)

const Interest = ({ name, keywords }: Interest) => (
    <section className="interests__item">
        <span className="bold">{{name}}</span>
        <ul className="interests__item__keyword-list">
            {keywords ? keywords.map((keyword) => (
                <li className="interests__item__keyword-list__item">
                    {keyword}
                </li>
            )) : null}
            </ul>
    </section>
);

export default InterestsSection;