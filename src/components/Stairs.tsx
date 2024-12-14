"use client"
import { motion } from 'framer-motion'
import React from 'react'

const StairAnimation = {
    intial: {
        top: '0%',
    },
    animate: {
        top: '100%',
    },
    exit: {
        top: ['100%', '0%'],
    },
}

// calculate the reverse index for staggred delay
function reverseIndex(index: number) {

    const totalSteps = 6
    return totalSteps - index - 1
}

export default function Stairs() {
    return (
        <>
            {[...Array(6)].map((_, index) => (
                <motion.div
                    key={index}
                    variants={StairAnimation}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    transition={{
                        duration: 0.4,
                        ease: 'easeInOut',
                        delay: 0.1 * reverseIndex(index),
                    }}
                    className='h-full w-full bg-white relative'
                    />
            ))}
        </>
    )
}
