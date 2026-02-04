import H2 from '@/components/ui/typography/H2';
import P from '@/components/ui/typography/P';
import { StatNumberType } from '@/types/ui';

export default function StatNumber({ number, title }: StatNumberType) {
    return (
        <div>
            <H2 className="text-white">
                <strong>{number}</strong>
            </H2>
            <P className="text-white font-semibold">{title}</P>
        </div>
    );
}
