import * as React from 'react';

import AboutSection from './About';
import Interests from './Interests';
import LanguagesSection from './Languages';
import SkillsSection from './Skills';

import { ResumeProps } from './types';


 
class LeftResumeColumn extends React.Component<ResumeProps> {

    public render() {
        return (
            <aside className="left-column">
                <AboutSection {...this.props} />
                <SkillsSection {...this.props} />
                <LanguagesSection {...this.props} />
                <Interests {...this.props} />
            </aside>
        );
    }
}

export default LeftResumeColumn;