import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaLongArrowAltDown } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';
import images from '../../../public/assets/images';

const Hero = () => {
    const ref = useRef();

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact')
        if (contactSection) {
            contactSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            })
        }
    }

    const variantsAward = {
        initial: { x: '-100%', opacity: 0 },
        animate: { x: 0, opacity: 1, transition: { duration: 0.5, staggerChildren: 1 } }
    }

    return (
        <div className='flex relative'>
            {/* Left Side */}
            <div className='w-1/2 h-screen flex flex-col justify-between py-10'>
                {/* title */}
                <h1 className='text-6xl font-semibold'><span className='text-[#f4c1ce]'>Hey There,</span> <br />I'm Hossam! </h1>
                {/* middle */}
                <div className='flex flex-col gap-2'>
                    <h2 className='text-lg font-semibold'>Top Rated Web Developer</h2>
                    <p className='text-gray-400'>I am a front-end developer with a passion <br /> for creating beautiful and functional websites.</p>

                    <motion.div 
                        variants={variantsAward}
                        initial={'initial'}
                        animate={'animate'}
                        className='flex items-center gap-2'
                    >
                        <motion.img variants={variantsAward} src={images.award1} className='w-10 h-10 p-2 bg-[#f4c1ce] rounded-full cursor-pointer' alt="award" />
                        <motion.img variants={variantsAward} src={images.award2} className='w-10 h-10 p-2 bg-[#f4c1ce] rounded-full cursor-pointer' alt="award" />
                        <motion.img variants={variantsAward} src={images.award3} className='w-10 h-10 p-2 bg-[#f4c1ce] rounded-full cursor-pointer' alt="award" />
                    </motion.div>
                </div>

                {/* button animation to move down to services */}
                <div ref={ref} onClick={scrollToContact} className='w-9 h-16 relative z-50 rounded-full border-2 border-[#f4c1ce] flex items-center justify-center cursor-pointer after:content-[""] after:w-1 after:h-5 after:rounded-full after:bg-[#f4c1ce] after:absolute after:animate-moveDownAnimation'>
                </div>
            </div>

            {/* Middle */}
            <div className='w-full h-full absolute bottom-0 flex items-end justify-center'>
                <div className='relative bottom-0 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px]'>
                    <img src={images.hero} className='w-full h-full object-contain absolute bottom-0 left-1/2 -translate-x-1/2 -z-10' alt="avatar" />
                    <div className='absolute -top-24 left-1/2 w-full h-full -translate-x-1/2 opacity-80 -z-20'>
                        <Canvas>
                            <Sphere args={[1, 200, 200]} scale={2}>
                                <MeshDistortMaterial
                                    color="#FCE3DD"
                                    attach="material"
                                    distort={.7}
                                    speed={3}
                                />
                            </Sphere>
                            <ambientLight intensity={1} />
                            <directionalLight color={"#DB8D9B"} position={[1, 2, 5]} />
                        </Canvas>
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className='w-1/2 flex flex-col justify-between items-end pb-10'>
                {/* socials */}
                <div className='flex flex-col gap-2 bg-[#2f204e] items-center px-2 py-3 relative'>
                    <img src={images.youtube} className='w-6 h-6 cursor-pointer' alt="" />
                    <img src={images.facebook} className='w-6 h-6 cursor-pointer' alt="" />
                    <img src={images.instagram} className='w-6 h-6 cursor-pointer' alt="" />
                    <div className='rotate-90 absolute top-[125%] left-50 w-[80px]'>
                        <p className='w-[80px] text-center bg-[#f4c1ce] rounded-br-xl relative after:content-[""] after:w-2 after:h-full after:absolute after:bg-red-500 after:right-0 after:top-0 animate-hiddenFollow after:rounded-br-xl overflow-hidden'>Follow</p>
                    </div>
                </div>

                {/* typing */}
                <div className='hidden md:flex flex-row-reverse items-end gap-2 w-2/3'>
                    <img src={images.man} className='w-16 h-16 rounded-full shadow-md shadow-[#f4c1ce]' alt="avatar" />
                    <div className='w-full h-min-[80px] bg-white p-3 text-black rounded-s-md rounded-tr-md mb-5'>
                        <TypeAnimation
                            sequence={[
                                1000,
                                'I am a front-end developer with a passion for creating beautiful and functional websites.',
                                1000,
                                'I am a front-end developer with a passion for specializing in React.js and Next.js.',
                                1000,
                                'I am a front-end developer with a passion for creating responsive and mobile-friendly websites.',
                                1000,
                            ]}
                            wrapper="span"
                            speed={40}
                            deleteSpeed={99}
                            repeat={Infinity}
                        />
                    </div>
                </div>

                {/* certificate */}
                <div className='flex flex-col items-center gap-2'>
                    <img src={images.certificate} className='w-20 h-20 rounded-full' alt="certificate" />
                    <p className='uppercase text-center'>
                        Route certificated <br />
                        professional web <br />
                        developer
                    </p>
                </div>

                {/* button animation to move down to contact */}
                <div onClick={scrollToContact} className="w-24 h-24 bg-[#f4c1ce] rounded-full relative animate-spin cursor-pointer">
                    <div className='flex items-center justify-center w-full h-full'>
                        <FaLongArrowAltDown className='w-1/2 h-1/2 text-black' />
                    </div>
                    <svg viewBox="0 0 200 200" className="absolute top-0 left-0 w-full h-full p-1">
                        <path id="circlePath" fill="none" d="M 100, 20 A 80, 80 0 1,1 100, 180 A 80, 80 0 1,1 100, 20" />
                        <text className="text-lg font-semibold">
                            <textPath href="#circlePath" startOffset="3%" fontSize={25} letterSpacing={10}>
                                Contact Me .
                            </textPath>
                        </text>
                        <text className="text-lg font-semibold">
                            <textPath href="#circlePath" startOffset="58%" fontSize={25} letterSpacing={10}>
                                Hire Now .
                            </textPath>
                        </text>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Hero