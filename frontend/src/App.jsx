import React from 'react'

import {Routes, Route} from "react-router-dom"

import Navbar from "./components/Navbar"

import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import ProfilePage from "./pages/ProfilePage"
import HomePage from "./pages/HomePage"
import SettingsPage from "./pages/SettingsPage"

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/signup' element={<SignUpPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/settings' element={<SettingsPage />}></Route>
        <Route path='/profile' element={<ProfilePage />}></Route>
      </Routes>
    </div>
  )
}

export default App