import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary-950 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Column 1: Brand & Personal */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                <span className="text-lg font-bold text-white font-display">Van Voorst</span>
                                <span className="text-lg font-light text-primary-200 font-display">Schilders</span>
                            </div>
                        </div>
                        <p className="text-sm text-primary-200 leading-relaxed max-w-xs">
                            Meesters in Duurzaam Schilderwerk. Kwaliteit, advies en betrouwbaarheid staan bij ons centraal.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            {/* Avatar Placeholder */}
                            <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-primary-800 bg-primary-800">
                                <Image src="/images/avatar.png" alt="Gerjan van Voorst" fill className="object-cover" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-white">Gerjan van Voorst</p>
                                <p className="text-xs text-primary-400">Eigenaar</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Snel naar */}
                    <div>
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Navigatie</h3>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-sm hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/aanpak" className="text-sm hover:text-white transition-colors">Over Ons</Link></li>
                            <li><Link href="/diensten" className="text-sm hover:text-white transition-colors">Diensten</Link></li>
                            <li><Link href="/impressies" className="text-sm hover:text-white transition-colors">Impressies</Link></li>
                            <li><Link href="/contact" className="text-sm hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Diensten */}
                    <div>
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Diensten</h3>
                        <ul className="space-y-3">
                            <li><Link href="/diensten" className="text-sm hover:text-white transition-colors">Schilderwerk</Link></li>
                            <li><Link href="/diensten" className="text-sm hover:text-white transition-colors">Behangen</Link></li>
                            <li><Link href="/diensten" className="text-sm hover:text-white transition-colors">Glaszetten</Link></li>
                            <li><Link href="/diensten" className="text-sm hover:text-white transition-colors">Stuc- & Sierpleister</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Contact</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex flex-col">
                                <span className="font-semibold text-primary-300">Locatie</span>
                                <span>Hoenlostraat 3</span>
                                <span>8043 RT Zwolle</span>
                            </li>
                            <li className="flex flex-col pt-2">
                                <span className="font-semibold text-primary-300">Contact</span>
                                <a href="tel:0651054145" className="hover:text-white">06-51054145</a>
                            </li>
                            {/* Phone if available, context implies 'direct bellen' desired action */}
                            <li className="pt-2">
                                <Link href="/contact" className="inline-block px-4 py-2 bg-primary-700 hover:bg-primary-600 rounded-md text-white md:bg-transparent md:border md:border-primary-700 md:hover:bg-primary-800">
                                    Offerte Aanvragen
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-primary-900 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-primary-500">
                        &copy; {currentYear} Van Voorst Schilders. Alle rechten voorbehouden.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="text-xs text-primary-500 hover:text-primary-300">Privacyverklaring</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
