import * as React from 'react'
import styled from 'styled-components';

import ResumeHeader from './Header';
import LeftResumeColumn from './LeftColumn';
import RightResumeColumn from './RightColumn';

import { ResumeProps } from './types';

const DefaultResume = ({ resumeData }: ResumeProps) => (
    <Div>
        <ResumeHeader 
            resumeData={resumeData} />
        <div className="resume-content">
            <LeftResumeColumn resumeData={resumeData} />
            <RightResumeColumn resumeData={resumeData} />
        </div>
    </Div>
);

const Div = styled.div`
    margin-top: 50px;

    & .resume-content {
        display: flex;
        flex-direction: row;
    }
`;

export default DefaultResume;
