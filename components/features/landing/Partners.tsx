import Section from '@/components/layout/Section';
import P from '@/components/ui/typography/P';
import React from 'react';
import CarouselPartners from './CarouselPartners';

export default function Partners() {
    return (
        <Section title="Partners & Collaborators">
            <div>
                <P className="mb-8">
                    Our work is powered by collaboration. We are grateful to partner with forward-thinking organizations across the public,
                    private, and social sectors who share our commitment to creating lasting impact
                </P>

                <CarouselPartners />
            </div>
        </Section>
    );
}
