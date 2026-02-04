import Avatar from '@/components/ui/Avatar';
import { ActivityCardType } from '@/types/ui';
import cnMerge from '@/utils/cnMerge';

export default function ActivityCard({ children, title, description, className }: ActivityCardType) {
    return (
        <div className={cnMerge('bg-white p-5 relative shadow', className ?? '')}>
            <div className="absolute top-0 left-0 shadow translate-[-50%]">
                <Avatar className="bg-primary text-white">{children}</Avatar>
            </div>
            <p className="text-center font-medium text-primary text-lg mb-2">{title}</p>
            <p className="text-center font-medium text-foreground text-xs">{description}</p>
        </div>
    );
}
