import * as React from 'react'

import ResumeHeader from './Header';
import LeftResumeColumn from './LeftColumn';
import RightResumeColumn from './RightColumn';

import { JSONResume } from './types';

interface IProps {
    resumeData: JSONResume
}

const DefaultResume = ({ resumeData }: IProps) => (
    <div className="resume-content">
        <ResumeHeader 
            name={resumeData.basics.name} 
            label={resumeData.basics.label} />
        <LeftResumeColumn data={resumeData} />
        <RightResumeColumn data={resumeData} />
    </div>
);

export default DefaultResume;
