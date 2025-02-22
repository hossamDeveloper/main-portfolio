import React, { useRef, useState } from 'react'
import PhoneContainer from './Models/Phone/PhoneContainer';
import MugContainer from './Models/Mug/MugContainer';
import Counter from './Counter/Counter';
import { motion, useInView } from 'motion/react';
import BirdContainer from './Models/Bird/BirdContainer';
import { imageServices } from '../../../public/assets/images';
const Services = () => {
  const [animationIndex, setAnimationIndex] = useState(1)
  const ref = useRef()
  const isview = useInView(ref, { margin: '-200px' })

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
  return (
    <>
      <div className='flex items-center flex-col md:flex-row w-full h-full pt-10 md:pt-0' ref={ref}>
        <div className='w-full md:w-1/2'>
          <motion.h2 variants={textVariants} animate={`${isview ? 'animate' : 'initial'}`} className='text-4xl font-semibold'>How can i help you?</motion.h2>
          <motion.div variants={listVariants} animate={`${isview ? 'animate' : 'initial'}`} className='flex flex-col gap-2 mt-5'>
            {imageServices.map((item) => (
              <motion.div onClick={() => setAnimationIndex(item.id)} variants={listVariants} key={item.id} className='cursor-pointer flex items-center bg-white/20 gap-2 p-3 rounded-md hover:bg-white/30 duration-75'>
                <div className='rounded-full  p-3' style={{ backgroundColor: item.color }}>
                  <img src={item.image} className='w-10 h-10 ' alt="" />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p className='text-sm text-gray-400'>{item.number} projects</p>
                </div>
              </motion.div>
            ))}

          </motion.div>
          <div className='flex items-center gap-10 mt-3'>
            <Counter from={0} to={150} text={'Projects Completed'} />
            <Counter from={0} to={300} text={'Happy Clients'} />
          </div>

        </div>
        <div className='w-full md:w-1/2 h-full'>
          {animationIndex === 1 ? <PhoneContainer /> : animationIndex === 2 ? <MugContainer /> : <BirdContainer />}
        
        </div>
      </div >
    </>
  )
}

export default Services