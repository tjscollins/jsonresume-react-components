import * as React from 'react';
import { Language, ResumeProps } from './types';

const LanguagesSection = ({ resumeData: { languages }}: ResumeProps) => (
    <section className="container languages">
    <h2>Languages</h2>

    <ul className="languages__list">
        {languages ? languages.map(Language) : null}
    </ul>
</section>
);

const Language = ({ language, fluency }: Language) => (
    <li className="languages__list__item">
        {language} {fluency ?<em>({fluency})</em> : null }
    </li>
);

export default LanguagesSection;