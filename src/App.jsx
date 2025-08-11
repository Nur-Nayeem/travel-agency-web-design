import React from 'react'
import Navbar from './components/Navbar'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <HashRouter>

        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/' element={<Navbar />} />
          <Route path='/' element={<Navbar />} />
          <Route path='/' element={<Navbar />} /> */}
        </Routes>

      </HashRouter>
    </>
  )
}

export default App