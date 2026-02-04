import Social from '@/components/features/global/Social';
import Container from '@/components/ui/Container';
import { mainFont } from '@/styles/fonts';
import { ChildrenType } from '@/types/ui';
import classNames from 'classnames';
import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
    title: 'Welcome to Innovation',
    description: '',
};

export default function RootLayout({ children }: Readonly<ChildrenType>) {
    return (
        <html lang="en">
            <body className={classNames('antialiased overflow-x-hidden text-foreground', mainFont.className)}>
                <Social />
                <Container>{children}</Container>
            </body>
        </html>
    );
}
