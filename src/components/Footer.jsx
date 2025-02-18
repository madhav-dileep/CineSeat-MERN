import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div style={{height:'auto'}} className='card d-flex flex-column align-items-center justify-content-center mt-5 shadow'>
      <div  className='d-flex flex-wrap justify-content-evenly mt-3 w-100 p-5'>
        
        {/* Intro */}
        <div style={{width:'400px'}} className='intro'> 
          <h4><i class="fa-solid fa-film me-2"></i>CineSeat</h4>
          <p>Designed and built with all the love in the world by the Luminar team.</p>
          <p>Code licensed, docs CC BY 3.0.</p>
          <p>Currently v1.2.3.</p>
        </div>

        {/* Links */}
        <div className='d-flex flex-column'>
          <h5>Links</h5>
          <Link to={"/"} target='_top' style={{textDecoration:"none",color:"white",opacity:0.5}}>Home Page</Link>
          <Link to={"/movies"} target='_top' style={{textDecoration:"none",color:"white",opacity:0.5}}>Movies Page</Link>
          <Link to={"/:id/bookings"} target='_top' style={{textDecoration:"none",color:"white",opacity:0.5}}>Bookings Page</Link>
          <Link to={"/:id/view"} target='_top' style={{textDecoration:"none",color:"white",opacity:0.5}}>View Page</Link>
          <Link to={"/gallery"} target='_top' style={{textDecoration:"none",color:"white",opacity:0.5}}>Gallery Page</Link>
          <Link to={"/profile"} target='_top' style={{textDecoration:"none",color:"white",opacity:0.5}}>Profile Page</Link>
        </div>

        {/* Guides */}
        <div className='d-flex flex-column'>
          <h5>Guides</h5>
          <a href="https://react.dev/" target='_blank' style={{textDecoration:"none",color:"white",opacity:0.5}}>React</a>
          <a href="https://react-bootstrap.github.io/" target='_blank' style={{textDecoration:"none",color:"white",opacity:0.5}}>React Bootstrap</a>
          <a href="https://www.npmjs.com/package/react-router-dom/v/6.22.0" target='_blank' style={{textDecoration:"none",color:"white",opacity:0.5}}>React Router Dom</a>
          <a href="https://nodejs.org" target='_blank' style={{textDecoration:"none",color:"white",opacity:0.5}}>NodeJS</a>
          <a href="https://www.mongodb.com/docs/atlas/getting-started/" target='_blank' style={{textDecoration:"none",color:"white",opacity:0.5}}>MongoDB</a>

        </div>

        {/* Contact */}
        <div className='d-flex flex-column'>
          <h5>Contact Us</h5>
          <div className="d-flex ">
            <input type="email" className='form-control me-2' placeholder='Enter Email..' />
            <button className='btn btn-primary'><i class="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className="d-flex gap-3 mt-3">
            <a href="https://facebook.com" style={{color:"white"}} target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="https://youtube.com" style={{color:"white"}} target="_blank"><i class="fa-brands fa-youtube"></i></a>
            <a href="https://instagram.com" style={{color:"white"}} target="_blank"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://linkedin.com" style={{color:"white"}} target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://x.com" style={{color:"white"}} target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="https://github.com" style={{color:"white"}} target="_blank"><i class="fa-brands fa-github"></i></a>
            <a href="" style={{color:"white"}}><i class="fa-solid fa-phone"></i></a>
          </div>
        </div>

      
    </div >
    {/* Copyright */}
    <p className='mt-3 '>Copyright © 2025 CineSeat, Built with React Bootstrap by Madhav.</p>
    </div>
  )
}

export default Footer