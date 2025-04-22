import React, { useState, useEffect, useCallback, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

// Memoized portfolio items to prevent unnecessary re-renders
const portfolioItems = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with payment integration",
    image: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
    github: "https://github.com/yourusername/ecommerce",
    live: "https://ecommerce-demo.com",
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
    github: "https://github.com/yourusername/taskmanager",
    live: "https://taskmanager-demo.com",
    tags: ["React", "Firebase", "Redux"]
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather information with interactive maps",
    image: "https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
    github: "https://github.com/yourusername/weather",
    live: "https://weather-demo.com",
    tags: ["React", "API", "Chart.js"]
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A responsive portfolio website with modern design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
    github: "https://github.com/yourusername/portfolio",
    live: "https://portfolio-demo.com",
    tags: ["React", "Tailwind", "Framer Motion"]
  }
]

// Memoized filter button component
const FilterButton = memo(({ filter, selectedFilter, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full transition-all duration-300 ${
      selectedFilter === filter
        ? "bg-[#f4c1ce] text-[#2f204e]"
        : "bg-white/10 text-white hover:bg-white/20"
    }`}
  >
    {filter}
  </button>
))

// Memoized portfolio card component
const PortfolioCard = memo(({ item, loadedImages, handleImageLoad, handleImageError }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm"
  >
    <div className="relative w-full" style={{ paddingBottom: '75%' }}>
      {!loadedImages[item.id] && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/5">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#f4c1ce]"></div>
        </div>
      )}
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        onLoad={() => handleImageLoad(item.id)}
        onError={() => handleImageError(item.id)}
        loading="lazy"
        decoding="async"
      />
    </div>
    
    <div className="absolute inset-0 bg-gradient-to-t from-[#2f204e] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
      <p className="text-gray-300 text-sm mb-4">{item.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-white/10 text-white text-xs rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={item.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white hover:text-[#f4c1ce] transition-colors"
        >
          <FiGithub className="w-5 h-5" />
          <span>Code</span>
        </a>
        <a
          href={item.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white hover:text-[#f4c1ce] transition-colors"
        >
          <FiExternalLink className="w-5 h-5" />
          <span>Live Demo</span>
        </a>
      </div>
    </div>
  </motion.div>
))

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [filteredItems, setFilteredItems] = useState(portfolioItems)
  const [loadedImages, setLoadedImages] = useState({})

  const filters = ["all", "React", "Node.js", "Firebase", "API"]

  // Memoized filter change handler
  const handleFilterChange = useCallback((filter) => {
    setSelectedFilter(filter)
  }, [])

  // Memoized image load handlers
  const handleImageLoad = useCallback((id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }))
  }, [])

  const handleImageError = useCallback((id) => {
    setLoadedImages(prev => ({ ...prev, [id]: false }))
  }, [])

  // Optimized filter effect
  useEffect(() => {
    if (selectedFilter === "all") {
      setFilteredItems(portfolioItems)
    } else {
      setFilteredItems(
        portfolioItems.filter(item => item.tags.includes(selectedFilter))
      )
    }
  }, [selectedFilter])

  return (
    <section 
      id="portfolio" 
      className="w-full bg-[#2f204e] py-20 px-4 sm:px-8 snap-start"
      style={{ minHeight: '100vh' }}
    >
      <div className="max-w-7xl mx-auto h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">My Portfolio</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project is unique and comes with its own set of challenges and solutions.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <FilterButton
              key={filter}
              filter={filter}
              selectedFilter={selectedFilter}
              onClick={() => handleFilterChange(filter)}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredItems.map((item) => (
              <PortfolioCard
                key={item.id}
                item={item}
                loadedImages={loadedImages}
                handleImageLoad={handleImageLoad}
                handleImageError={handleImageError}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default memo(Portfolio)