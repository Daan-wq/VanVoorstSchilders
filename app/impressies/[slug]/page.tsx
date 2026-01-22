import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ArrowLeft } from "lucide-react";
import ArticleContainer from "@/components/ArticleContainer";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: "Project niet gevonden",
        };
    }

    return {
        title: `${project.title} | Van Voorst Schilders`,
        description: project.description,
    };
}

// Generate static params for all projects
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="bg-white min-h-screen">
            {/* 1. Navbar is handled by layout.tsx */}

            {/* 2. Hero Text Only (Article Title) */}
            <div className="bg-white pt-32 pb-12 md:pt-40 md:pb-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link
                        href="/impressies"
                        className="inline-flex items-center text-primary-500 hover:text-primary-800 mb-8 transition-colors font-medium"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Terug naar overzicht
                    </Link>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-950 mb-6 leading-tight">
                        {project.title}
                    </h1>
                    <p className="text-xl text-primary-600 max-w-2xl mx-auto">
                        {project.description}
                    </p>
                </div>
            </div>

            {/* 3. Article Container */}
            <ArticleContainer
                author={{
                    name: "Gerjan van Voorst",
                    role: "Eigenaar & Vakspecialist",
                    image: "/images/avatar.png" // Craftsman portrait
                }}
                featuredImage={project.image}
                title={project.title}
                content={project.content}
                category={project.category}
                backgroundColor="primary-50"
            />

            {/* 4. Blog Grid (Related) could go here later */}
        </main>
    );
}
