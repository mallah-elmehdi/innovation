import { HTMLAttributes } from 'react';

// common
import { ReactNode } from 'react';

export type ChildrenType = { children: ReactNode };
export type ClassNameType = { className?: string };
export type BaseType = ChildrenType & ClassNameType;
export type PropsDivType = HTMLAttributes<HTMLDivElement>;
export type PropsButtonType = HTMLAttributes<HTMLButtonElement>;
export type IsWhiteType = { isWhite?: boolean };
export type Size = { size?: 'sm' | 'lg' };

// individuals
export type NavbarType = IsWhiteType & { isSticky?: boolean };
export type SectionType = ChildrenType & Partial<PropsDivType> & IsWhiteType;
export type SectionTitleType = Pick<SectionType, 'title' | 'isWhite'> & Size;
export type ActivityCardType = BaseType & { title: string; description: string };
export type StatNumberType = { number: string; title: string };
export type MethodologyCardType = BaseType & { title: string };
export type TeamCardType = { title: string; image: string; name: string };
export type ContactCardType = BaseType & { title: string };
export type IconButtonType = ChildrenType & Partial<PropsButtonType>;
export type MenuButtonType = ChildrenType & {
    position?: 'left' | 'right' | 'center';
    button: ReactNode;
};
