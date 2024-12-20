import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const socials = [
    { icon: <FaGithub />, link: 'https://github.com/Blaaaxo'},
    { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/brayan-fernandez-8182b0239/'}
]

export default function Socials({containerStyles, iconStyles} : {containerStyles: string, iconStyles: string}) {
    return (
        <div className={containerStyles}>
            {socials.map((social, index) => (
                <Link key={index} href={social.link} className={iconStyles}>
                    {social.icon}
                </Link>
            ))}
        </div>
    )
}
