import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ViewMovieDetails = ({userSide}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button onClick={handleShow} className='btn'><i className="fa-solid fa-share-from-square"></i></button>

            <Modal size='lg' centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='d-flex w-100 justify-content-between align-items-center' style={{ fontSize: '2em', fontWeight: '700', color: 'white' }}>
                        <span>Captain America</span>
                        <div>
                            { !userSide && <button className='btn float-end '><a href='https://youtu.be/JtrLaOWJMp0' target='_blank' className='text-white'><i className="fa-solid fa-link"></i></a></button>}
                            <button className='btn float-end '><Link to={'/:id/view'} target='_top' className='text-white'><i className="fa-solid fa-share-from-square fs-6"></i></Link></button>
                        </div>
                       
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-lg-4 d-flex align-items-center">
                            <label style={{height:'100%',width:'100%'}} className='p-1'>
                                <input disabled className='d-none' type="file" name="" id="" />
                                <img style={{height:'100%',width:'100%', objectFit:'cover'}} className='img-fluid' src="https://anniehaydesign.weebly.com/uploads/9/5/4/6/95469676/landscape-poster-3_orig.jpg" alt="" />
                            </label>
                        </div>
                        <div className="col-lg-8 p-2 px-4 my-3 text-white">
                            <h5><span className='fw-bold text-info'>Name :</span> Captain America</h5>
                            <h5><span className='fw-bold text-info'>Genre :</span> Action</h5>
                            <h5><span className='fw-bold text-info'>Description :</span> Sam Wilson, the new Captain America, finds himself in the middle of an international incident and must discover the motive behind a nefarious global plan.</h5>
                            <h5><span className='fw-bold text-info'>Release Date :</span> 15 Feb 2025</h5>
                            {!userSide &&
                                <h5><span className='fw-bold text-info'>End Date :</span> 27 Feb 2025</h5>}
                            <h5><span className='fw-bold text-info'>Runtime :</span> 120 min</h5>
                            <h5><span className='fw-bold text-info'>Cast :</span> Harrison Ford, Giancarlo Esposito, Anthony Mackie, Danny Ramirez</h5>
                            <h5><span className='fw-bold text-info'>Ticket Price :</span> 50 $</h5>

                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ViewMovieDetails