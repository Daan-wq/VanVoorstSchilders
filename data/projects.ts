export interface Project {
    id: number;
    slug: string;
    title: string;
    category: string;
    image: string;
    description: string;
    details: {
        location: string;
        year: string;
        services: string[];
    };
    content: string; // The "invented story"
}

export const projects: Project[] = [
    {
        id: 1,
        slug: "villa-renovatiestraat",
        title: "Villa Renovatiestraat",
        category: "Buitenschilderwerk",
        image: "/images/pexels-blue-bird-7218568.jpg", // Villa exterior
        description: "Complete transformatie van een karakteristieke jaren '30 woning.",
        details: {
            location: "Zwolle Zuid",
            year: "2025",
            services: ["Buitenschilderwerk", "Houtrot herstel", "Lakwerk"]
        },
        content: "Een complete transformatie van een karakteristieke jaren '30 woning. De oude verflagen zijn zorgvuldig verwijderd, houtrot is hersteld en alles is strak in de hoogglans lak gezet. De authentieke details komen nu weer prachtig tot hun recht. Door gebruik te maken van hoogwaardige Sigma lakken garanderen we een glansbehoud van minimaal 10 jaar."
    },
    {
        id: 2,
        slug: "appartement-centrum",
        title: "Appartement Centrum",
        category: "Binnenschilderwerk",
        image: "/images/pexels-kseniachernaya-5691479.jpg", // Modern interior
        description: "Strakke wandafwerking en lakwerk in hartje Zwolle.",
        details: {
            location: "Zwolle Centrum",
            year: "2024",
            services: ["Binnenschilderwerk", "Sauswerk", "Kleuradvies"]
        },
        content: "Voor dit moderne appartement in hartje Zwolle hebben we gekozen voor een rustig kleurenpalet met matte afwerkingen. De wanden zijn voorzien van glad stucwerk en gesaust in een warme grijstint, wat zorgt voor een ruimtelijk effect. De kozijnen zijn in een subtiele contrastkleur geschilderd om diepte te creëren zonder de rust te verstoren."
    },
    {
        id: 3,
        slug: "nieuwbouw-project",
        title: "Nieuwbouw Project",
        category: "Wandafwerking",
        image: "/images/pexels-kseniachernaya-5691597.jpg", // Wallpaper/Wall
        description: "Naadloos renovlies behang voor een strak resultaat.",
        details: {
            location: "Stadshagen",
            year: "2025",
            services: ["Renovlies behang", "Sauswerk", "Lakwerk"]
        },
        content: "Bij dit nieuwbouwproject in Stadshagen hebben we de volledige woning voorzien van renovlies behang, naadloos afgewerkt en gesaust. Dit is het perfecte alternatief voor stucwerk in nieuwbouwwoningen, omdat het scheuroverbruggend en stootvast is. De kozijnen zijn afgelakt in een contrasterende donkere tint voor een moderne uitstraling."
    },
    {
        id: 4,
        slug: "herenhuis-gevel",
        title: "Herenhuis Gevel",
        category: "Onderhoud",
        image: "/images/pexels-blue-bird-7217985.jpg", // Brick house detail
        description: "Restauratie van een monumentale gevel in oude glorie.",
        details: {
            location: "Assendorp",
            year: "2024",
            services: ["Gevelonderhoud", "Snijvoegen", "Monumentaal schilderwerk"]
        },
        content: "Het herstel van deze monumentale gevel vereiste puur vakmanschap. We hebben historisch verantwoord kleuronderzoek gedaan en de gevel in zijn oude glorie hersteld, met aandacht voor de originele ornamenten en snijvoegen. Er is gewerkt met ademende verfsystemen om de levensduur van het metselwerk en houtwerk te waarborgen."
    },
    {
        id: 5,
        slug: "kantoorrenovatie",
        title: "Kantoorrenovatie",
        category: "Glasweefsel",
        image: "/images/pexels-cottonbro-7480729.jpg", // Modern office
        description: "Duurzame en representatieve wandafwerking voor zakelijk gebruik.",
        details: {
            location: "Hessenpoort",
            year: "2025",
            services: ["Glasweefselbehang", "Projectschilderwerk", "Onderhoudsplan"]
        },
        content: "Een fris en inspirerend kantoor. We hebben glasweefselbehang toegepast voor maximale duurzaamheid en stootvastheid, gecombineerd met extra afwasbare muurverf in de huisstijlkleuren van het bedrijf. Een resultaat dat jarenlang representatief blijft, zelfs bij intensief gebruik. Daarnaast hebben we een meerjarenonderhoudsplan opgesteld."
    },
    {
        id: 6,
        slug: "vrijstaande-woning",
        title: "Vrijstaande Woning",
        category: "Totaalonderhoud",
        image: "/images/pexels-jimmy-nilsson-masth-193596566-11427084.jpg", // House with clean windows
        description: "Volledig buitenonderhoud voor jarenlange bescherming.",
        details: {
            location: "Berkum",
            year: "2024",
            services: ["Buitenschilderwerk", "Dakgoten reinigen", "Glasbewassing"]
        },
        content: "Totaalonderhoud van top tot teen. Van het reinigen van de dakgoten tot het schilderen van de dakkapellen en gevelkozijnen. Deze woning kan er weer jaren tegenaan, beschermd tegen alle weersinvloeden. We hebben hier gebruik gemaakt van vochtregulerende verf om houtrot in de toekomst te voorkomen."
    }
];
