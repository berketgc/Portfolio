
import './App.css'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
//[#f8e112]

function App() {
 
  return (
    <>
    <div className='bg-[#8D5F8C] min-h-screen overflow-hidden'
    
    >
      <Navbar/>
      <AboutMe/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      </div>
    </>
  )
}

export default App
