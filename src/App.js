import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import { Home } from './pages/Home.jsx'
import { HowWorks } from './pages/HowWorks.jsx'
import { Pricing } from './pages/Pricing.jsx'

import './style/global.css'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/how-works" element={<HowWorks/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App;
