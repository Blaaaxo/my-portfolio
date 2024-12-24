"use client"
import React from 'react'
import { useSwiper } from 'swiper/react'
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'

export default function SliderButtons({ containerStyles, btnStyles }: { containerStyles: string, btnStyles: string  }) {
    const swiper = useSwiper()
    return (
        <div className={containerStyles}>
            <button className={btnStyles} onClick={() => swiper.slidePrev()} >
                <PiCaretLeftBold  />
            </button>
            <button className={btnStyles} onClick={() => swiper.slideNext()}>
                <PiCaretRightBold  />
            </button>
        </div>
    )
}
