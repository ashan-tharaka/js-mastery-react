import React, { useEffect, useState } from "react";
import   './App.css';
import SearchIcon from './Search.svg';
import MovieCard from './MovieCard';


const API_KEY="http://www.omdbapi.com?apiKey=acdb250e";

const movie1={
    "Title":"Amazing Spiderman Syndrome",
    "Year":"2021",
    "imdbID":"tt123333",
    "Type":"movie",
    "Poster":"N/A"

}

const App=()=>{
    const [movies,setMovies]=useState([]);
    const [searchTerm,setSearchTerm]=useState('');
    

        const searchMovies=async(title)=>{
        const response=await fetch(`${API_KEY}&s=`)
        const data=await response.json();
        console.log(data.Search);

        

    }
    useEffect(()=>{
         searchMovies('Spiderman');


    },[]);

    return (
        <div className="app">
            <h1>
                MovieLand
            </h1>
            <div className="search">
                <input placeholder="Search for movies"
                value="Superman"
                onChange={()=>{

                }}/>
                <img src={SearchIcon}
                alt="search" onClick={()=>{}}
                />



            </div>
            {
                movies?.length>0
                ?(
                    <div className="container">
                  {
                    movies.map((movie)=>(
                        <MovieCard movie={movie}/>

                    ))
                  }
                
                </div>
                ):(
<div className="empty">
    <h2>No movies found</h2>
</div>

                )

            }

        </div>
    )
};



export default App;
