import { IsWhiteType } from '@/types/ui';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ isWhite }: IsWhiteType) {
    return (
        <Link href="/">
            <Image src={`/brand/${isWhite ? 'logo-white' : 'logo'}.webp`} width={200} height={30} alt="this is the innovation logo" />
        </Link>
    );
}
