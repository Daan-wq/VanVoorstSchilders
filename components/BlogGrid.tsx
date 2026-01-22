import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { newsArticles } from "@/data/news";

interface BlogGridProps {
    backgroundColor?: "white" | "primary-50" | "off-white";
    limit?: number;
    itemLinkDestination?: "slug" | "overview";
}

export default function BlogGrid({
    backgroundColor = "primary-50",
    limit,
    itemLinkDestination = "slug"
}: BlogGridProps) {
    const visiblePosts = limit ? newsArticles.slice(0, limit) : newsArticles;

    return (
        <section className={clsx("w-full py-24", {
            "bg-white": backgroundColor === "white",
            "bg-primary-50": backgroundColor === "primary-50",
            "bg-off-white": backgroundColor === "off-white"
        })}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="block text-primary-600 font-bold uppercase tracking-wide text-sm mb-2">Laatste Nieuws</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-950">Tips & Advies van de Schilder</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visiblePosts.map((post) => (
                        <Link
                            key={post.id}
                            href={itemLinkDestination === "slug" ? `/nieuws/${post.slug}` : "/nieuws"}
                            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col h-full ring-1 ring-primary-50"
                        >
                            <div className="relative h-48 w-full bg-primary-100">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <span className="absolute bottom-4 left-4 inline-block px-3 py-1 rounded-full bg-black/60 text-white text-xs font-medium backdrop-blur-sm">
                                    {post.category}
                                </span>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <p className="text-xs text-primary-400 mb-2">{post.date}</p>
                                <h3 className="text-lg font-bold text-primary-900 mb-4 group-hover:text-primary-600 transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <div className="mt-auto flex items-center gap-3">
                                    <div className="relative h-8 w-8 rounded-full overflow-hidden bg-primary-100 ring-2 ring-primary-50">
                                        <Image src="/images/avatar.png" alt="Auteur" fill className="object-cover" />
                                    </div>
                                    <span className="text-sm font-medium text-primary-600">Gerjan van Voorst</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {limit && (
                    <div className="mt-16 text-center">
                        <Link
                            href="/nieuws"
                            className="inline-flex items-center px-8 py-3 border-2 border-primary-200 text-primary-800 font-bold rounded-xl hover:bg-primary-50 transition-colors"
                        >
                            Bekijk alle nieuwsberichten
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
