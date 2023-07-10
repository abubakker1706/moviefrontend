import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies as fetchMovieList, fetchMovieDetails as fetchDetails } from './action/movieAction';

function App() {
  const movies = useSelector((state) => state.movies.movies);
  const selectedMovie = useSelector((state) => state.movies.selectedMovie);
  const movieDetails = useSelector((state) => state.movies.movieDetails);

  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieList());
  }, [dispatch]);

  const fetchMovieDetails = (id) => {
    if (selectedMovie && selectedMovie._id === id && movieDetails) {
      alert(`Your already in ${movieDetails.title} movie details. Please select another movie`)

     
      return;
    }
    dispatch(fetchDetails(id));
  };

  const renderMovieDetails = () => {
    if (!movieDetails) {
      return <div>No movie selected</div>;
    }

    return (
      <div style={{ cursor: 'pointer' }}>
        <h2 style={{ cursor: 'pointer' }}>{movieDetails.title}</h2>
        <p>Director: {movieDetails.director}</p>
        <p>Release Year: {movieDetails.releaseYear}</p>
      </div>
    );
  };

  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie._id} onClick={() => fetchMovieDetails(movie._id)} style={{ cursor: 'pointer' }}>
            {movie.title}
          </li>
        ))}
      </ul>
      {renderMovieDetails()}
    </div>
  );
}

export default App;
