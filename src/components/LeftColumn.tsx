import * as React from 'react';

import AboutSection from './About';
import SkillsSection from './Skills';

import { JSONResume } from './types';

interface IColumnProps {
    data: JSONResume
}
 
class LeftResumeColumn extends React.Component<IColumnProps> {

    public render() {
        return (
            <aside className="left-column">
                <AboutSection {...this.props} />
                <SkillsSection {...this.props} />
                {/* <LanguagesSection {...this.props} /> */}
                {/* <Interests {...this.props} /> */}
            </aside>
        );
    }
}

export default LeftResumeColumn;