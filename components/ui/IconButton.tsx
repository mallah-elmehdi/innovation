import { IconButtonType } from '@/types/ui';
import cnMerge from '@/utils/cnMerge';

export default function IconButton({ children, className, ...props }: IconButtonType) {
    return (
        <button className={cnMerge('cursor-pointer', className ?? '')} {...props}>
            {children}
        </button>
    );
}
