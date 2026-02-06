import CarouselHeader from '@/components/features/landing/CarouselHeader';
import Navbar from '@/components/layout/Navbar/Navbar';
import H1 from '@/components/ui/typography/H1';

export default function Header() {
    return (
        <div className="relative">
            <CarouselHeader />
            <div className="bg-primary-dark/50 absolute top-0 left-0 w-full h-full z-1"></div>
            <div className="absolute top-0 left-0 z-10 w-full">
                <Navbar isWhite />
            </div>

            <div className="bg-white/25 absolute top-1/2 translate-y-[-50%] left-0 w-full z-1 p-10">
                <H1 className="text-white">
                    A dedicated space where strategy, technology, and design converge to create what&apos;s next.
                </H1>
            </div>
        </div>
    );
}
