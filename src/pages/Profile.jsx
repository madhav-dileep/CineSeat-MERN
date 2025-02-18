import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import avatar from '../assets/avatar 1.png'
import MovieList from '../components/MovieList'
import BookedMoviesList from '../components/BookedMoviesList'
import QRCode from "react-qr-code";

const Profile = () => {

    const [isAdmin, setIsAdmin] = useState(true)
    const [userDetails, setUserDetails] = useState({
        name:'',
        email:'',
        profilePic:''
    })
    const [preview, setPreview] = useState('')

    useEffect(()=>{
        if(userDetails.profilePic){
            setPreview(URL.createObjectURL(userDetails.profilePic))
        }else{
            setPreview('')
        }
    },[userDetails.profilePic])

    const handleUpdateUser = () =>{
        const { name, email, profilePic } = userDetails;
        if(name || email || profilePic ){
            alert('Profile Updated')
        }else{
            alert('Fill the form to update!')
        }
    }


    return (
        <>
            <Header />
            <div style={{ minHeight: '100vh' }} className='container'>
                <button onClick={()=>setIsAdmin(!isAdmin)} className='btn'>swtich</button>
                <div style={{width:'100%'}} className="row mt-3">
                    <div style={{background: "linear-gradient(90deg, rgba(43,11,139,0.7982842795321253) 0%, rgba(109,9,121,1) 35%, rgba(31,18,0,1) 100%)"}} className="col-lg-3 card rounded text-center p-3 my-3">
                        {   isAdmin &&
                            <h5 className='text-white fw-bold'>Admin</h5>
                        }
                        <label>
                            <input onChange={(e)=>{setUserDetails({...userDetails,profilePic:e.target.files[0]})}} type="file" className='d-none' />
                            <img className='img-fluid' width={250} src={preview ? preview : avatar} alt="" />
                        </label>
                        <div className="form mb-3 text-white">
                            <form>
                                <input onChange={(e)=>{setUserDetails({...userDetails,name:e.target.value})}}  type="text" value={userDetails.name} className='form-control my-3' placeholder='Username' />
                                <input onChange={(e)=>{setUserDetails({...userDetails,email:e.target.value})}} type="email" value={userDetails.email} className='form-control my-3' placeholder='Email' />
                            </form>
                            <h5 className='fw-bold'>Joined on : <span className='fw-light'>14/02/2025</span></h5>
                        </div>
                        <div>
                            <button onClick={handleUpdateUser} className='btn btn-warning'>Update Profile</button>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        { isAdmin ? <MovieList/> : <BookedMoviesList/> } 
                    </div>
                </div>
            </div>
        </>

    )
}

export default Profile