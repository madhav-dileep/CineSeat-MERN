import React from 'react'
import AddMovie from './AddMovie'
import ViewMovieDetails from './ViewMovieDetails'

const MovieList = ({ isAdmin }) => {
    return (
        <>
            <div className='d-flex justify-content-between align-items-center container'>
                <h2 style={{ fontSize: '2em', fontWeight: 700, color: 'white' }}>MOVIES ADDED</h2>
                <div><AddMovie /></div>
            </div>
            <hr />
            <table className='table'>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                        <th></th>
                        <th>...</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Captain America</td>
                        <td>15 Feb 2025</td>
                        <td>Action, Fantasy</td>
                        <td>
                            <ViewMovieDetails/>
                        </td>
                        <td>
                            <button className='btn'><i style={{ color: 'red', cursor: 'pointer' }} className="fa-solid fa-trash"></i></button>
                        </td>

                    </tr>
                </tbody>

            </table>

        </>
    )
}

export default MovieList