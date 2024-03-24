import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import App from './App'

function AppC() {
  return (
    <Router>
    <div>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/memories" element={<Home />} />
      <Route path="/mail" element={<App/>} />
    </Routes>
    </div>
    </Router>
  )
}

export default AppC