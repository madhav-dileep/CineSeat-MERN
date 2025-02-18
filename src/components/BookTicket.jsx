import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import seating from '../assets/seating.png'


const BookTicket = ({ movieName, loginStatus }) => {

    const initialTimes = ['09:00', '14:00', '18:00', '23:00'];

    const [show, setShow] = useState(false);
    const [seatCount, setSeatCount] = useState(0)
    const [ticketPrice, setTicketPrice] = useState(50)
    const [ticketDetails, setTicketDetails] = useState({
        movieName: '',
        showDate: '',
        showTime: '',
        seats: [],
        numberOfSeats: 0,
        totalTicketPrice: 0,
        timeOfBooking: ''
    })
    // const [seatsLocal, setSeatsLocal] = useState({});
    const [minDate, setMinDate] = useState('');
    const [maxDate, setMaxDate] = useState('');
    const [showTimes, setShowTimes] = useState(initialTimes)

    // for seats
    const [dates, setDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedShow, setSelectedShow] = useState('');
    const [seatsData, setSeatsData] = useState({});
    const [selectedSeats, setSelectedSeats] = useState([]);

    const [tempSeatsDate, setTempSeatsDate] = useState([])
    const [tempSeats, setTempSeats] = useState([])

    const SHOWS_PER_DAY = 4;
    const SEATS_PER_SHOW = 80;



    useEffect(() => {
        const today = new Date();
        const tempDates = [];
        for (let i = 0; i < 4; i++) {
            const date = new Date(today);
            date.setDate(date.getDate() + i);
            tempDates.push(date.toLocaleString("fr-CA").split(' ')[0]);
        }
        setDates(tempDates);
        // setSeatingTemplate();
        // sessionStorage.setItem("booking",JSON.stringify(tempDates))
    }, []);

    useEffect(() => {
        const tempSeatsData = {};
        dates.forEach(date => {
            tempSeatsData[date] = {};
            for (let show = 0; show < initialTimes.length; show++) {
                    tempSeatsData[date][`${initialTimes[show]}`] = Array(SEATS_PER_SHOW).fill(false);
            }
        });
        // setSeatsData(tempSeatsData);
        sessionStorage.setItem("booking",JSON.stringify(tempSeatsData))
    }, [dates]);
    // console.log(dates, seatsData, selectedDate, selectedShow);
    // console.log(typeof tempSeats, tempSeats);
    // console.log(selectedSeats, typeof selectedSeats);
    // console.log(seatsData);


    useEffect(() => {
        // setSeatsData(JSON.parse(sessionStorage.getItem("booking")))
        const today = new Date();
        const date = new Date(today);
        date.setDate(date.getDate() - 1);
        const yesterday = date.toLocaleString("fr-CA").split(' ')[0];
        let updateSeatsData = seatsData ? { ...seatsData } : {};
        if (updateSeatsData && yesterday in updateSeatsData) {
            delete updateSeatsData[yesterday];
            // console.log("Inside deleting yesterday's data");
            dates.forEach((date) => {
                // console.log('hello');
                if (!(date in updateSeatsData)) {
                    console.log('inside date adding');
                    updateSeatsData[date] = {};
                    for (let show = 0; show < initialTimes.length; show++) {
                        updateSeatsData[date][`${initialTimes[show]}`] = Array(SEATS_PER_SHOW).fill(false);
                    }
                }
            });
            setSeatsData(updateSeatsData);
        }

    }, [seatsData])

    // /////////////////////////////////////////////////////////


    const handleClose = () => {
        setShow(false)
        setSeatCount(0)
        // setSeatsLocal({})
        // setTicketDetails({
        //     showDate: '',
        //     showTime: '',
        //     seats: {},
        //     numberOfSeats: 0,
        //     totalTicketPrice: 0,
        //     timeOfBooking: ""
        // })
        setShowTimes('')
        setSelectedDate('')
        setSelectedShow('')
        setTempSeats([])
        setTempSeatsDate([])
        setSelectedSeats([])
    };
    const handleShow = () => {
        setShow(true)
        // console.log(JSON.parse(sessionStorage.getItem("booking")));
        setSeatsData(JSON.parse(sessionStorage.getItem("booking")))
    };

    const handleBook = () => {
        if (selectedDate && selectedShow && selectedSeats) {
            const updatedSeatsData = { ...seatsData };
            selectedSeats.forEach(seatIndex => {
                updatedSeatsData[selectedDate][selectedShow][seatIndex] = true;
            });
            setSeatsData(updatedSeatsData);
            var d = new Date(Date.now())
            setTicketDetails({ ...ticketDetails, movieName, seats: selectedSeats, numberOfSeats: seatCount, timeOfBooking: d.toString(), showDate: selectedDate, showTime: selectedShow, totalTicketPrice: ticketPrice * seatCount })
            sessionStorage.setItem("booking", JSON.stringify(updatedSeatsData))
            setSelectedSeats([]);
            alert('Seats booked successfully!');
            handleClose()
        }
        else {
            alert('Fill in the Details')
        }

    }

    const handleDateandTimeOfShows = (e) => {
        console.log("inisde handleDateandTimeOfShows");
        setSelectedDate(e.target.value)
        // setTicketDetails({ ...ticketDetails, showDate: e.target.value })
        setTempSeatsDate(seatsData[e.target.value])
        setTempSeats([])
        const currentDate = new Date().toLocaleString("fr-CA").split(' ')[0]
        // console.log(currentDate);
        if (e.target.value === currentDate) {
            const currentTime = new Date();
            const formattedCurrentTime = currentTime.toTimeString().split(' ')[0];
            const filteredTimes = initialTimes.filter((time) => {
                return time >= formattedCurrentTime;
            });
            setShowTimes(filteredTimes);
        } else {
            setShowTimes(initialTimes)
        }
    }

    const handleShowTimes = (e) => {
        // setTicketDetails({ ...ticketDetails, showTime: e.target.value })
        setSelectedShow(e.target.value)
        if (tempSeats) {
            setTempSeats(tempSeatsDate[e.target.value])
        }
    }

    // For initialy setting Date and Time
    useEffect(() => {
        // For Date
        const today = new Date();
        // console.log(today);
        const mindate = today.toLocaleString("fr-CA").split(' ')[0]
        setMinDate(mindate);
        today.setDate(today.getDate() + 3)
        const maxdate = today.toLocaleString("fr-CA").split(' ')[0]
        setMaxDate(maxdate)
        // console.log(formattedDate);
        // For Time
        setShowTimes('')
    }, []);



    // console.log(ticketDetails);
    // console.log(tempSeats, selectedShow);


    return (
        <>
            <button onClick={handleShow} className='btn text-white btn-info px-5 py-3'>Book Tickets</button>


            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontSize: '2em', fontWeight: '700', color: 'white' }}>{movieName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className='text-center text-white'><h2>Ticket Price: <span className='fw-bold text-primary'>{ticketPrice}$</span></h2></div>
                        <label className='mb-2'>Date:</label>
                        <input onChange={(e) => { handleDateandTimeOfShows(e) }} type="date" className='form-control' min={minDate} max={maxDate} />
                        <label className='my-2'>Time:</label>
                        <Form.Select onChange={(e) => { handleShowTimes(e) }}>
                            <option hidden> - - </option>
                            {
                                showTimes.length > 0 ?
                                    showTimes?.map(time => (
                                        <option key={time} value={time}>{time}</option>
                                    ))
                                    :
                                    <option className='text-danger' value="" disabled>Sorry! No Shows Available</option>
                            }
                        </Form.Select  >
                        <label className='my-2'>Seat Select:</label>
                        <div>

                            <div hidden={!selectedShow} className='text-center my-3 text-white'>
                                <div className='d-flex justify-content-evenly mt-4'>
                                    <div className='d-flex justify-content-center align-items-center'><div style={{ backgroundColor: 'red' }} className='border me-2 p-2 rounded-top-4'></div>Occupied</div>
                                    <div className='d-flex justify-content-center align-items-center'><div style={{ backgroundColor: 'green' }} className='border me-2 p-2 rounded-top-4'></div>Selected</div>
                                    <div className='d-flex justify-content-center align-items-center'><div className='border me-2 p-2 bg-light rounded-top-4'></div>Empty</div>
                                </div>
                                <hr style={{ color: 'white', borderColor: 'white' }} className='mx-5 border border-4 ' />
                                Screen is Here
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 40px)', alignItems: 'center' }}>
                                {selectedShow &&
                                    tempSeats?.map((isBooked, index) => (
                                        <button className='seatS' key={index} onClick={(e) => {
                                            e.preventDefault()
                                            if (isBooked) return;
                                            if (selectedSeats.includes(index)) {
                                                setSelectedSeats(selectedSeats.filter(seat => seat !== index));
                                                setSeatCount(seatCount - 1)
                                            } else {
                                                setSelectedSeats([...selectedSeats, index]);
                                                setSeatCount(seatCount + 1)
                                            }
                                        }}
                                            style={{
                                                margin: '8px',
                                                backgroundColor: isBooked ? 'red' : selectedSeats.includes(index) ? 'green' : 'lightgray',
                                                borderTopLeftRadius: 10,
                                                borderTopRightRadius: 10,
                                                border: '0px'
                                            }}>{index + 1}</button>
                                    ))
                                }
                            </div>
                            <h5 hidden={!selectedSeats.length > 0} className='mt-3 text-white'>Seats Selected:
                                <span className='ms-2'>
                                    {
                                        selectedSeats?.length > 0 &&
                                        selectedSeats.map(seat => seat + 1).join(', ')
                                    }
                                </span>
                            </h5>
                        </div>

                        {/* <div className='text-center my-4'>
                            <img width={300} className='img-fluid' src={seating} alt="" />
                        </div> */}
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleBook}>
                        Book for {ticketPrice * seatCount}$
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default BookTicket