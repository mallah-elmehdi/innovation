import Section from '@/components/layout/Section';
import { ACTIVITIES } from '@/constants/activites';
import React from 'react';
import ActivityCard from './ActivityCard';

export default function Activities() {
    return (
        <Section title="OUR ACTIVITIES">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10 p-5">
                {ACTIVITIES.map(({ Icon, title, description }) => (
                    <ActivityCard key={title} description={description} title={title}>
                        <Icon />
                    </ActivityCard>
                ))}
            </div>
        </Section>
    );
}
