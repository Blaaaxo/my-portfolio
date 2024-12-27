"use client"
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react';


function Contacto() {

  const [state, handleSubmit] = useForm("xwkgyrep");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setIsModalOpen(true);
    }
  }, [state.succeeded]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
            <form action={handleSubmit} className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
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
                  name='name'
                  placeholder='Nombre'
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
                <Input
                  className='w-full'
                  type='text'
                  name='email'
                  placeholder='email@example.com'
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <Input
                  className='w-full'
                  type='text'
                  name='subject'
                  placeholder='Asunto'
                />
                <ValidationError
                  prefix="Subject"
                  field="Subject"
                  errors={state.errors}
                />
                <Textarea
                  className='h-[200px]'
                  name='message'
                  placeholder='Escribe tu mensaje aquí...'
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              {/* button */}
              <Button
                size={"md"}
                type='submit'
                disabled={state.submitting}
                className='max-w-40'>
                {state.submitting ? 'Enviando...' : 'Enviar mensaje'}
              </Button>
            </form>
          </div>

          {/* imagen con movimiento */}
          <div className='xl:h-[54%] order-1 xl:order-none xl:mt-24 flex justify-center items-center'>
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
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative bg-primary p-8 rounded-lg shadow-lg z-10 text-white">
            <h2 className="text-xl font-bold mb-4">Mensaje enviado</h2>
            <p>Tu mensaje ha sido enviado exitosamente.</p>
            <Button
              onClick={closeModal}
            >
              Cerrar
            </Button>
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default Contacto