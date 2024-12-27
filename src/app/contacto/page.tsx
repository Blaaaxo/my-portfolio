"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'


function Contacto() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='py-6'
    >
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          {/* form */}
          <div className='xl:h-[54%] order-2 xl:order-none'>
            <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
              <h3 className='text-4xl text-accent text-center'>¡Trabajemos Juntos!😁</h3>
              {/* descripción del formulario */}
              <p className='text-white/60'>
                Cuéntame sobre tu proyecto y cómo puedo ayudarte.
                Te responderé en menos de 24 horas.
              </p>
              {/* input */}
              <div>
                <Input
                  className='w-full'
                  type='text'
                  name='nombre'
                  placeholder='Nombre'
                />
                <Input
                className='w-full'
                  type='text'
                  name='email'
                  placeholder='email@example.com'
                />
                <Input
                className='w-full'
                  type='text'
                  name='asunto'
                  placeholder='Asunto'
                />
                <Textarea
                  className='h-[200px]'
                  name='mensaje'
                  placeholder='Escribe tu mensaje aquí...'
                />
              </div>
              {/* button */}
              <Button
                size={"md"}
                type='submit'
                className='max-w-40'>
                Enviar mensaje
              </Button>
            </form>
          </div>
          
          {/* imagen con movimiento */}
          <div className='xl:h-[54%] order-1 xl:order-none'>
            <motion.img
              src='/images/contacto.png'
              alt='Imagen de contacto'
              className='w-full h-auto'
              animate={{
                y: [0, 20, 0], // Movimiento de arriba hacia abajo
              }}
              transition={{
                duration: 2, // Duración del ciclo
                repeat: Infinity, // Repetir infinitamente
                ease: 'easeInOut', // Suavizado del movimiento
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contacto