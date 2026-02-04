import Avatar from '@/components/ui/Avatar';
import P from '@/components/ui/typography/P';
import { MethodologyCardType } from '@/types/ui';

export default function MethodologyCard({ children, title }: MethodologyCardType) {
    return (
        <div className="flex flex-col items-center gap-3">
            <Avatar className="bg-primary">{children}</Avatar>
            <P className="font-normal">{title}</P>
        </div>
    );
}
