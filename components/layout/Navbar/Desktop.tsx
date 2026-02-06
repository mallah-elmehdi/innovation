import MenuButton from '@/components/ui/MenuButton';
import { NAVBAR } from '@/constants/navbar';
import type { NavbarType } from '@/types/ui';
import classNames from 'classnames';
import Link from 'next/link';

export default function Desktop({ isWhite }: NavbarType) {
    return (
        <div className=" gap-10 items-center md:flex hidden">
            {NAVBAR.map((page) =>
                !page.menu ? (
                    <Link key={page.id} href={'/#' + page.id}>
                        <button className={classNames(isWhite ? 'text-white' : 'text-black', 'cursor-pointer hover:underline')}>
                            {page.title}
                        </button>
                    </Link>
                ) : (
                    <MenuButton
                        key={page.id}
                        button={
                            <div className={classNames(isWhite ? 'text-white' : 'text-black', 'cursor-pointer hover:underline')}>
                                {page.title}
                            </div>
                        }
                    >
                        {page.menu.map((item) => (
                            <Link key={item.id} href={'/#' + item.id}>
                                <div className={classNames('text-black', 'cursor-pointer hover:underline')}>{item.title}</div>
                            </Link>
                        ))}
                    </MenuButton>
                )
            )}
        </div>
    );
}
