import * as React from 'react'

import ResumeHeader from './Header';
import LeftResumeColumn from './LeftColumn';
import RightResumeColumn from './RightColumn';

import { ResumeProps } from './types';

const DefaultResume = ({ resumeData }: ResumeProps) => (
    <div className="resume">
        <ResumeHeader 
            resumeData={resumeData} />
        <div className="resume__content">
            <LeftResumeColumn resumeData={resumeData} />
            <RightResumeColumn resumeData={resumeData} />
        </div>
    </div>
);

export default DefaultResume;
