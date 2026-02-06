import Section from '@/components/layout/Section';
import { ACTIVITIES } from '@/constants/activites';
import { NAVBAR_SECTIONS } from '@/constants/navbar';
import ActivityCard from './ActivityCard';

export default function Activities() {
    return (
        <Section title="OUR ACTIVITIES" id={NAVBAR_SECTIONS.activities}>
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
