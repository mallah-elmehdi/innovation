'use client';
import { NAVBAR } from '@/constants/navbar';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import IconButton from '../../ui/IconButton';

export default function Mobile() {
    const [isOpen, setIsOpen] = useState(false);
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    return (
        <>
            <IconButton className="md:hidden block text-white" onClick={open}>
                <Menu />
            </IconButton>
            <Dialog open={isOpen} onClose={close} as="div" className="relative z-10 focus:outline-none">
                <div className="fixed inset-0 flex w-screen">
                    <DialogPanel
                        transition
                        className="w-full h-full p-5 bg-white duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                    >
                        <div className="relative">
                            <div className="absolute top-0 right-0">
                                <IconButton onClick={close}>
                                    <X />
                                </IconButton>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5">
                            {NAVBAR.map((page) =>
                                page.menu ? (
                                    page.menu.map((item) => (
                                        <Link onClick={close} key={item.id} href={'/#' + item.id}>
                                            <div className="text-black text-xl cursor-pointer hover:underline">{item.title}</div>
                                        </Link>
                                    ))
                                ) : (
                                    <Link onClick={close} key={page.id} href={'/#' + page.id}>
                                        <div className="text-black text-xl cursor-pointer hover:underline">{page.title}</div>
                                    </Link>
                                )
                            )}
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    );
}
