import React, { useState } from 'react'
import avatar from '../assets/avatar 1.png'
import { Button, Modal } from 'react-bootstrap'
import { Form, Link } from 'react-router-dom'


const ProfileCard = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
        <div style={{cursor:'pointer'}} className='d-inline ' onClick={handleShow}>
            <img width={60} className='img-fluid' src={avatar} alt="" />
        </div>
        
        <Modal style={{color:'white'}} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>
            <div>
                <img width={180} src={avatar} alt="" />
                <div className="form">
                    {/* <input disabled type="text" value={"Jacob"} className='form-control my-3' placeholder='Username' />
                    <input disabled type="text" value={"jacob@gmail.com"} className='form-control my-3' placeholder='Email' /> */}
                    <h3>Jacob</h3>
                    <h4>jacob@gmail.com</h4>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            <Link to={'/profile'} target='_top' className='text-light text-decoration-none'>View Profile</Link>
          </Button>
        </Modal.Footer>
      </Modal>
        
    </>
  )
}

export default ProfileCard