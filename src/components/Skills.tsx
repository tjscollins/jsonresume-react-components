import * as React from 'react';
import {v4} from 'uuid';

import { ResumeProps } from './types';

const SkillsSection = ({ resumeData: { skills }}: ResumeProps) => (
    <section className="container skills-container">
        <h2>Skills</h2>
        {skills.map(SkillComponent)}
    </section>
);

const SkillComponent = (skill: any) => (
    <section key={v4()} className="skill container">
        {skill.name ? <SkillName name={skill.name} /> : null}
        {skill.keywords.length ? <SkillList items={skill.keywords} /> : null}
    </section>
);

const SkillName = ({ name }: { name: string }) => (
    <div className="section-header clearfix">
        <h3 className="section-header__title pull-left">
            {name}
        </h3>
    </div>
);

const SkillList = ({ items }: { items: string[] }) => (
    <ul className="minimal skill__list">
        {items.map((keyword: string) => (<li key={v4()} className="skill__list__item">{keyword} </li>))}
    </ul>
);

export default SkillsSection;