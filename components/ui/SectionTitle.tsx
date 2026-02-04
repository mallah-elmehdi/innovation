import React from 'react';
import H2 from './typography/H2';
import classNames from 'classnames';
import { SectionTitleType } from '@/types/ui';

export default function SectionTitle({ title, isWhite, size }: SectionTitleType) {
    return (
        <H2
            className={classNames(
                'font-light relative',
                'before:absolute before:content-[""]',
                'before:left-0 before:top-1/2',
                'before:translate-y-[-50%]',
                size === 'sm'
                    ? 'pl-20 before:w-15 before:h-0.5 text-xl'
                    : classNames(
                          'lg:pl-30 lg:before:w-25 lg:before:h-1 lg:text-2xl',
                          'md:pl-25 md:before:w-20 md:before:h-1 text-xl',
                          'sm:pl-25 sm:before:w-20 before:h-0.5',
                          'pl-20 before:w-15'
                      ),
                isWhite ? 'before:bg-white text-white' : 'before:bg-secondary text-primary'
            )}
        >
            {title}
        </H2>
    );
}
