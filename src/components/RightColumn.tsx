import * as React from 'react';

import Summary from './Summary';
import Work from './Work';

import { JSONResume } from './types';

interface IColumnProps {
    data: JSONResume
}


class RightResumeColumn extends React.Component<IColumnProps> {

    public render() {
        const { data } = this.props;
        return (
            <div className="right-column">
                <Summary summary={data.basics.summary}/>
                <Work work={data.work} />
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