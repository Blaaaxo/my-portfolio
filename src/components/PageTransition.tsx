"use client"
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function PageTransition({ children }: Readonly<{ children: React.ReactNode }>) {

  const path = usePathname()

  return (
    <AnimatePresence>
      <div key={path}>
        <motion.div 
          initial={{ opacity: 1 }} 
          animate={{ 
            opacity: 0, 
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" } 
          }}
          className='h-screen w-screen fixed bg-primary top-0 pointer-events-none'
        />
        {children}
      </div>
    </AnimatePresence>
  )
}
