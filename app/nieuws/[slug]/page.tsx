import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { newsArticles } from "@/data/news";
import { ArrowLeft } from "lucide-react";
import ArticleContainer from "@/components/ArticleContainer";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const article = newsArticles.find((a) => a.slug === slug);

    if (!article) {
        return {
            title: "Artikel niet gevonden",
        };
    }

    return {
        title: `${article.title} | Van Voorst Schilders`,
        description: article.description,
    };
}

export async function generateStaticParams() {
    return newsArticles.map((article) => ({
        slug: article.slug,
    }));
}

export default async function NewsDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const article = newsArticles.find((a) => a.slug === slug);

    if (!article) {
        notFound();
    }

    return (
        <main className="bg-white min-h-screen">
            <div className="bg-white pt-32 pb-12 md:pt-40 md:pb-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link
                        href="/nieuws"
                        className="inline-flex items-center text-primary-500 hover:text-primary-800 mb-8 transition-colors font-medium"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Terug naar overzicht
                    </Link>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-950 mb-6 leading-tight">
                        {article.title}
                    </h1>
                    <p className="text-xl text-primary-600 max-w-2xl mx-auto">
                        {article.description}
                    </p>
                </div>
            </div>

            <ArticleContainer
                author={{
                    name: "Gerjan van Voorst",
                    role: "Eigenaar & Vakspecialist",
                    image: "/images/avatar.png" // Craftsman portrait
                }}
                featuredImage={article.image}
                title={article.title}
                content={article.content}
                category={article.category}
                backgroundColor="primary-50"
            />
        </main>
    );
}
