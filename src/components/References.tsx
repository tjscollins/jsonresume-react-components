import * as React from 'react';

import { Reference, ResumeProps } from './types';


const References = ({ resumeData: { references } }: ResumeProps) => {
    if (references.length > 0) {
        return (
            <div className="container references-container">
                <h2>References</h2>

                {references.map(SingleReference)}
            </div>
        )
    } else {
        return null;
    }
}

const SingleReference = (reference: Reference) => {
    return (
        <section className="item">
            {reference.reference ?
                <div>
                    <i 
                        className="fa fa-quote-left pull-left" 
                        aria-hidden="true" />
                    <blockquote>
                        {reference.reference}
                    </blockquote>
                </div> : null}

            {reference.name ? 
                <h5 className="pull-right"> — {{name}}</h5>
                : null}
        </section>
    );
}

export default References;
