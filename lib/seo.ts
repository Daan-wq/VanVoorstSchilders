import { Metadata } from "next";

const siteConfig = {
    name: "Van Voorst Schilders",
    description: "Van Voorst Schilders in Zwolle: Meesters in duurzaam schilderwerk, behang, glas en stucwerk voor particulieren en bedrijven.",
    url: "https://vanvoorstschilders.nl",
    ogImage: "/placeholders/og-image.svg",
};

export function generateMetadata(
    title: string,
    description?: string,
    image?: string
): Metadata {
    return {
        title: `${title} | ${siteConfig.name}`,
        description: description || siteConfig.description,
        metadataBase: new URL(siteConfig.url),
        openGraph: {
            title: `${title} | ${siteConfig.name}`,
            description: description || siteConfig.description,
            url: siteConfig.url,
            siteName: siteConfig.name,
            images: [
                {
                    url: image || siteConfig.ogImage,
                    width: 1200,
                    height: 630,
                },
            ],
            locale: "nl_NL",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: `${title} | ${siteConfig.name}`,
            description: description || siteConfig.description,
            images: [image || siteConfig.ogImage],
        },
        icons: {
            icon: "/logo.png",
            shortcut: "/logo.png",
            apple: "/logo.png",
        },
    };
}
