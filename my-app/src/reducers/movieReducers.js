

const initialState = {
    movies: [],
    selectedMovie: null,
    movieDetails: null,
    error: null,
  };
  
  const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_MOVIES_SUCCESS':
        return {
          ...state,
          movies: action.payload,
          error: null,
        };
      case 'FETCH_MOVIES_FAILURE':
        return {
          ...state,
          error: action.payload,
        };
      case 'FETCH_MOVIE_DETAILS_SUCCESS':
        return {
          ...state,
          selectedMovie: action.payload,
          movieDetails: action.payload,
          error: null,
        };
      case 'FETCH_MOVIE_DETAILS_FAILURE':
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default moviesReducer;
  