import * as React from 'react';

import { ResumeProps } from './types';

const Summary = ({ resumeData: { basics: { summary }}}: ResumeProps) => (
    <div className="container summary-container">
        {/* <h2>Summary</h2> */}
        <p className="summary">
            { summary }
        </p>
    </div>
);

export default Summary;