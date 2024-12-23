"use client"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from '@/components/ui/tabs';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';
import React from 'react'
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaNodeJs,
    FaFigma,
    FaJava,
    FaPython,
    FaPhp,
    FaLaravel,
    FaAngular,
    FaBootstrap,
    FaWordpress
} from 'react-icons/fa'
import { SiTypescript, SiFlask, SiNextdotjs, SiTailwindcss, SiSpring } from "react-icons/si";

// sobre mi
const sobreMi = {
    title: 'Sobre mí',
    description: "Ingeniero en sistemas que ofrece versatilidad y eficiencia. Con experiencia en múltiples lenguajes y frameworks, puedo adaptarme rápidamente a cualquier stack tecnológico, reduciendo los tiempos de desarrollo. Mi experiencia en diferentes proyectos demuestra mi capacidad para crear soluciones intuitivas y centradas en el usuario. Contratarme significa obtener un profesional que no solo codifica, sino que entiende y mejora los procesos de negocio, garantizando un retorno de inversión superior en cada proyecto.",
    info: [
        {
            title: "Nombre",
            value: "Brayan Fernandez"
        },
        {
            title: "Experiencia",
            value: "3 años"
        },
        {
            title: "Lenguajes",
            value: "Español, Inglés (B1)"
        },
        {
            title: "Freelance",
            value: "Disponible"
        }
    ]
}

// experiencia
const experiencia = {
    icon: "/images/curriculum/badge.svg",
    title: "Mi experiencia",
    description: "Soy un Ingeniero en Sistemas con experiencia especializada en desarrollo Full Stack y análisis de datos. He liderado proyectos significativos como la creación de una plataforma de cursos en linea, el desarrollo de aplicaciones para gestión de infraestructura urbana y la implementación de sistemas académicos. Mi expertise abarca tecnologías modernas como Java/Spring, PHP/Laravel, JavaScript/TypeScript, React, Angular y Python, junto con experiencia en análisis de datos e integración de IA. Me destaco por mi capacidad de adaptación rápida a nuevas tecnologías y por crear soluciones que aportan valor real a los negocios, respaldado por una sólida formación académica y certificaciones profesionales en desarrollo de software.",
    items: [
        {
            company: "Professional Diving Institute",
            position: "Desarrollador Full Stack",
            duration: "Oct, 2023 - Mar, 2024",
        },
        {
            company: "IKTRON SMART SOLUTIONS",
            position: "Desarrollador de Software",
            duration: "Feb, 2023 - Dic, 2023",
        },
        {
            company: "Fundación Universitaria Tecnológico Comfenalco",
            position: "Desarrollador de Software",
            duration: "Feb, 2023 - Dic, 2023",
        }
    ]
}

// educacion
const educacion = {
    icon: "/images/curriculum/cap.svg",
    title: "Mi educación",
    description: "Mi formación académica en Ingeniería en Sistemas y Tecnología en Desarrollo de Software de la Fundación Universitaria Tecnológico Comfenalco (2020-2024) me ha proporcionado una sólida base técnica y teórica en el desarrollo de software, la cual complemento constantemente con nuevos conocimientos y tecnologías emergentes.",
    items: [
        {
            title: "Ingeniería en Sistemas",
            institution: "Fundación Universitaria Tecnológico Comfenalco",
            duration: "2023 - 2024",
        },
        {
            title: "Tecnológia en Desarrollo de Software",
            institution: "Fundación Universitaria Tecnológico Comfenalco",
            duration: "2020 - 2022",
        }
    ],
    certifactions: [
        {
            title: "Desarrollador PHP (Orientado a objetos)",
            institution: "Fundación Carlos Slim",
            duration: "2024",
        },
        {
            title: "Universidad Angular - De Cero a Experto en Angular",
            institution: "Udemy",
            duration: "2024",
        },
        {
            title: "React y Spring Boot : Crea tu primera App Full Stack",
            institution: "Udemy",
            duration: "2024",
        }
    ]
}

const skills = {
    title: "Mis habilidades",
    description: "Mi experiencia en desarrollo de software me ha permitido adquirir habilidades en múltiples lenguajes y tecnologías, lo que me permite adaptarme rápidamente a cualquier stack tecnológico. A continuación, se detallan las tecnologías en las que tengo experiencia y me siento cómodo trabajando.",
    items: [
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3 />, name: "CSS3" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <FaReact />, name: "React" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <FaAngular />, name: "Angular" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <FaBootstrap />, name: "Bootstrap" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <FaJava />, name: "Java" },
        { icon: <FaPython />, name: "Python" },
        { icon: <FaPhp />, name: "PHP" },
        { icon: <SiSpring />, name: "Spring" },
        { icon: <FaLaravel />, name: "Laravel" },
        { icon: <FaWordpress />, name: "WordPress" },
        { icon: <SiFlask />, name: "Flask" },
        { icon: <FaFigma />, name: "Figma" },
    ]
}

function Curriculum() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0.2, duration: 0.5, ease: 'easeIn' }
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue='experiencia'
                    className='flex flex-col lg:flex-row gap-[60px]'
                >
                    <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
                        <TabsTrigger value='experiencia'>Experiencia</TabsTrigger>
                        <TabsTrigger value='educacion'>Educación</TabsTrigger>
                        <TabsTrigger value='habilidades'>Habilidades</TabsTrigger>
                        <TabsTrigger value='sobre-mi'>Sobre mí</TabsTrigger>
                    </TabsList>

                    {/* contenido */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: { delay: 0.2, duration: 0.5, ease: 'easeIn' }
                        }}
                        className='min-h-[70vh] w-full'>
                        {/* experiencia */}
                        <TabsContent
                            value='experiencia'
                            className='w-full'
                        >
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{experiencia.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experiencia.description}</p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {experiencia.items.map((expe, index) => (
                                            <li key={index} className='bg-[#232329] min-h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                <span className='text-accent'>{expe.duration}</span>
                                                <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{expe.position}</h3>
                                                <div className='flex items-center gap-3'>
                                                    <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                    <p>{expe.company}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* educación */}
                        <TabsContent
                            value='educacion'
                            className='w-full'
                        >
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{educacion.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{educacion.description}</p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {educacion.items.map((item, index) => (
                                            <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                <span className='text-accent'>{item.duration}</span>
                                                <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.title}</h3>
                                                <div className='flex items-center gap-3'>
                                                    <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                    <p>{item.institution}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <h3 className='my-12 text-4xl font-bold'>Certificaciones</h3>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {educacion.certifactions.map((item, index) => (
                                            <li key={index} className='bg-[#232329] min-h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                <span className='text-accent'>{item.duration}</span>
                                                <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.title}</h3>
                                                <div className='flex items-center gap-3'>
                                                    <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                    <p>{item.institution}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* habilidades */}
                        <TabsContent
                            value='habilidades'
                            className='w-full h-full'
                        >
                            <div className='flex flex-col gap-[30px]'>
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                                </div>
                                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]'>
                                    {skills.items.map((skill, index) => (
                                        <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center group'>
                                                        <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className='capitalize'>{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* sobre-mi */}
                        <TabsContent
                            value='sobre-mi'
                            className='w-full text-center xl:text-left' 
                        >
                            <div className='flex flex-col gap-[30px]'>
                                <h3 className='text-4xl font-bold'>{sobreMi.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{sobreMi.description}</p>
                                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                                    {sobreMi.info.map((info, index) => (
                                        <li key={index} className='flex justify-center items-center xl:justify-start gap-4'>
                                            <span className='text-white/60'>{info.title}</span>
                                            <span className='text-xl'>{info.value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>
                    </motion.div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Curriculum