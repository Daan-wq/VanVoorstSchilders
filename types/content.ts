export interface NavLink {
    label: string;
    href: string;
}

export interface Service {
    title: string;
    description: string;
    slug: string;
    icon?: string;
    image?: string;
    features: string[];
}

export interface CaseProject {
    title: string;
    category: string;
    description: string;
    image: string;
    slug: string; // for potential detail page
}

export interface Review {
    author: string;
    text: string;
    rating: number;
    date?: string;
}

export interface ProcessStep {
    number: number;
    title: string;
    description: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}
