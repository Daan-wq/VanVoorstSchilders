"use client";

import Link from "next/link";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, staggerContainer } from "@/utils/animations";

interface LocationInfoSplitProps {
    backgroundColor?: "white" | "primary-50" | "off-white";
}

export default function LocationInfoSplit({ backgroundColor = "white" }: LocationInfoSplitProps) {
    // Encoded address for Google Maps iframe
    const address = "Hoenlostraat 3, 8043 RT Zwolle";

    // Embed for Hoenlostraat 3, 8043 RT Zwolle
    const mapEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.0697925186065!2d6.0967383769741!3d52.53232897918342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c7df9f7d3d3d3d%3A0x1234567890abcdef!2sHoenlostraat%203%2C%208043%20RT%20Zwolle!5e0!3m2!1snl!2snl!4v1710000000000!5m2!1snl!2snl";
    // Constructing a search query based embed as fallback if PB is tricky to generate without proper API call, but 'maps/embed/v1' needs key.
    // The safest "no-key" embed is often the one from the share button.
    // Since I can't browse to get exact PB, I will use the Maps Embed API with `q` parameter which frames often support, or a generic pb structure for the lat/long of that address if known.
    // Hoenlostraat 3 Zwolle coordinates approx: 52.5323° N, 6.0967° E. 
    // Let's use a standard query embed which works well:
    // https://maps.google.com/maps?q=Hoenlostraat+3,+8043+RT+Zwolle&t=&z=15&ie=UTF8&iwloc=&output=embed

    return (
        <section className={clsx("w-full py-24", {
            "bg-white": backgroundColor === "white",
            "bg-primary-50": backgroundColor === "primary-50",
            "bg-off-white": backgroundColor === "off-white"
        })}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">

                {/* Left Column (Map) */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeInLeft}
                    className="relative aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden border border-primary-100 shadow-inner bg-primary-50"
                >
                    <iframe
                        src="https://maps.google.com/maps?q=Hoenlostraat+3,+8043+RT+Zwolle&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Locatie van Van Voorst Schilders"
                    ></iframe>
                </motion.div>

                {/* Right Column (Info) */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-primary-950 mb-8">Onze Gegevens</motion.h2>

                    <div className="space-y-6">
                        <motion.div variants={fadeInUp} className="flex gap-4 items-start">
                            <div className="h-10 w-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 flex-shrink-0">
                                <MapPin className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-primary-900">Bezoekadres</h3>
                                <p className="text-primary-600">Hoenlostraat 3</p>
                                <p className="text-primary-600">8043 RT Zwolle</p>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="flex gap-4 items-start">
                            <div className="h-10 w-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 flex-shrink-0">
                                <Mail className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-primary-900">E-mail</h3>
                                <a href="mailto:info@vanvoorstschilders.nl" className="text-primary-600 hover:text-primary-800 transition-colors">
                                    info@vanvoorstschilders.nl
                                </a>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="flex gap-4 items-start">
                            <div className="h-10 w-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 flex-shrink-0">
                                <Phone className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-primary-900">Telefoon</h3>
                                <a href="tel:0651054145" className="text-primary-600 hover:text-primary-800 transition-colors">
                                    06 5105 4145
                                </a>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="flex gap-4 items-start">
                            <div className="h-10 w-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 flex-shrink-0">
                                <Clock className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-primary-900">Bereikbaarheid</h3>
                                <p className="text-primary-600">Maandag t/m Vrijdag: 08:00 - 18:00</p>
                            </div>
                        </motion.div>

                    </div>

                    <motion.div variants={fadeInUp} className="mt-8">
                        <Link
                            href="https://maps.google.com"
                            target="_blank"
                            className="inline-flex items-center justify-center px-6 py-2 border border-primary-200 text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
                        >
                            Route plannen
                        </Link>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
