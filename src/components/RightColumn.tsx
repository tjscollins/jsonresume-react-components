import * as React from 'react';

import Education from './Education';
import Projects from './Projects';
import Summary from './Summary';
import Volunteering from './Volunteering';
import Work from './Work';

import { ResumeProps } from './types';

class RightResumeColumn extends React.Component<ResumeProps> {
    public render() {
        const { resumeData } = this.props;
        return (
            <div className="right-column">
                <Summary resumeData={resumeData}/>
                <Work resumeData={resumeData} />
                <Projects resumeData={resumeData} />
                <Volunteering resumeData={resumeData} />
                <Education resumeData={resumeData} />
                {/* <Awards resumeData={resumeData} /> */}
                {/* <Publications resumeData={resumeData} /> */}
                {/* <References resumeData={resumeData} /> */}
            </div>
        );
    }
}

export default RightResumeColumn;