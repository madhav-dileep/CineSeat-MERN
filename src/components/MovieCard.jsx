import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const MovieCard = ({ insideHome }) => {

    return (
        <div>
            {insideHome &&
                <Card data-aos="zoom-out-up" style={{ width: '18em', height: '22em', marginRight: '40px' }}>
                    <Card.Img className='img-fluid' variant="top" src="https://anniehaydesign.weebly.com/uploads/9/5/4/6/95469676/landscape-poster-3_orig.jpg" />
                    <Card.Body className='text-center'>
                        <Card.Title style={{ fontSize: '2em', fontFamily: "Oswald, serif", textShadow: '1px 1px 0px black', textTransform: 'uppercase', overflowX: 'hidden', overflowY: 'hidden', maxHeight: '2.4em' }} className='overflow-hidden'>Captain America</Card.Title>
                        {/* <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text> */}
                        <Link to={'/:id/view'} target='_top'><Button className='px-5 py-2 mt-3'>More info</Button></Link>
                    </Card.Body>
                </Card>
            }
            {
                !insideHome &&
                <>
                    <div style={{ width: '100%' }} className='d-none d-md-flex '>
                        <div data-aos="fade-left" style={{ height: '360px', borderBottom:'2px solid grey' }} className="row  d-flex align-items-center py-2 my-3">
                            <div style={{ height: '340px',width:'30%' }} className="col-lg-3">
                                <img style={{height: '100%', width: '100%', objectFit: 'cover' }} className='img-fluid' src="https://anniehaydesign.weebly.com/uploads/9/5/4/6/95469676/landscape-poster-3_orig.jpg" alt="Poster Img" />
                            </div>
                            <div style={{width:'60%'}} className="col-lg-7 text-white">
                                <h4 style={{ fontSize: '2em', fontWeight: 700, color: 'white' }} className='mb-5 mt-2'>Captain America</h4>
                                <h4 style={{ fontSize: '1.3em' }}><span style={{ fontWeight: 800 }} className='me-2'>Release Date :</span> 15 Feb 2025</h4>
                                <h4 style={{ fontSize: '1.3em' }}><span style={{  fontWeight: 800 }} className='me-2'>Cast:</span>Harrison Ford, Giancarlo Esposito, Anthony Mackie, Danny Ramirez</h4>
                                <h4 style={{ fontSize: '1.3em' }}><span style={{  fontWeight: 800 }} className='me-2'>Description:</span>Sam Wilson, the new Captain America, finds himself in the middle of an international incident and must discover the motive behind a nefarious global plan.</h4>
                                <Link to={'/:id/view'} target='_top'><Button className='px-5 py-2 mt-3'>More info</Button></Link>
                            </div>
                        </div>
                    </div>


                    <Card data-aos="fade-left" className='d-md-none' style={{ width: '18em', height: '22em', marginRight: '40px' }}>
                        <Card.Img className='img-fluid' variant="top" src="https://anniehaydesign.weebly.com/uploads/9/5/4/6/95469676/landscape-poster-3_orig.jpg" />
                        <Card.Body className='text-center'>
                            <Card.Title style={{ fontSize: '2em', fontFamily: "Oswald, serif", textShadow: '1px 1px 0px black', textTransform: 'uppercase', overflowX: 'hidden', overflowY: 'hidden', maxHeight: '2.4em' }} className='overflow-hidden'>Captain America</Card.Title>
                            {/* <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text> */}
                            <Link to={'/:id/view'} target='_top'><Button className='px-5 py-2 mt-3'>More info</Button></Link>
                        </Card.Body>
                    </Card>
                </>

            }


        </div>
    )
}

export default MovieCard