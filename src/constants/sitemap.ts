import { API_HIGHLIGHTS } from './endpoints';
import { BadgeCheck, BookOpen, Briefcase, Code, GraduationCap, Home, Mail, Trophy, User } from 'lucide-react';

export type SearchItem = {
    type: 'SECTION' | 'ENDPOINT' | 'ACTION';
    title: string;
    description?: string;
    id: string; // anchor id or special action
    icon?: any;
    keywords?: string[];
    index?: number; // for endpoints
    method?: string; // for endpoints
};

export const SITE_SECTIONS: SearchItem[] = [
    {
        type: 'SECTION',
        title: 'Overview',
        id: 'hero',
        icon: Home,
        description: 'Introduction and Resume',
        keywords: ['home', 'start', 'intro', 'cv', 'resume']
    },
    {
        type: 'SECTION',
        title: 'About Me',
        id: 'about',
        icon: User,
        description: 'Background and Bio',
        keywords: ['bio', 'profile', 'story']
    },
    {
        type: 'SECTION',
        title: 'Education',
        id: 'education',
        icon: GraduationCap,
        description: 'Degrees and certifications',
        keywords: ['school', 'university', 'study', 'diploma']
    },
    {
        type: 'SECTION',
        title: 'Research',
        id: 'research',
        icon: BookOpen,
        description: 'Academic interests and publications',
        keywords: ['ml', 'ai', 'papers', 'science']
    },
    {
        type: 'SECTION',
        title: 'Projects',
        id: 'projects',
        icon: Code,
        description: 'Technical portfolio and case studies',
        keywords: ['work', 'code', 'apps', 'gallery']
    },
    {
        type: 'SECTION',
        title: 'Experience',
        id: 'experience',
        icon: Briefcase,
        description: 'Professional work history',
        keywords: ['work', 'job', 'career', 'positions']
    },
    {
        type: 'SECTION',
        title: 'Skills',
        id: 'skills',
        icon: BadgeCheck,
        description: 'Technical stack and tools',
        keywords: ['tech', 'stack', 'languages', 'frameworks']
    },
    {
        type: 'SECTION',
        title: 'Awards',
        id: 'awards',
        icon: Trophy,
        description: 'Honors and achievements',
        keywords: ['prizes', 'winning', 'hackathons']
    },
    {
        type: 'SECTION',
        title: 'Contact',
        id: 'contact',
        icon: Mail,
        description: 'Get in touch',
        keywords: ['email', 'message', 'social', 'hire']
    }
];

// Combine Sections and API Endpoints into one searchable list
export const GLOBAL_SEARCH_INDEX: SearchItem[] = [
    ...SITE_SECTIONS,
    ...API_HIGHLIGHTS.map((api, index) => ({
        type: 'ENDPOINT' as const,
        title: api.title,
        description: `${api.endpoint.method} ${api.endpoint.path}`,
        id: 'api-highlights',
        index: index,
        method: api.endpoint.method,
        keywords: ['api', 'backend', 'php', 'laravel']
    }))
];
