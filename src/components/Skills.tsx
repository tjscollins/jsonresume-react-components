import * as React from 'react';
import {v4} from 'uuid';

import SectionHeader from './SectionHeader';

import { ResumeProps } from './types';

const SkillsSection = ({ resumeData: { skills }}: ResumeProps) => (
    <section className="skills">
        <h2>Skills</h2>
        {skills.map(SkillComponent)}
    </section>
);

const SkillComponent = (skill: any) => (
    <section key={v4()} className="skills__item container">
        {skill.name ? 
        <SectionHeader
            className="skills__item__header"
            level={3}
            name={skill.name}
        /> : null}
        {skill.keywords.length ? <SkillList items={skill.keywords} /> : null}
    </section>
);

const SkillList = ({ items }: { items: string[] }) => (
    <ul className="skills__item__keyword-list">
        {items.map((keyword: string) => (<li key={v4()} className="skills__item__keyword-list__item">{keyword} </li>))}
    </ul>
);

export default SkillsSection;