import React, { useState } from 'react'
import { Button, Modal, ModalBody } from 'react-bootstrap'
import ViewMovieDetails from './ViewMovieDetails'
import QRCode from "react-qr-code";

const BookedMoviesList = () => {

    const [show, setShow] = useState(false)
    const [qr,setQr] = useState(false)
    const [qrText,setQrText] = useState('')

    const handleQr = () => {
        setQr(!qr)
    }

    const handleShow = () => {
        setShow(!show)
    }

    const handleQRCode = (qrText) => {
        console.log(qrText);
        setQrText(qrText)
        handleQr()
    }

  return (
    <>
        <div className='container'>
            <h2 style={{fontSize:'2em',fontWeight:700, color:'white'}}>YOUR BOOKINGS</h2>
            <hr />
            <table className='table'>
                <thead className='thead'>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Show Date and Time</th>
                        <th>Booking ID</th>
                        <th>Seat(s)</th>
                        <th></th>
                        <th>...</th>
                    </tr>
                </thead>
                <tbody className='tbody'>
                    <tr>
                        <td>1</td>
                        <td>Captain America</td>
                        <td>15 Feb 2025 | 11:00 pm</td>
                        <td onClick={()=>handleQRCode('664sa1dsad6s6165as166')} style={{cursor:'pointer'}} className='text-decoration-underline text-danger'>664sa1dsad6s6165as166</td>
                        <td>11, 12, 13</td>
                        <td><ViewMovieDetails userSide={true}/></td>
                        {/* <td><i style={{color:'red',cursor:'pointer'}} className="fa-solid fa-trash"></i></td> */}
                        <td><button onClick={handleShow} className='btn btn-danger'>Cancel Booking</button></td>
                    </tr>
                </tbody>
    
            </table>
        </div>

       

        <Modal size='sm' show={show} onHide={handleShow}>
            <Modal.Header style={{fontSize:'1.8em',fontWeight:700,color:'white'}}>
            Are you Sure, You want to cancel the booking? 
            </Modal.Header>
            <Modal.Footer>
                <Button onClick={handleShow} className='px-5 py-3' variant='success'>
                    No
                </Button>
                <Button onClick={handleShow} className='px-5 py-3' variant='danger'>
                    Yes
                </Button>
            </Modal.Footer>
        </Modal>
        <Modal size='md' centered show={qr} onHide={handleQr}>
            <Modal.Body className=' text-center'>
                <QRCode size={256} className='' value={qrText}/>
            </Modal.Body>
        </Modal>
        
    </>
  )
}

export default BookedMoviesList