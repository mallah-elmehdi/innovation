import type { MenuButtonType } from '@/types/ui';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import classNames from 'classnames';

const CENTER_POSITION = '-translate-x-1/2 left-1/2';
const LEFT_POSITION = 'left-0';
const RIGHT_POSITION = 'right-0';

export default function MenuButton({ children, button, position = 'right' }: MenuButtonType) {
    return (
        <Popover className="relative">
            <PopoverButton className="inline-flex items-center">{button}</PopoverButton>

            <PopoverPanel
                transition
                className={classNames(
                    'absolute z-50 w-screen max-w-max flex mt-2 ',
                    'transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in',
                    position === 'left' && LEFT_POSITION,
                    position === 'right' && RIGHT_POSITION,
                    position === 'center' && CENTER_POSITION
                )}
            >
                <div className="w-screen bg-white p-5 max-w-xs flex flex-col gap-5 overflow-hidden text-sm/6 shadow">{children}</div>
            </PopoverPanel>
        </Popover>
    );
}
