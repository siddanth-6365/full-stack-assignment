import React from "react";
import requests from "../Request";
import { useState, useEffect } from "react";
import axios from "axios";
import MoviesList from "./MoviesList";



const Row = (props) => {
  const [like, setlike] = useState(false);
  const [movie, setMovies] = useState([]);
  useEffect(() => {
    axios.get(props.fetchUrl).then((res) => {
      setMovies(res.data.results);
    });
  }, [props.fetchUrl]);
  //   console.log(movie);

  return (
    <>
      <br />
      <div className="text-white">
        <h1 className="font-bold text-xl  sm:text-3xl p-4">{props.title}</h1>

        <div className="relative items-center  ">
          <div className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
            {movie.map((item) => (
             <MoviesList item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Row;
