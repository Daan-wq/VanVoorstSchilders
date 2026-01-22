import HeroVisual from "@/components/HeroVisual";
import ProcessContainer from "@/components/ProcessContainer";
import SplitContent from "@/components/SplitContent";

export const metadata = {
    title: "Onze Diensten"
};

export default function DienstenPage() {
    return (
        <main>
            {/* 2. hero-visual (Using reused component, but ideally needs content override props if reusing exactly. 
           However, Implementation Plan listed distinct 'HeroVisual' for Landing and Diensten.
           If reusing the same component file without props, it will duplicate Landing content.
           
           FIX: I need to update HeroVisual to accept props or create HeroVisualServices.
           Given "Modular Template Protocol", strict adherence implies reusing the PATTERN (template).
           But usually components are reused with props.
           
           I will check if I made HeroVisual reusable in previous step. 
           I wrote hardcoded content in HeroVisual.tsx.
           
           Action: I will refactor HeroVisual to accept props, with default values falling back to Landing content.
           Then use it here with Service content.
      */}
            <HeroVisual
                title="Onze Expertise"
                subtitle="Van totaalonderhoud tot specialistisch behangwerk. Ontdek wat wij voor uw woning of bedrijfspand kunnen betekenen."
                ctaLabel="Vraag offerte aan"
                ctaLink="/contact"
                image="/images/pexels-blue-bird-7217985.jpg" // Construction worker
                secondaryCta={false}
            />

            {/* 3. process-container - Using off-white to contrast with HeroVisual/Default */}
            <ProcessContainer backgroundColor="off-white" />

            {/* 4. split-content */}
            {/* 4. Schilderwerk */}
            <SplitContent
                title="Schilderwerk Binnen & Buiten"
                text="U zoekt een vakschilder met verstand van zaken. Wij verzorgen onderhoudsschilderwerk aan woningen en bedrijfspanden. Door gebruik van topmerken als Sikkens en Sigma, gecombineerd met onze vakkennis, garanderen wij een duurzaam resultaat."
                image="/images/pexels-blue-bird-7218009.jpg" // Man painting
                imagePosition="left"
                backgroundColor="white"
                listItems={[
                    "Onderhoudsschilderwerk",
                    "Kleuradvies volgens trends",
                    "Houtrot herstel"
                ]}
            />

            {/* 5. Behang */}
            <SplitContent
                title="Behang & Wandafwerking"
                text="Wij kunnen diverse soorten behang leveren en aanbrengen. Van strak renovlies en glasweefsel tot exclusief patroonbehang. De juiste wandafwerking bepaalt de sfeer van uw woning."
                image="/images/pexels-cottonbro-7480729.jpg" // Interior living room
                imagePosition="right"
                backgroundColor="primary-50"
                listItems={[
                    "Glasweefsel & Renovlies",
                    "Papier- & Vinylbehang",
                    "Naadloze afwerking"
                ]}
            />

            {/* 6. Glas */}
            <SplitContent
                title="Glaszetten & Isolatie"
                text="Van Voorst is een veelzijdige allround glaszetter. Of het nu gaat om een kapotte ruit of het verduurzamen van uw woning met HR++ glas: wij leveren en plaatsen maatwerk."
                image="/images/pexels-kseniachernaya-5691596.jpg" // Bright interior window
                imagePosition="left"
                backgroundColor="white"
                listItems={[
                    "HR++ isolatieglas",
                    "Veiligheids- & Gehard glas",
                    "Snelle service bij schade"
                ]}
            />

            {/* 7. Stucwerk */}
            <SplitContent
                title="Stuc- & Sierpleister"
                text="Voor strakke wanden en plafonds bent u bij ons aan het juiste adres. Wij werken met de nieuwste technieken en materialen voor stucwerk, spachtelputz en betonlook."
                image="/images/pexels-kseniachernaya-5691622.jpg" // Paint textures
                imagePosition="right"
                backgroundColor="primary-50"
                listItems={[
                    "Spachtelputz & Sierpleister",
                    "Betonlook afwerking",
                    "Restauratie oud stucwerk"
                ]}
            />
        </main>
    );
}
