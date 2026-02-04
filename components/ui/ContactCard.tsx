import { ContactCardType } from '@/types/ui';
import Avatar from './Avatar';
import P from './typography/P';

export default function ContactCard({ children, title }: ContactCardType) {
    return (
        <div className="flex items-center gap-2">
            <Avatar className="bg-white text-secondary">{children}</Avatar>
            <P className="text-white font-medium">{title}</P>
        </div>
    );
}
