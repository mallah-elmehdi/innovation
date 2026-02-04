import { SectionType } from '@/types/ui';
import classNames from 'classnames';
import SectionTitle from '../ui/SectionTitle';

export default function Section({ title, children, className, isWhite, ...props }: SectionType) {
    return (
        <section className={classNames('flex flex-col gap-10 p-10 relative', className)} {...props}>
            <SectionTitle title={title} isWhite={isWhite} />
            {children}
        </section>
    );
}
