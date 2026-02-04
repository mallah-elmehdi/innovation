import { TeamCardType } from '@/types/ui';
import Image from 'next/image';

export default function TeamCard({ image, name, title }: TeamCardType) {
    return (
        <div className="bg-white p-2.5 h-full">
            <div className="p-2.5 h-full border-5 border-primary-dark flex flex-col items-center gap-2">
                <Image src={image} width={200} height={200} alt={`this is the picture of ${name}`} />
                <p className="text-center font-medium text-primary text-lg">{name}</p>
                <p className="text-center font-medium text-foreground text-xs">{title}</p>
            </div>
        </div>
    );
}
