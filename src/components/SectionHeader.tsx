import * as React from 'react';
import { formatDate } from './util';

class DynamicHeader extends React.Component<{level: number} & React.HTMLAttributes<any>> {
    private HeaderComp: (props: React.HTMLAttributes<any>) => JSX.Element

    public render() {
        const { level, ...htmlProps } = this.props;
        switch (level) {
            case 1:
                this.HeaderComp = (props) => <h1 {...props} />;
                break;
            case 2:
                this.HeaderComp = (props) => <h2 {...props} />;
                break;
            case 3:
                this.HeaderComp = (props) => <h3 {...props} />;
                break;
            case 4:
                this.HeaderComp = (props) => <h4 {...props} />;
                break;
            case 5:
                this.HeaderComp = (props) => <h5 {...props} />;
                break;
            case 6:
                this.HeaderComp = (props) => <h6 {...props} />;
                break;
            default:
                this.HeaderComp = (props) => <span {...props} />;
                break;                      
        }
        return (
            <this.HeaderComp {...htmlProps} />
        )
    }
}

interface ISHProps {
    name?: string
    level: number
    website?: string
    startDate?: string
    endDate?: string
    releaseDate?: string
}

const SectionHeader = ({ name, level, website, startDate, endDate, releaseDate, className }: ISHProps & React.HTMLAttributes<any>) => (
    <div className={`${className} clearfix`}>
        { name ? 
        <DynamicHeader level={level} className={`${className}__title pull-left`}>
            {website ?
                <a href={`${website}`} target="_blank">
                    {name}
                </a> : name }
        </DynamicHeader> : null }
        <span className={`${className}__date pull-right`}>
            {startDate && endDate ? 
                <div>
                    <span className="startDate">{formatDate(startDate)}</span> 
                    <span className="endDate"> - {formatDate(endDate)}</span>
                </div>
                :
            startDate ?  
            <div>
                <span className="startDate">{formatDate(startDate)}</span> 
                <span className="endDate"> - Present</span>
            </div> : null}

            {releaseDate ? formatDate(releaseDate) : null }
        </span>
    </div>
);


export default SectionHeader;