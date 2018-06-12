import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Location, ResumeBasics, ResumeProps, SocialMediaProfile } from './types';
import { concat, emailLink, formatAddress, notEmail, removeProtocol } from './util';

const AboutSection = ({ resumeData: { basics }}: ResumeProps) => (
    <section className="container about-container">
        <h2>Contact</h2>
        <Location location={basics.location} />
        <Email email={basics.email} />
        <Phone tel={basics.phone} />
        <Website url={basics.website} />
        <Profiles {...basics} />
    </section>
);

const Profiles = ({ profiles }: ResumeBasics) => (
    <div>
        {profiles.map(
            profile => <Social key={uuidv4()} profile={profile} />
        )}
    </div>
);

const Social = ({ profile }: { profile: SocialMediaProfile }) => {
    if ( profile.network && profile.username ) {
        if (profile.network.toLowerCase() === 'linkedin') {
            return <InfoTag text={concat('in/', profile.username)} icon='fa-linkedin-square' />
        } else {
            return <InfoTag text={profile.username} icon={`fa-${profile.network.toLowerCase()}`} />
        }
    }
    return null;   
}

const Website = ({ url }: { url: string }) => <InfoTag text={url} icon="fa-desktop" url={url} />;

const Phone = ({ tel }: { tel: string }) => (
    <InfoTag text={tel} icon="fa-mobile fa-2x" />
)

const Email = ({ email }: { email: string }) => (
    <InfoTag text={email} icon="fa-envelope-o" url={emailLink(email)} />
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
    <div className="contact-info__item">
        {icon ? <i className={`contact-info__icon fa ${icon}`} /> : '' }
        {url ? 
            <a className="contact-info__text" href={url} target={notEmail(url) ? "_blank" : undefined }>
                    {removeProtocol(text)}
            </a>
        :
            <span className="contact-info__text">{text}</span>
        }
    </div>  
);

export default AboutSection;