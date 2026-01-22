import HeroTextOnly from "@/components/HeroTextOnly";
import PortfolioGrid from "@/components/PortfolioGrid";
import Pagination from "@/components/Pagination";

export const metadata = {
    title: "Onze Impressies"
};

export default function ImpressiesPage() {
    return (
        <main>
            {/* 2. hero-text-only */}
            <HeroTextOnly />

            {/* 3. portfolio-grid */}
            <PortfolioGrid />

            {/* 4. pagination */}
            <Pagination />
        </main>
    );
}
