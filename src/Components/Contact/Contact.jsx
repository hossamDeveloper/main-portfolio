import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { GrStatusGood } from "react-icons/gr";
import { AiOutlineLoading } from "react-icons/ai";
import { motion, useInView } from 'motion/react';
import SVGContact from './SVGContact';


const Contact = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [error, setError] = useState(null)
  const [loading, setloading] = useState(false)
  const [success, setsuccess] = useState(false)
  const ref = useRef()
  
  const variantForm = {
    initial: {
      x: '-100px',
      opacity: 0
    }
    , animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  }

  const isview = useInView(ref, { margin: '-200px' })

  const sendMassage = (e) => {
    e.preventDefault()
    if (!userData.name.match(/^[A-Za-z]{3,15}$/) || !userData.email.match(/^[a-zA-Z0-9._%+-]+@gmail\.com$/) || !userData.message) {
      setError('Please fill all the fields correctly')
      return
    } else {
      setError(null)
      setloading(true)
    }
    if (userData.name && userData.email && userData.message) {
      emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, {
        from_name: userData.name,
        to_name: 'Hossam',
        message: userData.message,
        user_email: userData.email
      }, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      }).then((res) => {
        setsuccess(true)
      }).catch((err) => {
        setsuccess(false)
      }).finally(() => {
        setUserData({
          name: '',
          email: '',
          message: ''
        })
        setloading(false)
      })
    }

  }

  return (
    <>
      <div className='flex flex-col-reverse lg:flex-row items-center justify-between w-full h-full'>
        <div className={`w-full lg:w-1/2 mt-3 lg:mt-0 ${success ? 'flex flex-col justify-center items-center' : ''}`}>
          {!success ? (<>
            <h2 className='text-4xl font-medium'>let's get in touch</h2>
            <motion.form variants={variantForm} animate={isview ? 'animate' : 'initial'} className='my-5' ref={ref}>
              <motion.div variants={variantForm} className='mb-4'>
                <label htmlFor="name">Name:</label>
                <input onChange={(e) => setUserData({ ...userData, name: e.target.value })} value={userData.name} type="text" id="name" name="name" className='w-full bg-white/10 border border-gray-300 p-2 mt-1 rounded-md outline-none' />
              </motion.div>
              <motion.div variants={variantForm} className='mb-4'>
                <label htmlFor="Email">Email:</label>
                <input onChange={(e) => setUserData({ ...userData, email: e.target.value })} value={userData.email} type="email" id="Email" name="Email" className='w-full bg-white/10 border border-gray-300 p-2 mt-1 rounded-md outline-none' />
              </motion.div>
              <motion.div variants={variantForm} className='mb-4'>
                <label htmlFor="message">Message:</label>
                <textarea onChange={(e) => setUserData({ ...userData, message: e.target.value })} value={userData.message} id="message" name="message" cols="30" rows="5" className='w-full bg-white/10 border border-gray-300 p-2 mt-1 rounded-md outline-none'></textarea>
              </motion.div>
              {error && <p className='text-red-500'>{error}</p>}
              <motion.button variants={variantForm} type='submit' onClick={(e) => sendMassage(e)} className='w-full flex items-center justify-center bg-white/10 border border-gray-300 p-2 mt-1 rounded-md hover:bg-[#da4d62] duration-300'>
                {loading ? <AiOutlineLoading className='animate-spin' /> : 'Send'}
              </motion.button>
            </motion.form>
          </>
          ) : (
            <>
              <GrStatusGood className='text-8xl text-green-500' />
              <h2 className='text-4xl text-center mt-2 font-medium'>Thanks for your message i will get back to you soon</h2>
            </>
          )}

        </div>
        <div className='w-full lg:w-[40%]'>
          <SVGContact />
        </div>

      </div>
    </>
  )
}

export default Contact