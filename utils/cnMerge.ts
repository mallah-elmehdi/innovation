import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

export default function cnMerge(...classes: string[]) {
    return twMerge(classNames(...classes));
}
