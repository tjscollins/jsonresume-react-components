import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Location, ResumeBasics, ResumeProps, SocialMediaProfile } from './types';
import { emailLink, formatAddress, notEmail, removeProtocol } from './util';

const AboutSection = ({ resumeData: { basics }}: ResumeProps) => (
    <section className="about">
        <h2>Contact</h2>
        <Location location={basics.location} />
        <Email email={basics.email} />
        <Phone tel={basics.phone} />
        <Website url={basics.website} />
        <Profiles {...basics} />
    </section>
);

const Profiles = ({ profiles }: ResumeBasics) => (
    <div className="about__profiles">
        {profiles.map(
            profile => <Social key={uuidv4()} profile={profile} />
        )}
    </div>
);

const Social = ({ profile }: { profile: SocialMediaProfile }) => {
    if ( profile.network && profile.username ) {
        return <InfoTag url={profile.url} text={profile.username} icon={`fab fa-${profile.network.toLowerCase()}`} />
    }
    return null;   
}

const Website = ({ url }: { url: string }) => <InfoTag text={url} icon="fa fa-desktop" url={url} />;

const Phone = ({ tel }: { tel: string }) => (
    <InfoTag text={tel} icon="fa fa-mobile fa-2x" />
)

const Email = ({ email }: { email: string }) => (
    <InfoTag text={email} icon="far fa-envelope" url={emailLink(email)} />
);

const Location = ({ location }: { location?: Location }) => {
    if ( location ) {
        return (
            <InfoTag text={formatAddress(location)} icon="fa-map-marker" />
        );
    }

    return <div />
}

interface InfoProps {
    text: string
    icon: string
    url?: string
}

const InfoTag = ({ text, icon, url }: InfoProps) => (
    <div className="about__info">
        {icon ? <i className={`about__info__icon ${icon}`} /> : '' }
        {url ? 
            <a className="about__info__text" href={url} target={notEmail(url) ? "_blank" : undefined }>
                    {removeProtocol(text)}
            </a>
        :
            <span className="about__info__text">{text}</span>
        }
    </div>  
);

export default AboutSection;