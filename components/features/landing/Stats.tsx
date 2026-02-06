import Section from '@/components/layout/Section';
import H1 from '@/components/ui/typography/H1';
import P from '@/components/ui/typography/P';
import { STATS } from '@/constants/stats';
import StatsBG from '@/public/landing/stats.webp';
import classNames from 'classnames';
import StatNumber from './StatNumber';
import { NAVBAR_SECTIONS } from '@/constants/navbar';

export default function Stats() {
    return (
        <Section
            title="THE RIPPLE EFFECT IN NUMBERS"
            style={{
                backgroundImage: `url(${StatsBG.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
            }}
            isWhite
            className={classNames(
                'relative before:absolute before:bg-secondary/50',
                'before:top-0 before:left-0',
                'before:w-full before:h-full before:z-0'
            )}
            id={NAVBAR_SECTIONS.innovationInNumbers}
        >
            <div className="z-10">
                <H1 className="text-white mb-4">Ecosystem growth and knowledge sharing.</H1>

                <P className="text-white mb-2">
                    We measure our success not by ideas alone, but by the concrete outcomes we deliver with our partners. Our work has
                    resulted in 12 new ventures launched, over 45,000 hours of expert collaboration logged, and a 95% partner retention
                    rate—proving that our model doesn&apos;t just inspire, it delivers.
                </P>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 grid-cols-1">
                    {STATS.map(({ title, number }) => (
                        <StatNumber key={title} number={number} title={title} />
                    ))}
                </div>
            </div>
        </Section>
    );
}
