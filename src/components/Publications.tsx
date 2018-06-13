import * as React from 'react';

import SectionHeader from './SectionHeader';

import { Publication, ResumeProps } from './types';


const Publications = ({ resumeData: { publications } }: ResumeProps) => {
    if (publications.length > 0) {
        return (
            <section className="container publications">
                <h2>Publications</h2>

                {publications.map(Publication)}
            </section>
        )
    } else {
        return null;
    }
}

const Publication = (publication: Publication) => {
    return (
        <section className="publications__item">
            <SectionHeader
                className="publications__item__header"
                level={3}
                name={publication.name}
                website={publication.website}
            />
            {publication.publisher ? <h5 className="publications__item__publisher">{publication.publisher}</h5> : null }

            {publication.summary ? <p className="publications__item__summary">{publication.summary}</p> : null }
        </section>
    );
}

export default Publications;
