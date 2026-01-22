import HeroTypographic from "@/components/HeroTypographic";
import TeamGrid from "@/components/TeamGrid";
import SplitContent from "@/components/SplitContent";
import PersonalCTA from "@/components/PersonalCTA";

export const metadata = {
    title: "Onze Aanpak"
};

export default function AanpakPage() {
    return (
        <main>
            {/* 2. hero-typographic */}
            <HeroTypographic />

            {/* 3. team-grid */}
            <TeamGrid backgroundColor="primary-50" />

            {/* 4. split-content (Story 1) */}
            <SplitContent
                title="Ervaring sinds 2001"
                text="Na 15 jaar ervaring te hebben opgedaan, zijn we in 2001 gestart met Schildersbedrijf Van Voorst. Een klein, deskundig bedrijf dat duurzame en zichtbare kwaliteit levert. Wij werken voor particulieren, bedrijven, VvE's en aannemers."
                image="/images/pexels-blue-bird-7218568.jpg" // Professional painter
                imagePosition="left"
                listItems={[
                    "Meer dan 20 jaar zelfstandig vakmanschap",
                    "Gespecialiseerd in onderhoudsschilderwerk",
                    "Persoonlijk contact en korte lijnen"
                ]}
            />

            {/* 5. split-content (Story 2) */}
            <SplitContent
                title="Duurzaamheid & Advies"
                text="Goed schilderwerk voorkomt veroudering van uw pand. Wij adviseren u graag over de juiste verfsystemen en kleuren. Een goed advies helpt u bij het nemen van de juiste beslissing voor een duurzaam resultaat."
                image="/images/pexels-kseniachernaya-5691479.jpg" // Paint materials
                imagePosition="right"
                backgroundColor="off-white"
                listItems={[
                    "Hoogwaardige materialen (Sikkens, Veveo)",
                    "Kleuradvies volgens laatste trends",
                    "Focus op levensduurverlenging"
                ]}
            />

            {/* 6. personal-cta */}
            <PersonalCTA />
        </main>
    );
}
