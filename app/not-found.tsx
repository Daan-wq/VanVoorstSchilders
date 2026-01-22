import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
            <h2 className="text-4xl font-bold text-primary-950 mb-4">404 - Pagina niet gevonden</h2>
            <p className="text-primary-600 mb-8">De pagina die u zoekt bestaat niet of is verplaatst.</p>
            <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary-900 text-white font-semibold rounded-full hover:bg-primary-800 transition-colors"
            >
                Terug naar Home
            </Link>
        </div>
    );
}
