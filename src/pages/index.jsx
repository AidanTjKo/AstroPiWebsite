import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

import heroBanner from 'public/hero_banner.jpg'
import wave from 'src/images/photos/wave.jpeg'
import iss from '/src/images/photos/iss.jpg'
import spaceBanner from '/src/images/photos/spaceBannerTransformed.jpeg'

export default function Index() {
    return (
        <>
            <Head>
                <title>Home Page</title>
                <meta
                name="Home Page"
                content="Software I use, gadgets I love, and other things I recommend."
                />
            </Head>
            <div style={{backgroundImage:`url(${heroBanner.src})`,backgroundSize:"cover", height:"85vh",width:"100wh"}} className="bg-yellow-900 relative">
                <p className="text-5xl font-semibold tracking-wider py-56 leading-10 md:text-center sm:text-left md:px-auto md:w-auto px-10 w-20 text-slate-300 ">Los Pollos El En Espacio</p>
                <div className="absolute w-10 bottom-4 left-1/2">
                    <svg className="scale-100 animate-pulse w-16 h-16 -ml-8"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.5" stroke="white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                {/* <Image src={img} placeholder='blur' alt='hero_banner' width='3840' height='2160'/> */}
                {/* <Image priority src={arrow} className="bg-red"/> */}
            </div>
            <div className="bg-neutral-50">
                <p className="md:text-4xl text-3xl pt-44 font-medium md:px-48 sm:px-auto leading-10 text-center text-slate-500">Does Time Dilation Affect the ISS and if so How?</p>
                <p className="md:text-3xl text-2xl pt-20 pb-56 md:px-48 sm:px-auto leading-10 text-center text-slate-500">
                Embark on a journey with us, as we venture into the captivating domain of 
                physics to unravel the intriguing effects of Time Dilation aboard the International Space Station (ISS).
                </p>
            </div>
            <div style={{backgroundImage:`url(${iss.src})`}} className="h-screen w-screen bg-no-repeat bg-center bg-cover content-center relative">
                <div className='relative text-center py-96 hover:backdrop-blur-sm hover:backdrop-brightness-75 w-full h-full ease-in-out duration-500'>
                    <Link href="/experiment" className="mx-auto relative snap-center px-20 py-10 font-bold text-white rounded-lg group">
                        <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-3 -translate-y-3 border-white border-2 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-3 translate-y-3 bg-gray-800 border-white border-2 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
                        <span className="relative text-xl text-white" >Experiment</span>
                    </Link>
                </div>
            </div>
            <div style={{backgroundImage:`url(${wave.src})`,backgroundSize:"contain",backgroundRepeat:"no-repeat", height:"100vh", backgroundPosition:"center"}} className="relative border-solid border-white border-2">
                <div className='relative text-center py-96 hover:backdrop-blur-sm hover:backdrop-brightness-90 w-full h-full ease-in-out duration-500'>
                    <Link href="/results" className="mx-auto relative px-20 py-10 font-bold text-white rounded-lg group">
                        <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-3 -translate-y-3 border-white border-2 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-3 translate-y-3 bg-gray-800 border-white border-2 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
                        <span className="relative text-xl text-white" >Results</span>
                    </Link>
                </div>
            </div>
            <div style={{backgroundImage:`url(${spaceBanner.src})`}} className="h-screen w-screen bg-contain bg-center bg-repeat content-center relative">
                <Link href="/our-team" className="py-8 -ml-32 -mt-36 left-1/2 top-1/2 text-center relative inline-flex items-center justify-center px-20 py-6 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30"></span>
                    <span className="relative group-hover:text-black">Meet the Team</span>
                </Link>
            </div>
        </>
    )
}



