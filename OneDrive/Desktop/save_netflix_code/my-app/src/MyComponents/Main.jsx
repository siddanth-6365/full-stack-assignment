import React from 'react'
import { useState, useEffect } from 'react';
import requests from '../Request';
import axios from 'axios';


const Main = () => {

    const [movies, setmovies] = useState([]);
    let movie = movies[Math.floor(Math.random() * movies.length)]
    useEffect(() => {
        axios.get(requests.requestPopular).then(
            (response) => {
                setmovies(response.data.results)
            }
        )
    }, []);
    // console.log(movie?.backdrop_path)  // use ? for getting the nested items like title movie?.title
    const concatestr = (str) => {
        if (str?.length > 150) {
            return str.slice(0, 150) + '....';
        }
        return str;
    }
    return (
        <>
            <div className="w-full text-white h-[550px]" >
                <div className="w-full h-full">
                    <div className=" absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
                    <div className=" absolute py-[150px] p-4  ">
                        <h1 className='text-3xl md:text-5xl font-bold mt-3 ]'> {movie?.title} </h1>
                        <div className="mt-2 ">
                            <button className='bg-white text-black px-5 py-3 mr-5'>Play</button>
                            <button className=' px-5 py-3 border-solid border-white-200 border-2'>Watch Later</button>
                        </div>
                        <div className=" text-gray-400 mt-2 ">
                            Released : {(movie?.release_date)}
                        </div>
                        <div className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 ">
                            {concatestr(movie?.overview)}
                        </div>
                    </div>
                    <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt="img" />
                </div>
            </div>

        </>
    )
}

export default Main