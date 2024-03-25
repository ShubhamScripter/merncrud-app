import React from 'react'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Profile from './pages/Profile'
import About from './pages/About'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
          <Route  path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
           <Route path="/profile" element={<Profile/>} />
          <Route path="/sign-in" element={<Signin/>} />
          <Route path="/sign-up" element={<Signup/>} />
          <Route path="/profile" element={<Profile/>} /> 
    </Routes>
    </BrowserRouter>
  )
}
