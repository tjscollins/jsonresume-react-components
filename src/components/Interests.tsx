import * as React from 'react';
import { v4 } from 'uuid';

import { Interest, ResumeProps } from './types';

const InterestsSection = ({ resumeData: { interests }}: ResumeProps) => (
    <div className="container interests">
        <h2>Interests</h2>
        {interests.map(Interest)}
    </div>
)

const Interest = ({ name, keywords }: Interest) => (
    <section key={v4()} className="interests__item">
        <span className="interests__item__title">
            { name }
        </span>
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