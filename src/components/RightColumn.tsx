import * as React from 'react';

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
                {/* <Education resumeDate={resumeData} /> */}
                {/* <Awards resumeDate={resumeData} /> */}
                {/* <Publications resumeDate={resumeData} /> */}
                {/* <References resumeDate={resumeData} /> */}
            </div>
        );
    }
}

export default RightResumeColumn;