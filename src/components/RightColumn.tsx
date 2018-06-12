import * as React from 'react';

import Projects from './Projects';
import Summary from './Summary';
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
                {/* {{> summary}}
                {{> work }}
                {{> projects }}
                {{> volunteer }}
                {{> education }}
                {{> awards }}
                {{> publications }}
                {{> references }} */}
            </div>
        );
    }
}

export default RightResumeColumn;