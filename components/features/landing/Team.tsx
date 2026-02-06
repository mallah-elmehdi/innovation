import Section from '@/components/layout/Section';
import CarouselTeam from './CarouselTeam';
import H1 from '@/components/ui/typography/H1';
import P from '@/components/ui/typography/P';
import { NAVBAR_SECTIONS } from '@/constants/navbar';

export default function Team() {
    return (
        <Section title="THE PEOPLE BEHIND THE INNOVATION" isWhite className="bg-primary-dark" id={NAVBAR_SECTIONS.team}>
            <div className="">
                <H1 className="text-white mb-4">Meet the Minds Behind the Mission</H1>
                <P className="text-white mb-6">
                    Our team is a curated ecosystem of experts—from seasoned researchers and agile developers to visionary designers and
                    pragmatic strategists. We believe breakthrough innovation happens at the intersection of disciplines, which is why we
                    collaborate deeply from day one to bridge the gap between insight and impact.
                </P>

                <CarouselTeam />
            </div>
        </Section>
    );
}
