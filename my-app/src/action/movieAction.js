

export const fetchMovies = () => {
    return async (dispatch) => {
      try {
        const response = await fetch('http://localhost:8000/movies');
        const data = await response.json();
        dispatch({
          type: 'FETCH_MOVIES_SUCCESS',
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: 'FETCH_MOVIES_FAILURE',
          payload: error.message,
        });
      }
    };
  };
  
  export const fetchMovieDetails = (id) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`http://localhost:8000/movies/${id}`);
        const data = await response.json();
        dispatch({
          type: 'FETCH_MOVIE_DETAILS_SUCCESS',
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: 'FETCH_MOVIE_DETAILS_FAILURE',
          payload: error.message,
        });
      }
    };
  };
  