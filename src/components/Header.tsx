import * as React from 'react';

import { ResumeProps } from './types';

const ResumeHeader = ({ resumeData: { basics: { name, label }}}: ResumeProps) => (
    <header className="resume-header clearfix">
        <div className="profile-header pull-left">
            <div className="resume-title">
                <h1 className="resume-title__name">{name}</h1>
                <span className="resume-title__label">{label}</span>
            </div>
        </div>
    </header>
);

export default ResumeHeader;