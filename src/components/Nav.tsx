"use client";
import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

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
        path:'/curriculum',
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

export default function Nav() {

    const path = usePathname();

    return (
        <nav className='flex gap-8'>
            {links.map((link, index) => (
                <Link 
                    href={link.path} 
                    key={index} 
                    className={`${link.path === path && "text-accent border-b-2 border-accent"   
                    } capitalize font-medium hover:text-accent transition-all`}
                    
                    >
                    {link.name}
                </Link>
            ))}
        </nav>
    )
}
