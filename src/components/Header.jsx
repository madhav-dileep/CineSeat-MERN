import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div style={{backgroundColor:"rgba(0,0,0,0.6)"}} className='headerHome d-sm-none d-lg-block w-100'>
        <div className=' d-flex align-items-center justify-content-between px-5 py-3'>
        <Link to={'/'} style={{ fontSize: '3em', color: 'white', fontFamily: "Oswald, serif", textShadow: '0 2px 2px black',textDecoration:'none' }}><i class="fa-solid fa-film me-2"></i><span style={{color:'red'}} className=''>Cine</span>Seat</Link>
          {/* <ul style={{listStyle:'none',color:'gold'}} className=" mx-3">
            <a style={{color:'gold',textShadow:'0 2px 2px'}} className='text-decoration-none' href=''><li style={{display:'inline',fontFamily:"Bebas Neue, serif",fontSize:'1.5rem'}} className='mx-4'>Home</li></a>
            <a style={{color:'gold',textShadow:'0 2px 2px'}} className='text-decoration-none' href='#movies'><li style={{display:'inline',fontFamily:"Bebas Neue, serif",fontSize:'1.5rem'}} className='mx-4'>Movies</li></a>
            <a style={{color:'gold',textShadow:'0 2px 2px'}} className='text-decoration-none' href='#about'><li style={{display:'inline',fontFamily:"Bebas Neue, serif",fontSize:'1.5rem'}} className='mx-4'>About</li></a>
          </ul> */}
        </div>
      </div>
  )
}

export default Header