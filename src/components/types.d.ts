export interface ResumeProps {
    resumeData: JSONResume
}

export interface JSONResume {
    basics: ResumeBasics
    work: Job[]
    education: any[]
    skills: any[],
    languages: Language[]
    interests: Interest[]
    projects: OSProject[]
}

export interface OSProject {
    title: string
    category: string
    role: string
    url: string
    startDate?: string
    endDate?: string
    releaseDate?: string
    repo: string
    summary: string
    highlights: string[]
    keywords: string[]
}

export interface Interest {
    name: string,
    keywords: string[]
}

export interface Language {
    language: string
    fluency: string
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