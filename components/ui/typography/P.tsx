import { BaseType } from '@/types/ui';
import cnMerge from '@/utils/cnMerge';

export default function P({ children, className }: BaseType) {
    return <p className={cnMerge('font-light text-md leading-8 text-justify', className ?? '')}>{children}</p>;
}
