import React, { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { GrStatusGood } from "react-icons/gr";
import { AiOutlineLoading } from "react-icons/ai";
import { motion, useInView, AnimatePresence } from 'motion/react';
import SVGContact from './SVGContact';

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className={`fixed bottom-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 ${
        type === 'success' 
          ? 'bg-green-500 text-white' 
          : 'bg-red-500 text-white'
      }`}
    >
      {type === 'success' ? (
        <GrStatusGood className="w-5 h-5" />
      ) : (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      )}
      <span className="text-sm font-medium">{message}</span>
    </motion.div>
  );
};

const Contact = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [error, setError] = useState(null)
  const [loading, setloading] = useState(false)
  const [success, setsuccess] = useState(false)
  const [toast, setToast] = useState({ show: false, message: '', type: '' })
  const ref = useRef()
  
  const variantForm = {
    initial: {
      x: '-100px',
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  }

  const isview = useInView(ref, { margin: '-200px' })

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
  };

  const hideToast = () => {
    setToast({ show: false, message: '', type: '' });
  };

  const sendMassage = (e) => {
    e.preventDefault()
    if (!userData.name.match(/^[A-Za-z]{3,15}$/) || !userData.email.match(/^[a-zA-Z0-9._%+-]+@gmail\.com$/) || !userData.message) {
      setError('Please fill all the fields correctly')
      showToast('Please fill all the fields correctly', 'error')
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
        showToast('Message sent successfully!', 'success')
        setUserData({
          name: '',
          email: '',
          message: ''
        })
      }).catch((err) => {
        setsuccess(false)
        showToast('Failed to send message. Please try again.', 'error')
      }).finally(() => {
        setloading(false)
      })
    }
  }

  return (
    <section id="contact" className="min-h-screen w-full bg-[#2f204e] flex items-center">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Form Section */}
          <motion.div 
            variants={variantForm} 
            animate={isview ? 'animate' : 'initial'} 
            className="w-full lg:w-1/2 text-center lg:text-left"
            ref={ref}
          >
            {!success ? (
              <>
                <h2 className="text-3xl sm:text-4xl font-medium text-white mb-6 sm:mb-8">
                  Let's get in touch
                </h2>
                <motion.form 
                  variants={variantForm} 
                  animate={isview ? 'animate' : 'initial'} 
                  className="w-full max-w-lg mx-auto lg:mx-0" 
                  ref={ref}
                >
                  <motion.div variants={variantForm} className="mb-4 sm:mb-6">
                    <label htmlFor="name" className="block text-white text-sm sm:text-base mb-2">
                      Name:
                    </label>
                    <input 
                      onChange={(e) => setUserData({ ...userData, name: e.target.value })} 
                      value={userData.name} 
                      type="text" 
                      id="name" 
                      name="name" 
                      className="w-full bg-white/10 border border-gray-300/30 p-3 sm:p-4 rounded-lg outline-none text-white placeholder-gray-400 focus:border-[#f4c1ce] focus:ring-2 focus:ring-[#f4c1ce]/20 transition-all duration-300" 
                      placeholder="Enter your name"
                    />
                  </motion.div>
                  <motion.div variants={variantForm} className="mb-4 sm:mb-6">
                    <label htmlFor="Email" className="block text-white text-sm sm:text-base mb-2">
                      Email:
                    </label>
                    <input 
                      onChange={(e) => setUserData({ ...userData, email: e.target.value })} 
                      value={userData.email} 
                      type="email" 
                      id="Email" 
                      name="Email" 
                      className="w-full bg-white/10 border border-gray-300/30 p-3 sm:p-4 rounded-lg outline-none text-white placeholder-gray-400 focus:border-[#f4c1ce] focus:ring-2 focus:ring-[#f4c1ce]/20 transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </motion.div>
                  <motion.div variants={variantForm} className="mb-4 sm:mb-6">
                    <label htmlFor="message" className="block text-white text-sm sm:text-base mb-2">
                      Message:
                    </label>
                    <textarea 
                      onChange={(e) => setUserData({ ...userData, message: e.target.value })} 
                      value={userData.message} 
                      id="message" 
                      name="message" 
                      rows="5" 
                      className="w-full bg-white/10 border border-gray-300/30 p-3 sm:p-4 rounded-lg outline-none text-white placeholder-gray-400 focus:border-[#f4c1ce] focus:ring-2 focus:ring-[#f4c1ce]/20 transition-all duration-300 resize-none"
                      placeholder="Enter your message"
                    ></textarea>
                  </motion.div>
                  {error && (
                    <p className="text-red-400 text-sm sm:text-base mb-4">{error}</p>
                  )}
                  <motion.button 
                    variants={variantForm} 
                    type="submit" 
                    onClick={(e) => sendMassage(e)} 
                    className="w-full flex items-center justify-center bg-[#f4c1ce] text-[#2f204e] p-3 sm:p-4 rounded-lg font-medium hover:bg-[#f4c1ce]/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#f4c1ce] focus:ring-offset-2 focus:ring-offset-[#2f204e]"
                  >
                    {loading ? (
                      <AiOutlineLoading className="w-5 h-5 sm:w-6 sm:h-6 animate-spin" />
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </motion.form>
              </>
            ) : (
              <div className="text-center">
                <GrStatusGood className="w-16 h-16 sm:w-20 sm:h-20 text-green-500 mx-auto" />
                <h2 className="text-2xl sm:text-3xl text-white mt-4 sm:mt-6 font-medium">
                  Thanks for your message
                </h2>
                <p className="text-gray-300 mt-2 sm:mt-4">
                  I will get back to you soon
                </p>
              </div>
            )}
          </motion.div>

          {/* SVG Section */}
          <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[500px]">
            <SVGContact />
          </div>
        </div>
      </div>

      {/* Toast Notifications */}
      <AnimatePresence>
        {toast.show && (
          <Toast 
            message={toast.message} 
            type={toast.type} 
            onClose={hideToast}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Contact