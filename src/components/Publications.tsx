import * as React from 'react';

import SectionHeader from './SectionHeader';

import { Publication, ResumeProps } from './types';


const Publications = ({ resumeData: { publications } }: ResumeProps) => {
    if (publications.length > 0) {
        return (
            <div className="container publications-container">
                <h2>Publications</h2>

                {publications.map(Publication)}
            </div>
        )
    } else {
        return null;
    }
}

const Publication = (publication: Publication) => {
    return (
        <section className="item">
            <SectionHeader
                level={3}
                name={publication.name}
                website={publication.website}
            />
            {publication.publisher ? <h5 className="awarder">{publication.publisher}</h5> : null }

            {publication.summary ? <p className="summary">{publication.summary}</p> : null }
        </section>
    );
}

export default Publications;
