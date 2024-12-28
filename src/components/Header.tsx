import React from 'react'
import Link from 'next/link'
import Nav from './Nav'
import { Button } from './ui/button'
import NavResponsive from './NavResponsive'

export default function Header() {
    return (
        <header className='py-8 xl:py-12 text-white '>
            <div className="container mx-auto flex justify-between items-center">

                {/* logo */}
                <Link href={'/'}>
                    <h1 className='text-4xl font-semibold'>
                        Brayan<span className='text-accent'>.</span>
                    </h1>
                </Link>

                {/* nav */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href={'/contacto'}>
                        <Button>Contratarme</Button>
                    </Link>
                </div>

                {/* nav responsive */}
                <div className="xl:hidden">
                    <NavResponsive />
                </div>
            </div>
        </header>
    )
}
