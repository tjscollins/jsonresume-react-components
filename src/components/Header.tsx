import * as React from 'react';

import { ResumeProps } from './types';

const ResumeHeader = ({ resumeData: { basics: { name, label }}}: ResumeProps) => (
    <header className="resume__header">
        <h1 className="resume__header__name">{name}</h1>
        <span className="resume__header__label">{label}</span>
    </header>
);

export default ResumeHeader;