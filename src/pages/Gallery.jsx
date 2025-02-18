import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {

    useEffect(()=>{
          AOS.init()
        },[])

  return (
    <>
        <Header/>
        <div style={{minHeight:'100vh'}} className='container'>
        <div className='d-flex flex-wrap align-items-center justify-content-between mt-4'>
            <h2 style={{fontSize:'4em',fontFamily: "Bebas Neue, serif"}} className=' text-light'>GALLERY</h2>
          </div>
          <hr />
          <Row>
            <Col sm={12} md={6} lg={4}>
                <img data-aos="zoom-out-up" style={{height:'300px',width:'100%',boxShadow:'0 4px 18px black'}} className='img-fluid my-3 galleryImg' src="https://www.teahub.io/photos/full/256-2569980_movie-theater-inside.jpg" alt="" />
            </Col>
            <Col sm={12} md={6} lg={4}>
                <img data-aos="zoom-out-up" style={{height:'300px',width:'100%',boxShadow:'0 4px 18px black'}} className='img-fluid my-3 galleryImg' src="https://wallpapers.com/images/hd/movie-theater-pictures-2800-x-1680-8qh5yy2fnzezed8k.jpg" alt="" />
            </Col>
            <Col sm={12} md={6} lg={4}>
                <img data-aos="zoom-out-up" style={{height:'300px',width:'100%',boxShadow:'0 4px 18px black'}} className='img-fluid my-3 galleryImg' src="https://th.bing.com/th/id/OIP.98-6Eesv96bZ2h_kgNyWfAAAAA?rs=1&pid=ImgDetMain" alt="" />
            </Col>
            <Col sm={12} md={6} lg={4}>
                <img data-aos="zoom-out-up" style={{height:'300px',width:'100%',boxShadow:'0 4px 18px black'}} className='img-fluid my-3 galleryImg' src="https://red.msudenver.edu/wp-content/uploads/2022/07/Piturro-Vincent_SciFiFilm_07062022_AM-21.jpg" alt="" />
            </Col>
            <Col sm={12} md={6} lg={4}>
                <img data-aos="zoom-out-up" style={{height:'300px',width:'100%',boxShadow:'0 4px 18px black'}} className='img-fluid my-3 galleryImg' src="https://fastly.4sqi.net/img/general/600x600/18426010_9F4IzRM6ce46yJDB2WsqUn79yz5EWj9_56PLquVuV-I.jpg " alt="" />
            </Col>
            <Col sm={12} md={6} lg={4}>
                <img data-aos="zoom-out-up" style={{height:'300px',width:'100%',boxShadow:'0 4px 18px black'}} className='img-fluid my-3 galleryImg' src="https://th.bing.com/th/id/R.9236f714e70d6500c4c89d00d4e4c46e?rik=A5itF2b%2fEwYWoA&riu=http%3a%2f%2frealtynxt.com%2fwp-content%2fuploads%2f2017%2f04%2f43.jpg&ehk=kVZfO96vtu%2f2YRSwWQV9JLgoQRQXTcuY5XGFqsDt7kc%3d&risl=&pid=ImgRaw&r=0" alt="" />
            </Col>
            <Col sm={12} md={6} lg={4}>
                <img data-aos="zoom-out-up" style={{height:'300px',width:'100%',boxShadow:'0 4px 18px black'}} className='img-fluid my-3 galleryImg' src="https://content.api.news/v3/images/bin/c8437fe933d57c30ee41849f385c9831" alt="" />
            </Col>
            <Col sm={12} md={6} lg={4}>
                <img data-aos="zoom-out-up" style={{height:'300px',width:'100%',boxShadow:'0 4px 18px black'}} className='img-fluid my-3 galleryImg' src="https://2.bp.blogspot.com/-Q7mNlqn5k_M/XJxZCRz0H2I/AAAAAAAAAIo/3CGQQxhE1cY7xB5f-Yz9PpVRh-iTRlmfQCEwYBhgL/s1600/Popcorn.png" alt="" />
            </Col>
          </Row>

        </div>
    </>
  )
}

export default Gallery