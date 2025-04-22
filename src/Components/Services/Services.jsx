import React, { useRef, useState, useEffect } from 'react'
import PhoneContainer from './Models/Phone/PhoneContainer'
import MugContainer from './Models/Mug/MugContainer'
import Counter from './Counter/Counter'
import { motion, useInView } from 'framer-motion'
import BirdContainer from './Models/Bird/BirdContainer'
import { imageServices } from '../../../public/assets/images'

const Services = () => {
  const [animationIndex, setAnimationIndex] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const ref = useRef()
  const isview = useInView(ref, { margin: '-200px' })

  // Add automatic model switching
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationIndex((prevIndex) => {
        // Cycle through models 1, 2, and 3
        return prevIndex === 3 ? 1 : prevIndex + 1
      })
    }, 5000) // Switch every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval)
  }, [])

  const textVariants = {
    initial: {
      x: '-100%',
      y: '-100%',
      opacity: 0
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1
      }
    }
  }

  const listVariants = {
    initial: {
      x: '-100',
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildren: 0.5
      }
    }
  }

  const handleModelLoad = () => {
    setIsLoading(false)
  }

  return (
    <section className="min-h-screen w-full py-8 md:py-12 px-4 md:px-8 overflow-hidden flex items-center justify-center">
      <div className='flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto gap-8 md:gap-12' ref={ref}>
        <div className='w-full md:w-1/2 space-y-6 md:space-y-8'>
          <motion.h2 
            variants={textVariants} 
            animate={isview ? 'animate' : 'initial'} 
            className='text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-center md:text-left'
          >
            How can i help you?
          </motion.h2>
          
          <motion.div 
            variants={listVariants} 
            animate={isview ? 'animate' : 'initial'} 
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3 md:gap-4'
          >
            {imageServices?.map((item) => (
              <motion.div 
                onClick={() => setAnimationIndex(item.id)} 
                variants={listVariants} 
                key={item.id} 
                className={`cursor-pointer flex items-center bg-white/20 gap-3 p-4 rounded-lg hover:bg-white/30 transition-all duration-200 hover:scale-[1.02] ${
                  animationIndex === item.id ? 'bg-white/40 scale-[1.02]' : ''
                }`}
              >
                <div className='rounded-full p-2.5 md:p-3' style={{ backgroundColor: item.color }}>
                  <img src={item.image} className='w-8 h-8 md:w-10 md:h-10' alt={item.title} />
                </div>
                <div>
                  <h3 className='text-base md:text-lg font-medium'>{item.title}</h3>
                  <p className='text-sm text-gray-400'>{item.number} projects</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className='flex flex-wrap items-center justify-center md:justify-start gap-6 md:gap-10 mt-6 md:mt-8'>
            <Counter from={0} to={150} text={'Projects Completed'} />
            <Counter from={0} to={300} text={'Happy Clients'} />
          </div>
        </div>

        <div className='w-full md:w-1/2 h-[300px] md:h-[400px] lg:h-[500px] relative'>
          <div className='absolute inset-0'>
            {isLoading && (
              <div className="w-full h-full flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
              </div>
            )}
            {animationIndex === 1 ? <PhoneContainer onLoad={handleModelLoad} /> : 
              animationIndex === 2 ? <MugContainer onLoad={handleModelLoad} /> : 
              <BirdContainer onLoad={handleModelLoad} />}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services