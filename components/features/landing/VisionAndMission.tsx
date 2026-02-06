import Section from '@/components/layout/Section';
import P from '@/components/ui/typography/P';
import { NAVBAR_SECTIONS } from '@/constants/navbar';
import Image from 'next/image';

export default function VisionAndMission() {
    return (
        <Section title="OUR VISION AND MISSION" id={NAVBAR_SECTIONS.visionAndMission}>
            <div className="grid lg:grid-cols-2 items-center gap-10 grid-cols-1">
                <div className="flex flex-col gap-10">
                    <Image src="/brand/logo.webp" width={300} height={30} alt="this is the innovation logo" />

                    <P>
                        We envision a future where human-centered ingenuity solves complex global challenges through collaboration and
                        courage. Our mission is to build that future by co-creating with partners—fusing deep research, rapid
                        experimentation, and scalable design to turn insights into impactful realities. We measure our success by the
                        positive change and new capabilities we help foster within organizations and communities.
                    </P>
                </div>

                <Image
                    width={1200}
                    height={200}
                    // fill={true}
                    src="/landing/vision-and-mission.webp"
                    alt="a building photo for vision and mission section"
                    className="shadow"
                />
            </div>
        </Section>
    );
}
