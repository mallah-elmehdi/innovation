import { NAVBAR } from '@/constants/navbar';
import { NavbarType } from '@/types/ui';
import classNames from 'classnames';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import IconButton from '../ui/IconButton';
import Logo from '../ui/Logo';

export default function Navbar({ isWhite }: NavbarType) {
    return (
        <div className="p-5 flex gap-10 justify-between items-center">
            <Logo isWhite={isWhite} />

            <div className=" gap-10 items-center lg:flex hidden">
                {NAVBAR.map((page) => (
                    <Link key={page.id} href={'/#' + page.id}>
                        <button className={classNames(isWhite ? 'text-white' : 'text-black', 'cursor-pointer hover:underline')}>
                            {page.title}
                        </button>
                    </Link>
                ))}
            </div>

            <IconButton className="lg:hidden block text-white">
                <Menu />
            </IconButton>
        </div>
    );
}
