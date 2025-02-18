import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import BookTicket from '../components/BookTicket'
import AOS from 'aos';
import 'aos/dist/aos.css';

const View = () => {

  const [userReview, setUserReview] = useState({
    rating: 0,
    reviewText: ""
  })

  const [movieName,setMovieName] = useState("Captain America")

  const handleSendReview = () => {
    const {rating, reviewText} = userReview;
    if(rating && reviewText){
      alert('saved your review')
    }else{
      alert('Fill in field to save Your review!!!')
    }
  }

  useEffect(()=>{
      AOS.init()
    },[])


  return (
    <>
      <Header />
      <div style={{ minHeight: '100vh', color: 'white' }}>
        <div className='viewPage mt-5 container p-3'>
          <h2 data-aos="fade-up" style={{ fontSize: '3.8rem', fontFamily: "Oswald, serif" }} className='text-uppercase mb-4'>{movieName}</h2>
          <hr />
          <div className="row">
            <div className="col-lg-3 mb-sm-5">
              <img data-aos="flip-right" style={{ height: '100%', width: '100%', objectFit: 'cover' }} className='img-fluid' src="https://anniehaydesign.weebly.com/uploads/9/5/4/6/95469676/landscape-poster-3_orig.jpg" alt="Poster Img" />
            </div>
            <div data-aos="zoom-in" className="col-lg-9 ">
              <iframe width="100%" height="520" src="https://www.youtube.com/embed/JtrLaOWJMp0" title="Captain America: Brave New World | Official Trailer" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
          <hr />
          <div style={{ fontSize: '1.4em' }} className="row">
            <div data-aos="fade-right" className="col-lg-6">
              <ul style={{ listStyle: 'none' }}>
                <li  className='my-3 fw-light'><span className='fw-bold text-danger'>Genre:</span >  Action</li>
                <li  className='my-3 fw-light'><span className='fw-bold text-danger'>Running Time:</span >  120 min</li>
                <li  className='my-3 fw-light'><span className='fw-bold text-danger'>Release Date:</span >  13 Feb 2025</li>
                <li className='my-3 fw-light'><span className='fw-bold text-danger'>Cast:</span >  Harrison Ford, Giancarlo Esposito, Anthony Mackie, Danny Ramirez</li>
                <li  className='my-3 fw-light'><span className='fw-bold text-danger'>Language:</span >  English</li>
              </ul>
            </div>
            <div data-aos="fade-left" className="col-lg-6 fs-3 text-danger fw-bold">
              Description
              <p className='fw-light fs-5 text-light fst-italic'>Sam Wilson, the new Captain America, finds himself in the middle of an international incident and must discover the motive behind a nefarious global plan.</p>
            </div>
          </div>
          <hr />
          <div className='row'>
            {/* reviews */}
            <div className="col-lg-6">
              <h3 style={{ fontSize: '2.5em', fontWeight: 700 }}>Reviews</h3>
              <div style={{ height: 'auto', maxHeight: '500px', overflow: 'auto' }} className='nowplaying'>
                <div data-aos="flip-up" className='border px-4 py-3 my-3'>
                  <h5 style={{ fontSize: '1.6em' }} className='text-warning'>Jacob</h5>
                  <div>Ratings: 4<i style={{ color: 'yellow' }} className='fa-solid fa-star ms-2'></i> </div>
                  <p className='fst-italic fw-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque.</p>
                </div>
                <div data-aos="flip-up" className='border px-4 py-3 my-3'>
                  <h5 style={{ fontSize: '1.6em' }} className='text-warning'>Jacob</h5>
                  <div>Ratings: 4<i style={{ color: 'yellow' }} className='fa-solid fa-star ms-2'></i> </div>
                  <p className='fst-italic fw-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque.</p>
                </div>
              </div>
              {/* leave a review */}
              <div data-aos="fade-right" className='my-5 px-3 card p-3'>
                <h5 style={{ fontSize: '1.8em', color: 'white' }}>Leave a Review</h5>
                <form>
                  <div className='d-flex align-items-center'>
                    <input onChange={(e)=> {setUserReview({...userReview,rating:e.target.value})}} max={5} min={1} placeholder='Rating' className='form-control w-25 text-center' type="number" /> <i style={{ color: 'yellow' }} className='fa-solid fa-star ms-2 fs-3'></i>
                  </div>
                  <div className='input-group my-3'>
                    {/* <input placeholder='Write a Review' type="text" className='form-control' /> */}
                    <textarea onChange={(e)=> {setUserReview({...userReview,reviewText:e.target.value})}} placeholder='Write a Review' style={{ minHeight: 150, maxHeight: 150 }} className='form-control '></textarea>
                    <button onClick={handleSendReview} className='btn btn-primary'>Send</button>
                  </div>
                </form>
              </div>
            </div>
            {/* Ads */}
            <div className="col-lg-6 d-flex flex-column flex-wrap align-items-center justify-content-center">
              <h5 htmlFor="">Ad</h5>
              <img className='img-fluid' src="https://www.axisbank.com/images/default-source/revamp_new/progresswithus/axis-bank-unveils-its-credit-cards-campaign-open-experiences.jpg" alt="" />
            </div>
          </div>
          <hr />
          <div>
            <BookTicket movieName={movieName} />
          </div>
        </div>
      </div>
    </>

  )
}

export default View