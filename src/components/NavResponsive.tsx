"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { CiMenuFries } from 'react-icons/ci'
import Link from 'next/link'
import { DialogTitle } from '@radix-ui/react-dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

const links = [
    {
        path: '/',
        name: 'Inicio'
    },
    {
        path: '/servicios',
        name: 'Servicios'
    },
    {
        path: '/curriculum',
        name: 'Currículum'
    },
    {
        path: '/proyectos',
        name: 'Proyectos'
    },
    {
        path: '/contacto',
        name: 'Contacto'
    },
]

export default function NavResponsive() {
    const path = usePathname()
    return (
        <nav>
            <Sheet>
                <SheetTrigger className='flex items-center justify-center'>
                    <CiMenuFries className='text-[32px] text-accent' />
                </SheetTrigger>
                <SheetContent className='flex flex-col gap-8'>
                    <VisuallyHidden>
                        <DialogTitle>Navegación</DialogTitle>
                    </VisuallyHidden>
                    {/* logo */}
                    <div className='mt-32 mb-40 text-center text-2xl'>
                        <Link href={'/'}>
                            <h1 className='text-4xl font-semibold'>
                                Brayan<span className='text-accent'>.</span>
                            </h1>
                        </Link>
                    </div>
                    {/* nav */}
                    <nav className='flex flex-col justify-center items-center gap-8'>
                        {links.map((link, index) => (
                            <Link
                                href={link.path}
                                key={index}
                                className={`${link.path === path && "text-accent border-b-2 border-accent"
                                    } text-xl capitalize hover:text-accent transition-all`}

                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>


                </SheetContent>
            </Sheet>
        </nav>
    )
}
