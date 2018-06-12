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
    <section key={v4()} className="skills__skill container">
        {skill.name ? <SkillName name={skill.name} /> : null}
        {skill.keywords.length ? <SkillList items={skill.keywords} /> : null}
    </section>
);

const SkillName = ({ name }: { name: string }) => (
    <SectionHeader
        className="skills__skill-header"
        level={3}
        name={name}
    />
);

const SkillList = ({ items }: { items: string[] }) => (
    <ul className="skills_skill_list">
        {items.map((keyword: string) => (<li key={v4()} className="skills__skill__list__item">{keyword} </li>))}
    </ul>
);

export default SkillsSection;