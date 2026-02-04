import { BaseType } from '@/types/ui';
import cnMerge from '@/utils/cnMerge';

export default function H2({ children, className }: BaseType) {
    return <h2 className={cnMerge('text-4xl leading-14 text-foreground font-semibold', className ?? '')}>{children}</h2>;
}
