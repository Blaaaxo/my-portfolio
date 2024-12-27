"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from 'swiper';
import "swiper/css"
import SliderButtons from '@/components/SliderButtons';

const proyectos = [
  {
    number: "06",
    title: "Landing Page Digital Technology Net",
    description: "Diseño integral y desarrollo de landing page corporativa con despliegue en infraestructura VPS y optimización de rendimiento.",
    stack: [
      { name: "TypeScript" },
      { name: "NodeJs" },
      { name: "NextJs" },
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Shadcn UI" }
    ],
    image: "/images/proyectos/digital-technology-net.png",
  },
  {
    number: "05",
    title: "Sistema de Gestión de Planeación de Proyectos de Aula",
    description: "Sistema integral de gestión con implementación del modelo PHVA e integración de IA Gemini para análisis de mejora continua.",
    stack: [
      { name: "PHP" },
      { name: "Laravel 11" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "InertiaJs" },
      { name: "NodeJs" },
      { name: "Tailwind CSS" },
      { name: "PostgreSQL" }
    ],
    image: "/images/proyectos/gestion-pda.png",
  },
  {
    number: "04",
    title: "Chat de IA con Gemini",
    description: "Desarrollo de una aplicación de chat conversacional con integración de la API de Gemini para respuestas en tiempo real.",
    stack: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "NextJs" },
      { name: "NodeJs" },
      { name: "Google Gemini AI" },
      { name: "Tailwind CSS" }
    ],
    image: "/images/proyectos/chat-gemini.png",
  },
  {
    number: "03",
    title: "Plataforma E-learning Professional Diving Institute",
    description: "Lideré el desarrollo de una plataforma de cursos en línea para transformar la presencia digital de una agencia de buceo, permitiendo la venta efectiva de cursos en línea.",
    stack: [
      { name: "PHP" },
      { name: "Laravel" },
      { name: "Jetstream" },
      { name: "Livewire" },
      { name: "Alpine.js" },
      { name: "WordPress" },
      { name: "MySQL" },
      { name: "Tailwind CSS" },
      { name: "JavaScript ES6" },
      { name: "NodeJs" },
    ],
    image: "/images/proyectos/cursos-pdi.png",
  },
  {
    number: "02",
    title: "Analizador de Seguridad Web",
    description: "Herramienta web de análisis de seguridad de URLs para detectar filtraciones en dark/deep web y evaluación de seguridad.",
    stack: [
      { name: "Python" },
      { name: "Flask" },
      { name: "Tailwind CSS" },
      { name: "NumPy" },
      { name: "Pandas" }
    ],
    image: "/images/proyectos/analizador-seguridad.png",
  },
  {
    number: "01",
    title: "Plataforma de Gestión Académica",
    description: "Desarrollo de una plataforma web para la gestión de proyectos académicos con sistema de carga de proyectos, comentarios y texto enriquecido.",
    stack: [
      { name: "PHP" },
      { name: "Laravel" },
      { name: "Laravel Breeze" },
      { name: "Tailwind CSS" },
      { name: "AlpineJs" },
      { name: "NodeJs" },
      { name: "PostgreSQL" }
    ],
    image: "/images/proyectos/pda.png",
  },

]

function Proyectos() {

  const [proyecto, setProyecto] = useState(proyectos[0])

  const handleChange = (swiper: SwiperClass) => {
    const index = swiper.activeIndex
    setProyecto(proyectos[index])

  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1, 
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn'}
      }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex  flex-col gap-[30px] h-[50%]'>
              {/* outline num */}
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                {proyecto.number}
              </div>
              {/* title */}
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                {proyecto.title}
              </h2>
              {/* description */}
              <p className='text-white/60'>{proyecto.description}</p>
              {/* stack */}
              <ul className='flex flex-wrap gap-4'>
                {proyecto.stack.map((stack, index) => (
                  <li key={index} className='text-xl text-accent'>
                    {stack.name}
                    {index !== proyecto.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className='border border-white/20'></div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper 
              spaceBetween={30} 
              slidesPerView={1}
              className='xl:h-520px] mb-12'
              onSlideChange={handleChange}
            >
              {proyectos.map((proyecto, index) => (
                <SwiperSlide key={index} className='w-full'>
                  <div className='h-[460px] relative group flex justify-center items-center bg-white'>
                    {/* overview */}
                    <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                    <div className='relative w-full h-full'>
                      <Image
                        src={proyecto.image}
                        fill
                        className='object-contain'
                        alt={proyecto.title}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider buttons */}
              <SliderButtons 
                containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
                btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'
                />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Proyectos