import { BaseType } from '@/types/ui';
import cnMerge from '@/utils/cnMerge';

export default function H3({ children, className }: BaseType) {
    return <h3 className={cnMerge('text-3xl leading-10 text-foreground font-medium', className ?? '')}>{children}</h3>;
}
