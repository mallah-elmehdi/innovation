import { BaseType } from '@/types/ui';
import cnMerge from '@/utils/cnMerge';

export default function H1({ children, className }: BaseType) {
    return (
        <h1
            className={cnMerge(
                'text-foreground font-black',
                'lg:text-5xl lg:leading-16',
                'md:text-4xl md:leading-12',
                'sm:text-3xl sm:leading-10',
                'text-2xl leading-8',

                className ?? ''
            )}
        >
            {children}
        </h1>
    );
}
