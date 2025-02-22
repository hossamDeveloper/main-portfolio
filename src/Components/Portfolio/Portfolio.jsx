import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'motion/react'
import { dataWebsite } from '../../../public/assets/images'



const Portfolio = () => {
  const ref = useRef(null)
  const ref2 = useRef()
  const { scrollYProgress } = useScroll({ target: ref })
  const xRange = useTransform(scrollYProgress, [0, 1], [0, -window.innerWidth * dataWebsite.length])

  const isview = useInView(ref2, { margin: '-100px' })
  const imgVariants = {
    initial: {
      x: '-500px',
      y: '500px',
      opacity: 0
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: .2,
        ease: 'easeInOut'
      }
    }
  }
  const textVariants = {
    initial: {
      x: '500px',
      y: '500px',
      opacity: 0
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: .2,
        ease: 'easeInOut',
        staggerChildren: 0.1
      }
    }
  }


  return (
    <>
      <section id="#portfolio" className="h-[500vh] relative  snap-center " ref={ref}>

        <motion.div ref={ref2} className='flex h-screen w-max sticky top-0 ' style={{ x: xRange }}>
          {dataWebsite.map((item) => (
            <div key={item.id} style={{ background: item.colorGradiant }} className='flex flex-col lg:flex-row items-center justify-center lg:justify-evenly h-screen w-screen '>
              <motion.div variants={imgVariants} animate={isview ? 'animate' : 'initial'} className=' w-5/6 lg:w-1/2 overflow-hidden rounded-md'>
                <img src={item.image} className='w-full h-full object-contain rounded-md hover:scale-105 duration-300' alt="website" />
              </motion.div>
              <motion.div variants={textVariants} animate={isview ? 'animate' : 'initial'} className='w-5/6 lg:w-[40%] mt-5 lg:mt-0'>
                <motion.h3 variants={textVariants} className='text-4xl font-medium'>{item.title}</motion.h3>
                <motion.p variants={textVariants} className='text-sm text-gray-400 w-5/6 my-4'>{item.description}</motion.p>
                <motion.a variants={textVariants} href={item.link} target='_blank'><button className='text-sm py-2 px-4 rounded-md bg-[#da4d62] hover:bg-[#da4d62]/80 duration-300'>veiw website</button>
                </motion.a>
              </motion.div>
            </div>
          ))}
        </motion.div>



      </section>
    </>
  )
}

export default Portfolio