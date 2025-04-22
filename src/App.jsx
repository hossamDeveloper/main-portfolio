import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { lazy, Suspense, useEffect, useCallback } from "react"
import Loading from "./Components/Loading/Loading"

// Lazy load components with preload
const Contact = lazy(() => import("./Components/Contact/Contact"))
const Hero = lazy(() => import("./Components/Hero/Hero"))
const Portfolio = lazy(() => import("./Components/Portfolio/Portfolio"))
const Services = lazy(() => import("./Components/Services/Services"))

// Preload components
const preloadComponents = () => {
  const components = [
    import("./Components/Contact/Contact"),
    import("./Components/Hero/Hero"),
    import("./Components/Portfolio/Portfolio"),
    import("./Components/Services/Services")
  ]
  
  return Promise.all(components.map(component => 
    component.catch(() => {
      // Handle error silently
    })
  ))
}

function App() {
  const handleScroll = useCallback((e) => {
    e.preventDefault()
    const target = e.target
    if (target.scrollTop === 0) {
      target.scrollTop = 1
    } else if (target.scrollTop + target.clientHeight === target.scrollHeight) {
      target.scrollTop = target.scrollHeight - target.clientHeight - 1
    }
  }, [])

  useEffect(() => {
    // Start preloading components after initial render
    const preloadTimeout = setTimeout(preloadComponents, 1000)
    
    // Add scroll event listener
    const mainContainer = document.querySelector('.main-container')
    if (mainContainer) {
      mainContainer.addEventListener('scroll', handleScroll, { passive: false })
    }

    return () => {
      clearTimeout(preloadTimeout)
      if (mainContainer) {
        mainContainer.removeEventListener('scroll', handleScroll)
      }
    }
  }, [handleScroll])

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={
            <div 
              className="main-container pb-10 snap-y snap-mandatory h-screen overflow-y-auto scroll-smooth"
              style={{ 
                scrollBehavior: 'smooth',
                WebkitOverflowScrolling: 'touch',
                overscrollBehavior: 'contain'
              }}
            >
              <section id="home" className="h-screen snap-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
                <Hero />
              </section>
              <section id="services" className="h-screen snap-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
                <Services />
              </section>
              <Portfolio />
              <section id="contact" className="h-screen snap-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
                <Contact />
              </section>
            </div>
          } />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
