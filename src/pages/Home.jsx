import React, { useEffect, useState } from 'react'
import { Carousel, Col, Row } from 'react-bootstrap'
import MovieCard from '../components/MovieCard'
import { Link } from 'react-router-dom'
import titleBlob from '../assets/blob.png'
import ProfileCard from '../components/ProfileCard'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = ({ loginStatus }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(()=>{
    AOS.init()
  },[])

  useEffect(() => {
    setIsLoggedIn(loginStatus)
  }, [loginStatus])

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Header */}
      <div style={{ position: 'fixed', zIndex: 2, backgroundColor: "rgba(0, 0, 0,0.08)" }} className='headerHome d-sm-none d-md-block w-100'>
        <div className=' d-flex align-items-center justify-content-between px-5 py-3'>
          <div style={{ position: 'relative' }}>
            {/* <img width={300} height={150} style={{ position: 'absolute', zIndex: -1, top: -30, left: -30}} src={titleBlob} alt="" /> */}
            <h4 style={{ fontSize: '3em', color: 'white', fontFamily: "Oswald, serif", textShadow: '0 2px 2px black' }}><i className="fa-solid fa-film me-2" style={{ color: 'rgb(255, 255, 255)' }}></i><span style={{color:'red'}} className=''>Cine</span>Seat</h4>
          </div>

          <ul style={{ listStyle: 'none', color: 'white' }} className=" mx-3 ">
            <a style={{ color: 'white', textShadow: '0 2px 2px black' }} className='text-decoration-none listHome' href=''><li style={{ display: 'inline', fontFamily: "Bebas Neue, serif", fontSize: '1.5rem' }} className='mx-4'>Home</li></a>
            <a style={{ color: 'white', textShadow: '0 2px 2px black' }} className='text-decoration-none listHome' href='#movies'><li style={{ display: 'inline', fontFamily: "Bebas Neue, serif", fontSize: '1.5rem' }} className='mx-4'>Movies</li></a>
            <a style={{ color: 'white', textShadow: '0 2px 2px black' }} className='text-decoration-none listHome' href='#gallery'><li style={{ display: 'inline', fontFamily: "Bebas Neue, serif", fontSize: '1.5rem' }} className='mx-4'>Gallery</li></a>
            <a style={{ color: 'white', textShadow: '0 2px 2px black' }} className='text-decoration-none listHome' href='#about'><li style={{ display: 'inline', fontFamily: "Bebas Neue, serif", fontSize: '1.5rem' }} className='mx-4'>About</li></a>
          </ul>
          {
            isLoggedIn ?
              <ProfileCard />
              :
              <Link to={'/login'} target='_top' style={{ color: 'white', textShadow: '0 2px 2px black' }} className='btn btn-success text-decoration-none' href='#about'><li style={{ display: 'inline', fontFamily: "Bebas Neue, serif", fontSize: '1.5rem' }} className='mx-4 '>Login</li></Link>
          }
        </div>
      </div>
      <div style={{ position: 'fixed', zIndex: 2, backgroundColor: "rgba(255,255,255,0.0)", backdropFilter: 'blur(1px)' }} className='headerHome d-block d-md-none w-100 p-2'>
        {
          isLoggedIn ?
            <ProfileCard />
            :
            <Link to={'/login'} target='_top' style={{ color: 'white', textShadow: '0 2px 2px black' }} className='btn btn-success text-decoration-none' href='#about'><li style={{ display: 'inline', fontFamily: "Bebas Neue, serif", fontSize: '1.5rem' }} className='mx-4'>Login</li></Link>
        }
      </div>
      {/* Carousel */}
      <Carousel style={{ opacity: '0.65' }}>
        <Carousel.Item interval={3000}>
          {/* <ExampleCarouselImage text="First slide" /> */}
          <img style={{ maxHeight: '50rem', width: '100%' }} className='img-fluid' src="https://anniehaydesign.weebly.com/uploads/9/5/4/6/95469676/landscape-poster-3_orig.jpg" alt="" />
          <Carousel.Caption style={{ backdropFilter: 'blur(5px)', fontFamily: "Poppins, serif", fontSize: '1.5em' }}>
            <Link to={'/:id/view'} target='_top' className='text-light text-decoration-none'><h3 style={{ textShadow: '0 2px 2px black', fontSize: '1.4em' }}>First slide label</h3></Link>
            <p style={{ textShadow: '0 2px 2px black', fontSize: '0.7em' }}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          {/* <ExampleCarouselImage text="Second slide" /> */}
          <img style={{ maxHeight: '50rem', width: '100%' }} className='img-fluid' src="https://posterspy.com/wp-content/uploads/2020/04/DuneFINAL.jpg" alt="" />
          <Carousel.Caption style={{ backdropFilter: 'blur(5px)', fontFamily: "Poppins, serif", fontSize: '1.5em' }}>
            <Link to={'/:id/view'} target='_top' className='text-light text-decoration-none'><h3 style={{ fontSize: '1.4em' }}>Second slide label</h3></Link>
            <p style={{ fontSize: '0.7em' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          {/* <ExampleCarouselImage text="Third slide" /> */}
          <img style={{ maxHeight: '50rem', width: '100%' }} className='img-fluid' src="https://cdnb.artstation.com/p/assets/images/images/026/475/643/large/spencer-owen-i-am-lisa-landscape.jpg?1588873984" alt="" />
          <Carousel.Caption style={{ backdropFilter: 'blur(5px)', fontFamily: "Poppins, serif", fontSize: '1.5em' }}>
            <Link to={'/:id/view'} target='_top' className='text-light text-decoration-none'><h3 style={{ fontSize: '1.4em' }}>Third slide label</h3></Link>
            <p style={{ fontSize: '0.7em' }}>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* Latests/Movies */}
      <div id='movies' style={{ marginTop: '5em', marginBottom: '5em' }} className=' text-center'>
        <h2 data-aos="flip-left" style={{ fontSize: '4em', fontWeight: '700', fontFamily: "Oswald, serif", color: 'gold' }} className=''>NOW PLAYING</h2>
        <div style={{ overflowX: 'auto' }} className='nowplaying d-flex justify-content-evenly p-2 m-5'>
          <MovieCard insideHome={true} />
          <MovieCard insideHome={true} />
          <MovieCard insideHome={true} />
          <MovieCard insideHome={true} />
          <MovieCard insideHome={true} />
        </div>
        {/* <Link to={'/movies'}>View All</Link> */}
      </div>
      <hr className='mx-5' />
      {/* GALLERY */}
      <div id='gallery' style={{ marginTop: '6em', marginBottom: '5em' }} className='text-center px-5'>
        <Link to={'/gallery'} target='_top' className='text-decoration-none'><h2 data-aos="flip-left" style={{ fontSize: '4em', fontWeight: '700', fontFamily: "Oswald, serif", color: 'rgb(153, 51, 255)' }} className='mb-5'>GALLERY</h2></Link>
        <Row>
          <Col sm={12} md={6} lg={4}>
            <img data-aos="flip-up" style={{ height: '300px', width: '100%', boxShadow: '0 4px 18px black' }} className='img-fluid my-3 galleryImg' src="https://www.teahub.io/photos/full/256-2569980_movie-theater-inside.jpg" alt="" />
          </Col>
          <Col sm={12} md={6} lg={4}>
            <img data-aos="flip-up" style={{ height: '300px', width: '100%', boxShadow: '0 4px 18px black' }} className='img-fluid my-3 galleryImg' src="https://wallpapers.com/images/hd/movie-theater-pictures-2800-x-1680-8qh5yy2fnzezed8k.jpg" alt="" />
          </Col>
          <Col sm={12} md={6} lg={4}>
            <img data-aos="flip-up" style={{ height: '300px', width: '100%', boxShadow: '0 4px 18px black' }} className='img-fluid my-3 galleryImg' src="https://th.bing.com/th/id/OIP.98-6Eesv96bZ2h_kgNyWfAAAAA?rs=1&pid=ImgDetMain" alt="" />
          </Col>
        </Row>
      </div>
      <hr className='mx-5' />
      {/* ABOUT */}
      <div id='about' style={{ marginTop: '6em', marginBottom: '5em' }} className='text-center px-5'>
        <h2 data-aos="flip-left" style={{ fontSize: '4em', fontWeight: '700', fontFamily: "Oswald, serif", color: 'rgb(255, 255, 255)' }} className='mb-5'>ABOUT</h2>
        <div data-aos="zoom-out-up">
          <p>Enjoy Online Ticket Booking For Movies Near You With CineSeat.
            If you are planning for movie ticket bookings for the upcoming movies near you, don't look any further. Now it is easy to get on with online ticket booking with CineSeat. Your one-stop solution for movies to watch this weekend. Everyone enjoys watching their favourite movies on the big screen, and the excitement of watching it with friends is unparalleled. </p>
          <p> If you have been eagerly waiting for a movie that you can watch with your friends and family, now you know where to get the tickets from. When you watch a film in a cinema theatre, you get to watch it on a massive screen with surround-sound, and that enhances your movie-watching experience. Thus, allowing you to be a part of the actual movie. Get to know about all movies and movie trailers to watch here. Also, know how to book movie tickets.
          </p>
          <p>Latest Movies To Watch in Near You With Family And Friends
            Each year the cinema world is enlightened with the latest movie trailers, increasing the excitement among everyone. This year, just like the previous year, you have been waiting for some of the biggest Bollywood movies to be released with the biggest star cast. Enjoy your favourite movie, not just with your friends, but in a cinema hall near you that will be filled with like-minded people. Be a part of everyone's reaction. Dates are already announced, and all you need to do is book the tickets for the preferred date so that you don't end up missing the first-day first show! Don't worry; we have the list of shows near you and movie showtimes.
          </p>
        </div>
      </div>


      {/* ticket book */}
      <div style={{ position: 'fixed', width: '12em', right: '2%', bottom: '2%', zIndex: 4, boxShadow: '5px 5px 0 rgba(0,0,0,0.75)' }} className=' bg-light p-3 text-center m-4 float-end'>
        <Link to={'/movies'} target='_top' className='btn text-dark'>Book a Ticket <i className="fa-regular fa-square-check ms-1"></i></Link>
      </div>

    </div>
  )
}

export default Home