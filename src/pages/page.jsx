import React from 'react'
import Image from 'next/image'
import img from 'public/hero_banner.jpg'

export default function page() {
    return (
        <div>
            <Image src={img} placeholder='blur' alt='hero_banner' width='3840' height='2160'/>
        </div>
    )
}
