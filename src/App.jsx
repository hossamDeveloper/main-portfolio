import Contact from "./Components/Contact/Contact"
import Hero from "./Components/Hero/Hero"
import Portfolio from "./Components/Portfolio/Portfolio"
import Services from "./Components/Services/Services"

function App() {

  return (
    <>
      <div className="pb-10">
        <section id="#home" className="h-screen snap-center xl:px-32 lg:px-24 md:px-16 sm:px-10 px-5 ">
          <Hero />
        </section>
        <section id="#services" className="h-screen snap-center xl:px-32 lg:px-24 md:px-16 sm:px-10 px-5">
          <Services />
        </section>
        <Portfolio />
        <section id="#contact" className="h-screen snap-center xl:px-32 lg:px-24 md:px-16 sm:px-10 px-5">
          <Contact />
        </section>
      </div>


    </>
  )
}

export default App
