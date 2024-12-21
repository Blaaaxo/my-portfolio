"use client"
import React from 'react'
import { BsArrowDownRight } from 'react-icons/bs'
import Link from 'next/link'
import { motion } from 'framer-motion'

const services = [
    {
        number: '01',
        title: "Desarrollo web",
        description: "Desarrollo de sitios web a medida, con tecnologías modernas y responsive design.",
        href: ""
    },
    {
        number: '02',
        title: "Desarrollo FullStack",
        description: "Creación de aplicaciones web robustas y escalables utilizando tecnologías modernas. Especializado en plataformas e-learning, sistemas de gestión y aplicaciones empresariales.",
        href: ""
    },
    {
        number: '03',
        title: "Diseño UI/UX",
        description: "Diseño de interfaces de usuario y experiencia de usuario, con un enfoque centrado en el usuario.",
        href: ""
    },
    {
        number: '04',
        title: "Desarrollo WordPress",
        description: "Diseño y desarrollo de sitios web corporativos y tiendas online con WordPress. Personalización de temas, plugins y optimización de rendimiento. Soluciones completas para presencia digital empresarial.",
        href: ""
    },
    {
        number: '05',
        title: "Análisis de datos",
        description: "Implementación de soluciones de análisis de datos usando Python, Pandas y NumPy. Creación de dashboards interactivos, informes de inteligencia de negocio y segmentación de clientes.",
        href: ""
    },
    {
        number: '06',
        title: "SEO y Marketing Digital",
        description: "Optimización de sitios web para motores de búsqueda y campañas de marketing digital. Análisis de competencia, estrategias de contenido y posicionamiento en buscadores.",
        href: ""
    },
    {
        number: '07',
        title: "Consultoría Técnica",
        description: "Asesoramiento experto en arquitectura de software, optimización de procesos de desarrollo e implementación de CI/CD. Auditorías de código, mejoras de rendimiento y migración de sistemas legacy a tecnologías modernas.",
        href: ""
    },
    {
        number: '08',
        title: "Mentoría y Capacitación",
        description: "Capacitación en tecnologías web, desarrollo de software y metodologías ágiles. Mentoría personalizada para equipos de desarrollo y emprendedores.",
        href: ""
    },
]

function ServicesPage() {
    return (
        <section className='min-h-[80vh] flex flex-col justify-center py-16 xl:py-0'>
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 2.4,
                            duration: 0.4,
                            ease: 'easeIn'
                        }
                    }}
                    className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
                >
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className='flex-1 flex flex-col justify-center gap-6 group'
                        >

                            {/* top */}
                            <div className='w-full flex justify-between items-center'>
                                <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>
                                    {service.number}
                                </div>
                                <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                                    <BsArrowDownRight  className='text-primary text-2xl'/>
                                </Link>
                            </div>
                            {/* titulo */}
                            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
                            {/* descripción */}
                            <p className='text-white/60'>{service.description}</p>
                            {/* borde */}
                            <div className='border-b border-white/20 w-full'></div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default ServicesPage