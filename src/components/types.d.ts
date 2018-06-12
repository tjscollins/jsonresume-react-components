export interface ResumeProps {
    resumeData: JSONResume
}

export interface JSONResume {
    basics: ResumeBasics
    work: Job[]
    projects: any[]
    education: any[]
    skills: any[]
}

export interface Job {
    company: string
    website?: string
    position: string
    startDate: string
    endDate?: string
    summary: string
    highlights?: string[]
}

export interface ResumeBasics {
    email: string
    label: string
    location?: Location
    name: string
    phone: string
    profiles: SocialMediaProfile[]
    summary: string
    website: string
}

export interface Location {
    address: string 
    city:string 
    region: string
    postalCode: string
    countryCode: string
}


export interface SocialMediaProfile {
    network: string
    username: string
    url: string
}