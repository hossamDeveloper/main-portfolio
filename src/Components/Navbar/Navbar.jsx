import React, { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2f204e]/80 backdrop-blur-sm">
      <motion.div
        className="h-1 bg-[#f4c1ce] origin-left"
        style={{ scaleX }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-white text-xl font-bold">
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-[#f4c1ce] transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-[#f4c1ce] transition-colors">
              About
            </Link>
            <Link to="/services" className="text-white hover:text-[#f4c1ce] transition-colors">
              Services
            </Link>
            <Link to="/portfolio" className="text-white hover:text-[#f4c1ce] transition-colors">
              Portfolio
            </Link>
            <Link to="/contact" className="bg-[#f4c1ce] text-[#2f204e] px-4 py-2 rounded-lg hover:bg-[#f4c1ce]/90 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#f4c1ce] transition-colors"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block text-white hover:text-[#f4c1ce] transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-white hover:text-[#f4c1ce] transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className="block text-white hover:text-[#f4c1ce] transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/portfolio"
                className="block text-white hover:text-[#f4c1ce] transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                className="block text-white hover:text-[#f4c1ce] transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 