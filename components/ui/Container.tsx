import type { BaseType } from '@/types/ui';
import cnMerge from '@/utils/cnMerge';

export default function Container({ children, className }: BaseType) {
    return (
        <div className="flex justify-center">
            <div className={cnMerge('w-300 overflow-x-hidden', className ?? '')}>{children}</div>
        </div>
    );
}
