import Section from '@/components/layout/Section';
import P from '@/components/ui/typography/P';
import { METHODOLOGY } from '@/constants/methodology';
import React from 'react';
import MethodologyCard from './MethodologyCard';
import { NAVBAR_SECTIONS } from '@/constants/navbar';

export default function Methodology() {
    return (
        <Section title="OUR METHODOLOGY" id={NAVBAR_SECTIONS.ourMethodology}>
            <div>
                <P className="mb-10">
                    We co-create with users and partners from day one to ensure solutions are deeply human-centered. Through iterative
                    prototyping, we turn insights into tangible concepts quickly. The final stage focuses on building the partnerships and
                    systems needed for real-world adoption.
                </P>

                <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
                    {METHODOLOGY.map(({ Icon, title }) => (
                        <MethodologyCard key={title} title={title}>
                            <Icon />
                        </MethodologyCard>
                    ))}
                </div>
            </div>
        </Section>
    );
}
