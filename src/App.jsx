import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import View from './pages/View'
import Bookings from './pages/Bookings'
import Movies from './pages/Movies'
import Auth from './pages/Auth'
import Pnf from './pages/Pnf'
import Footer from './components/Footer'
import Profile from './pages/Profile'
import Gallery from './pages/Gallery'

function App() {
  const [loginStatus, setLoginStatus] = useState(false)

  return (
    <>
      <Routes>
          <Route path='/' element={<Home loginStatus={loginStatus}/>}/>
          <Route path='/:id/view' element={<View/>}/>
          {/* <Route path='/:id/bookings' element={<Bookings/>}/> */}
          <Route path='/profile' element={<Profile/>}/>       
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/login' element={<Auth setLoginStatus={setLoginStatus}/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/register' element={<Auth insideRegister={true}/>}/>
          <Route path='/*' element={<Pnf/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
