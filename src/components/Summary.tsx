import * as React from 'react';

interface IProps {
    summary: string
}

const Summary = ({ summary }: IProps) => (
    <div className="container summary-container">
        {/* <h2>Summary</h2> */}
        <p className="summary">
            { summary }
        </p>
    </div>
);

export default Summary;