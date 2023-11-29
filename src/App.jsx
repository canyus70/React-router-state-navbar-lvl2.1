import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import Galerie from './assets/pages/Galerie'
import Kontakt from './assets/pages/Kontakt'
import Speisekarte from './assets/pages/Speisekarte'
import Öffnungszeiten from "./assets/pages/Öffnungszeiten"

function App() {

  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Speisekarte/>}/>
      <Route path="/kontakt" element={<Kontakt/>}/>
      <Route path="/öffnungszeiten" element={<Öffnungszeiten/>}/>
      <Route path="/galerie" element={<Galerie/>}/>
    </Routes>
    </BrowserRouter>
      
    
  )
}

export default App
