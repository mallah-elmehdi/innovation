import { NavbarType } from '@/types/ui';
import Logo from '../../ui/Logo';
import Desktop from './Desktop';
import Mobile from './Mobile';

export default function Navbar({ isWhite }: NavbarType) {
    return (
        <div className="p-5 flex gap-10 justify-between items-center">
            <Logo isWhite={isWhite} />

            <Desktop isWhite={isWhite} />
            <Mobile />
        </div>
    );
}
