import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/campus'
import Testimonials from './Components/Testimonials/Testimoinals'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>     
      <div className="container">
         <Title title='OUR PROGRAMS' subtitle='Gain Knowledge In'/>
      <Programs/></div>   
      <About/>  
      <Title title='GALLERY' subtitle='Explore our Campus'/>  
      <Campus/>
      <Title title='TESTIMONIALS' subtitle="What Student's Say"/>  
      <Testimonials/>
      <Title title='CONTACT US' subtitle="Get In Touch"/>  
      <Contact/>
      <Footer/> 
    </div>
  )
}

export default App
