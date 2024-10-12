
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/home/Home'
import Footer from './components/footer/Footer'
import Characters from './Pages/characters/Characters'

import About from './Pages/about/About'
import Contact from './Pages/contact/Contact'
import Navbar from './components/navbar/Navbar'

function App() {


  return (
    <>

<Navbar/>

<Routes>
  <Route path="/" element={<Home />} />
  <Route path='/about us' element={<About/>}/>
  <Route path='/characters' element={<Characters/>}/>
  <Route path='/contact' element={<Contact/>}/>
  </Routes>

<Footer/>
    </>
  )
}

export default App
