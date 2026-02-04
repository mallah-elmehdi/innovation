import Activities from '@/components/features/landing/Activities';
import Header from '@/components/features/landing/Header';
import Methodology from '@/components/features/landing/Methodology';
import Partners from '@/components/features/landing/Partners';
import Stats from '@/components/features/landing/Stats';
import Team from '@/components/features/landing/Team';
import VisionAndMission from '@/components/features/landing/VisionAndMission';
import Footer from '@/components/layout/Footer';

export default function Home() {
    return (
        <div className="flex flex-col gap-20">
            <Header />
            <VisionAndMission />
            <Activities />
            <Stats />
            <Methodology />
            <Team />
            <Partners />
            <Footer />
        </div>
    );
}
