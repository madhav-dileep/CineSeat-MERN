import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import MovieCard from '../components/MovieCard'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Movies = () => {

  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <>
      <Header/>
      <div style={{minHeight:'100vh'}} className='container'>

        <div style={{marginTop:'3rem'}} id='nowShowing'>
          <div className='d-flex flex-wrap align-items-center justify-content-between'>
            <h2 style={{fontSize:'3em',fontFamily: "Bebas Neue, serif"}} className='mb-5 text-light'>Now Showing</h2>
          </div>
          
          <Row>
            <Col className='mb-3 my-3' sm={12} md={12} lg={12}>
              <MovieCard/>
            </Col>
            <Col className='mb-3 my-3' sm={12} md={12} lg={12}>
              <MovieCard/>
            </Col>
            <Col className='mb-3 my-3' sm={12} md={12} lg={12}>
              <MovieCard/>
            </Col>
          </Row>
        </div>
        <hr />
        <div style={{marginTop:'3rem'}} id='UpComing'>
          <div className='d-flex flex-wrap align-items-center justify-content-between'>
            <h2 style={{fontSize:'3em',fontFamily: "Bebas Neue, serif"}} className='mb-5 text-light'>Upcoming Releases</h2>
            {/* <input type="text" className='form-control w-25' /> */}
          </div>
          <Row>
            <Col className='mb-3 my-3' sm={12} md={12} lg={12}>
              <MovieCard/>
            </Col>
            <Col className='mb-3 my-3' sm={12} md={12} lg={12}>
              <MovieCard/>
            </Col>
            <Col className='mb-3 my-3' sm={12} md={12} lg={12}>
              <MovieCard/>
            </Col>
            <Col className='mb-3 my-3' sm={12} md={12} lg={12}>
              <MovieCard/>
            </Col>
          </Row>
        </div>

      </div>
    </>
  )
}

export default Movies