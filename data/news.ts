export interface NewsArticle {
    id: number;
    slug: string;
    title: string;
    category: string;
    image: string;
    date: string;
    description: string;
    content: string; // Longer story
}

export const newsArticles: NewsArticle[] = [
    {
        id: 1,
        slug: "5-veelgemaakte-fouten-zelf-schilderen",
        title: "5 veelgemaakte fouten bij zelf schilderen (en hoe wij ze voorkomen)",
        category: "Tips & Advies",
        image: "/images/pexels-blue-bird-7218009.jpg",
        date: "22 Jan 2026",
        description: "Zelf schilderen lijkt vaak eenvoudiger dan het is. Wij zetten de grootste valkuilen op een rij.",
        content: `Schilderen is een vak apart. Veel doe-het-zelvers beginnen vol enthousiasme, maar stuiten halverwege op onverwachte problemen. Hier zijn de 5 meest gemaakte fouten:

1. Slechte voorbereiding: Het overslaan van ontvetten en schuren is de nummer één reden dat verf niet goed hecht of snel weer loslaat. Wij besteden 70% van onze tijd aan de voorbereiding.
2. Gebruik van verkeerde materialen: Goedkope kwasten laten haren achter en goedkope verf dekt minder goed, waardoor u meer lagen nodig heeft. Wij werken uitsluitend met Sigma en Sikkens voor het beste resultaat.
3. Te dikke lagen aanbrengen: Mensen willen vaak dat het in één keer dekt, maar dikke lagen zorgen voor zakkers ('lopers') en een trage droging. Geduld is een schone zaak; meerdere dunne lagen geven een veel strakker resultaat.
4. Schilderen in de volle zon: De verf droogt dan te snel, waardoor u geen mooie vloeiing krijgt en strepen ziet. Wij plannen ons werk om de zon heen.
5. Overschatten van de eigen tijd: Een kamer schilderen kost vaak meer tijd dan een weekendje. Half afgemaakt werk is zonde van de investering.

Wilt u zeker zijn van een resultaat dat jarenlang meegaat zonder deze zorgen? Laat het dan over aan de vakman.`
    },
    {
        id: 2,
        slug: "hoe-vaak-buitenschilderwerk-onderhoud",
        title: "Hoe vaak moet buitenschilderwerk worden onderhouden?",
        category: "Onderhoud",
        image: "/images/pexels-blue-bird-7217985.jpg", // Updated image
        date: "15 Jan 2026",
        description: "Het tijdig bijhouden van uw schilderwerk voorkomt hoge reparatiekosten in de toekomst.",
        content: `Een veelgestelde vraag: \"Wanneer moet de schilder weer langskomen?\" Het antwoord hangt af van verschillende factoren, maar over het algemeen geldt een cyclus van 5 tot 7 jaar voor kwalitatief buitenschilderwerk.

Waarom is dit interval belangrijk?
Buitenschilderwerk heeft een beschermende functie. Zodra de verflaag barstjes vertoont of begint te poederen, heeft vocht vrij spel. Dit leidt onherroepelijk tot houtrot. De kosten voor het herstellen van houtrot zijn vele malen hoger dan een tijdige schilderbeurt.

Factoren die de levensduur beïnvloeden:
- De zonkant: Gevels op het zuiden en westen hebben meer te lijden door UV-straling en wind.
- De kleur: Donkere kleuren absorberen meer warmte, waardoor het hout meer 'werkt' en de verf sneller kan scheuren.
- Omgevingsfactoren: Staat uw woning vrij in de wind of juist beschut? Woont u nabij bomen of juist in de stad?

Bij Van Voorst Schilders bieden we een gratis inspectie aan. Zo weet u precies waar u aan toe bent en voorkomt u verrassingen.`
    },
    {
        id: 3,
        slug: "welke-kleuren-passen-bij-mijn-woning",
        title: "Welke kleuren passen bij mijn woning en woonstijl?",
        category: "Kleuradvies",
        image: "/images/pexels-kseniachernaya-5691479.jpg",
        date: "08 Jan 2026",
        description: "De juiste kleurkeuze bepaalt de sfeer en uitstraling van uw gehele woning.",
        content: `Kleur is emotie. Het kan een kleine kamer groter laten lijken, of een grote hal juist knusser maken. Maar hoe kiest u de juiste kleur uit duizenden mogelijkheden?

Stap 1: Kijk naar de vaste elementen
Heeft u een houten vloer, een specifieke kleur baksteen of antracietkleurige kozijnen? Deze elementen vormen de basis. Kies kleuren die hiermee harmonieren.

Stap 2: De lichtinval
Een kleur ziet er op het noorden (koel licht) heel anders uit dan op het zuiden (warm licht). Test kleuren altijd op verschillende momenten van de dag. Wij werken vaak met grote kleurstaal-vlakken op de muur om het effect echt te kunnen beoordelen.

Stap 3: Bepaal de sfeer
Wilt u rust en sereniteit (zandtonen, off-whites)? Of wilt u juist een statement maken met een accentmuur? Tegenwoordig zien we veel 'aardse' tinten die de natuur naar binnen halen.

Kleuradvies is onderdeel van onze service. Wij denken niet alleen mee over de verftechniek, maar ook over de uitstraling die uw huis verdient.`
    }
];
