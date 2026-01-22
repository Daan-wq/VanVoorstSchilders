import HeroTextOnly from "@/components/HeroTextOnly";
import SchedulerBlock from "@/components/SchedulerBlock";
import ContactFormSplit from "@/components/ContactFormSplit";
import LocationInfoSplit from "@/components/LocationInfoSplit";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata = {
    title: "Contact"
};

export default function ContactPage() {
    return (
        <main>
            {/* 2. hero-text-only (Need override or new props for reusability if content differs? 
           HeroTextOnly template implies just title/text. 
           I implemented HeroTextOnly with hardcoded "Ons werk spreekt voor zich".
           
           FIX: I need to refactor HeroTextOnly to accept props similar to HeroVisual.
           
           Action: I will overwrite HeroTextOnly with props support first.
      */}
            {/* Dynamic Hero is refactored below */}
            <HeroTextOnly
                label="Contact"
                title="Neem contact op"
                text="Heeft u vragen of wilt u een offerte? Vul het formulier in of bel ons direct."
            />

            {/* 3. scheduler-block */}
            <SchedulerBlock backgroundColor="primary-50" />

            {/* 4. contact-form-split */}
            <ContactFormSplit backgroundColor="off-white" />

            {/* 6. location-info-split */}
            <LocationInfoSplit backgroundColor="primary-50" />

            {/* 7. faq-accordion */}
            <FaqAccordion backgroundColor="white" />
        </main>
    );
}
