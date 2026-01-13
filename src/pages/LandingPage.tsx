
import { Hero } from '@/sections/Hero';
import { Problem } from '@/sections/Problem';
import { Solution } from '@/sections/Solution';
import { Pricing } from '@/sections/Pricing';
import { SprintDetails } from '@/sections/SprintDetails';
import { UseCases } from '@/sections/UseCases';
import { Testimonials } from '@/sections/Testimonials';
import { FAQ } from '@/sections/FAQ';
import { FinalCTA } from '@/sections/FinalCTA';

export function LandingPage() {
    return (
        <main>
            <Hero />
            <Problem />
            <Solution />
            <UseCases />
            <SprintDetails />
            <Testimonials />
            <Pricing />
            <FAQ />
            <FinalCTA />
        </main>
    );
}
