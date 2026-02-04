import { SOCIALS } from '@/constants/social';
import Link from 'next/link';
import React from 'react';
import Avatar from '../../ui/Avatar';

export default function Social() {
    return (
        <div className="fixed flex flex-col top-[50%] right-0 translate-y-[-50%] z-50">
            {SOCIALS.map(({ link, Icon, className }) => (
                <Link key={link} href={link} target="_blank">
                    <Avatar className={className}>
                        <Icon />
                    </Avatar>
                </Link>
            ))}
        </div>
    );
}
