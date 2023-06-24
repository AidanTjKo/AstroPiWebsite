import React from 'react'
import Image from 'next/image'
import heroBanner from 'public/hero_banner.jpg'
import wave from 'src/images/photos/wave.jpeg'
import iss from 'src/images/photos/iss.jpg'

export default function Index() {
    return (
        <>
            <div style={{backgroundImage:`url(${heroBanner.src})`,backgroundSize:"cover", height:"85vh",width:"100wh"}} className="bg-yellow-900 relative">
                <p className="text-5xl font-semibold tracking-wider py-56 px-48 leading-10 text-center text-slate-300">Los Pollos El En Espacio</p>
                <div className="absolute w-10 bottom-4 left-1/2">
                    <svg className="scale-100 animate-pulse w-6 h-6"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                {/* <Image src={img} placeholder='blur' alt='hero_banner' width='3840' height='2160'/> */}
                {/* <Image priority src={arrow} className="bg-red"/> */}
            </div>
            <div style={{width:"10wh"}} className="bg-neutral-50">
                <p className="text-5xl pt-44 font-medium  px-48 leading-10 text-center text-slate-500">Does Time Dilation Affect the ISS and if so How?</p>
                <p className="text-3xl pt-20 pb-56  px-48 leading-10 text-center text-slate-500">Embark on a journey with us, as we venture into the captivating domain of physics to unravel the intriguing effects of Time Dilation aboard the International Space Station (ISS).</p>
            </div>
            <div style={{backgroundImage:`url(${iss.src})`,backgroundSize:"cover", height:"100vh",width:"100wh"}} className="bg-yellow-900 relative">

            </div>
            <div style={{backgroundImage:`url(${wave.src})`,backgroundSize:"contain",backgroundRepeat:"no-repeat", height:"100vh", backgroundPosition:"center"}} className="relative border-solid border-white border-2">

            </div>
        </>
    )
}



