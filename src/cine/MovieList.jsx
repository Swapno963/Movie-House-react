import { useEffect, useState } from "react";
import { getAllMovies } from "../data/movies";
import MovieCard from "./MovieCard";

export default function MovieList() {
    // geting data from backend
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      fetch('http://127.0.0.1:8000/movies/')
        .then(response => response.json())
        .then(response => {
            setMovies(response)
            // console.log(response);
            })
        .catch(error => console.error(error));
    }, []);

    // const movies = getAllMovies();
    console.log('from movilist',movies);
    return (
        <div className="content">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
                {movies?.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}
