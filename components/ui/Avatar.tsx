import type { BaseType } from '@/types/ui';
import cnMerge from '@/utils/cnMerge';

export default function Avatar({ className, children }: BaseType) {
    return <div className={cnMerge('w-10 h-10 text-white flex items-center justify-center ', className ?? '')}>{children}</div>;
}
