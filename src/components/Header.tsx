import * as React from 'react';

interface IHeaderProps {
    name: string
    label: string
}

const ResumeHeader = ({ name, label }: IHeaderProps) => (
    <header className="resume-header clearfix">
        <div className="profile-header pull-left">
            <div className="resume-title">
                <h1 className="resume-title__name">{name}</h1>
                <span className="resume-title__label">{label}</span>
            </div>
        </div>
    </header>
);

export default ResumeHeader;