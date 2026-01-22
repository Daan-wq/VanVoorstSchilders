import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Van Voorst Schilders | Meesters in Duurzaam Schilderwerk",
  description: "Van Voorst Schilders in Zwolle: Meesters in duurzaam schilderwerk, behang, glas en stucwerk voor particulieren en bedrijven.",
  metadataBase: new URL("https://vanvoorstschilders.nl"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased text-foreground bg-background`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
