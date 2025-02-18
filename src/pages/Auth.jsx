import React, { useState } from 'react'
import authImage from '../assets/authImage.png'
import { FloatingLabel, Form } from 'react-bootstrap'
import blob from '../assets/blob.svg'
import { Link, useNavigate } from 'react-router-dom'


const Auth = ({ insideRegister, setLoginStatus }) => {

  const navigate = useNavigate()

  const [userDetails,setUserDetails] = useState({
    userName:'',
    email:'',
    password:''
  })

  const handleLogin = () => {
    const {email, password} = userDetails
    if(email && password){
      alert('login successfull')
      setUserDetails({
        userName:'',
        email:'',
        password:''
      })
      setLoginStatus(true)
      navigate('/')
    }else{
      alert('Enter Email/Password!')
    }
  }
  const handleRegister = () => {
    const {userName, email, password} = userDetails
    if(userName && email && password){
      alert('registration successfull')
      setUserDetails({
        userName:'',
        email:'',
        password:''
      })
      navigate('/login')
    }else{
      alert('Please Fill every fields!!');
    }
  }

  

  return (
    <div style={{ minHeight: '100vh' }} className='d-flex flex-wrap justify-content-center align-items-center'>
      <div style={{backgroundColor:'rgba(255,255,255,0.8)'}} className='container card border p-2 rounded-4'>
        <div className="row">
          <div style={{}} className="col-lg-5">
              <img className='img-fluid' src={authImage} alt="Auth Image" />
          </div>
          <div className="col-lg-7 px-3 text-dark text-center">
            <Link to={'/'} className='text-decoration-none'><h4 style={{ fontSize: '3em', color: 'black', fontFamily: "Oswald, serif", textShadow: '0 2px 2px black' }} className='mb-4'><span className='text-danger'>Cine</span>Seat</h4></Link>
            <h5>Sign {insideRegister ? "up" : "in"} to Book Tickets</h5>

            <Form className='mt-5 pe-5'>
              {
                insideRegister &&
                <FloatingLabel
                controlId="username"
                label="Username"
                className="mb-4"
              >
                <Form.Control value={userDetails.userName} onChange={(e)=>{setUserDetails({...userDetails,userName:e.target.value})}} type="text" placeholder="" />
              </FloatingLabel>
              
              }
              <FloatingLabel
                controlId="email"
                label="Email address"
                className="mb-4"
              >
                <Form.Control value={userDetails.email} onChange={(e)=>{setUserDetails({...userDetails,email:e.target.value})}} type="email" placeholder="name@example.com" />
              </FloatingLabel>
              
              <FloatingLabel controlId="password" label="Password" className='mb-4'>
                <Form.Control value={userDetails.password} onChange={(e)=>{setUserDetails({...userDetails,password:e.target.value})}} type="password" placeholder="Password" />
              </FloatingLabel>
            </Form>
            {
              insideRegister ? 
              <div className='mt-4'>
              <button onClick={handleRegister} className='btn btn-danger px-4 py-2'>Register</button>
              <p className='mt-4'>Already a User of <span className='fw-bolder'>CineSeat</span>! Click <Link to={'/login'}>here</Link> to Login!</p>
            </div>
            :
            <div className='mt-4'>
              <button onClick={handleLogin} className='btn btn-success px-4 py-2'>Login</button>
              <p className='mt-4'>New to <span className='fw-bolder'>CineSeat</span>? Click <Link to={'/register'}>here</Link> to Register!</p>
            </div>
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default Auth