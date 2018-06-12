import * as React from 'react'

import ResumeHeader from './Header';
import LeftResumeColumn from './LeftColumn';
import RightResumeColumn from './RightColumn';

import { ResumeProps } from './types';

const DefaultResume = ({ resumeData }: ResumeProps) => (
    <div className="resume-content">
        <ResumeHeader 
            resumeData={resumeData} />
        <LeftResumeColumn resumeData={resumeData} />
        <RightResumeColumn resumeData={resumeData} />
    </div>
);

export default DefaultResume;
