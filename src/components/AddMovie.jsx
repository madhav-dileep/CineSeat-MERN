import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

const AddMovie = () => {
    const [show, setShow] = useState(false);
    const [movieDetails, setMovieDetails] = useState({
        name: '',
        genre: '',
        description: '',
        releaseDate: '',
        endDate: '',
        runtime: 0,
        cast: '',
        language: '',
        ticketPrice: 0,
        trailerLink: '',
        movieImg: ''
    })
    const [preview, setPreview] = useState('')

    // Functions
    const handleClose = () => {
        setShow(false)
        setPreview("")
        setMovieDetails({
            name: '',
            genre: '',
            description: '',
            releaseDate: '',
            endDate: '',
            runtime: 0,
            cast: '',
            language: '',
            ticketPrice: 0,
            trailerLink: '',
            movieImg: ''
        })
    };
    const handleShow = () => setShow(true);

    const handleTrailerLink = (url) => {
        if (url.includes("https://www.youtube.com/watch?v=")) {
            const videoId = url.split("https://www.youtube.com/watch?v=")[1].slice(0, 11)
            // setMovieDetails({ ...movieDetails, trailerLink: `https://www.youtube.com/embed/${videoId}` })
            setMovieDetails({ ...movieDetails, trailerLink: url })
        }
        else if (url.includes("https://youtu.be/")) {
            const videoId = url.split("https://youtu.be/")[1].slice(0, 11)
            // setMovieDetails({ ...movieDetails, trailerLink: `https://www.youtube.com/embed/${videoId}` })
            setMovieDetails({ ...movieDetails, trailerLink: url })
        }
        else {
            alert("Invalid Youtube Link")
        }
    }

    const handleSave = () => {
        const { name, genre, description, releaseDate, endDate, runtime, cast, language, ticketPrice, trailerLink, movieImg } = movieDetails;
        if (name && genre && description && releaseDate && endDate && runtime && cast && language && ticketPrice && trailerLink && movieImg) {
            // Make API Call
            alert("API CALL")
            handleClose()
        } else {
            alert('Fill Every Field!!')
        }
    }


    useEffect(() => {
        if (movieDetails.movieImg.type == 'image/png' || movieDetails.movieImg.type == 'image/jpg' || movieDetails.movieImg.type == 'image/jpeg') {
            setPreview(URL.createObjectURL(movieDetails.movieImg))
        } else {
            setPreview("")
            setMovieDetails({ ...movieDetails, movieImg: '' })
        }
    }, [movieDetails.movieImg])


    // console.log(movieDetails);

    return (
        <>
            <button onClick={handleShow} className='btn btn-success px-5 py-3'>Add a Movie</button>

            <Modal size='lg' centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontSize: '2em', fontWeight: '700', color: 'white' }}>Add a Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-lg-4 d-flex align-items-center overflow-hidden">
                            <label style={{ border: '4px dashed', height: 'auto', maxHeight: '500px', width: '100%' }} className='p-1'>
                                <input onChange={(e) => { setMovieDetails({ ...movieDetails, movieImg: e.target.files[0] }) }} className='d-none' type="file" name="" id="" />
                                <img style={{ height: '100%', width: '100%', objectFit: 'cover' }} className='img-fluid' src={preview ? preview : "https://www.dummyimage.com/600x800/000/fff"} alt="" />
                            </label>
                        </div>
                        <div className="col-lg-8 p-2 px-4 my-3 ">
                            <input onChange={(e) => { setMovieDetails({ ...movieDetails, name: e.target.value }) }} type="text" className='form-control form-control-md mb-3' placeholder='Movie Name' />
                            <input onChange={(e) => { setMovieDetails({ ...movieDetails, genre: e.target.value }) }} type="text" className='form-control form-control-md mb-3' placeholder='Genre' />
                            <input onChange={(e) => { setMovieDetails({ ...movieDetails, description: e.target.value }) }} type="text" className='form-control form-control-md mb-3' placeholder='Decription' />
                            <div style={{ border: '1px dashed' }} className='p-3 my-3 rounded-4'>
                                <div className='d-flex flex-column my-3'>
                                    <label htmlFor="">Release Date</label>
                                    <input onChange={(e) => { setMovieDetails({ ...movieDetails, releaseDate: e.target.value }) }} type="date" name="" id="" className='form-control form-control-md' placeholder='Release Date' />
                                </div>
                                <div className='d-flex flex-column my-3'>
                                    <label htmlFor="">End Date</label>
                                    <input onChange={(e) => { setMovieDetails({ ...movieDetails, endDate: e.target.value }) }} type="date" name="" id="" className='form-control form-control-md' placeholder='End Date' />
                                </div>
                            </div>
                            <input onChange={(e) => { setMovieDetails({ ...movieDetails, runtime: e.target.value }) }} type="number" className='form-control form-control-md mb-3' placeholder='Runtime(in min.)' />
                            <input onChange={(e) => { setMovieDetails({ ...movieDetails, cast: e.target.value }) }} type="text" className='form-control form-control-md mb-3' placeholder='Cast' />
                            <input onChange={(e) => { setMovieDetails({ ...movieDetails, language: e.target.value }) }} type="text" className='form-control form-control-md mb-3' placeholder='Language' />
                            <input onChange={(e) => { setMovieDetails({ ...movieDetails, ticketPrice: e.target.value }) }} type="number" min={1} className='form-control form-control-md mb-3' placeholder='Ticket Price' />
                            <input onChange={(e) => { handleTrailerLink(e.target.value) }} type="text" className='form-control form-control-md mb-3' placeholder='Trailer Youtube Link' />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddMovie