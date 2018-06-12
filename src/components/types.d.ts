export interface ResumeProps {
    resumeData: JSONResume
}

export interface JSONResume {
    basics: ResumeBasics
    work: Job[]
    skills: any[],
    languages: Language[]
    interests: Interest[]
    projects: OSProject[]
    volunteer: VolunteerWork[]
    education: Education[]
    publications: Publication[]
    references: Reference[]
}

export interface Reference {
    reference: string
    name: string
}

export interface Publication {
    name: string
    publisher?: string
    summary?: string
    website?: string
}

export interface Education {
    institution: string
    location?: string
    studyType: string
    area: string
    releaseDate: string
    url?: string
    specialization?: string
    gpa?: string
    courses?: string[]
}

export interface VolunteerWork {
    organization: string
    position: string
    startDate?: string
    endDate?: string
    website?: string
    summary: string
    highlights?: string[]
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