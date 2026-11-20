import React, { useState, useEffect } from 'react';

// Custom hook definition
function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch data');
        return res.json();
      })
      .then((data) => setData(data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [url]);

  return { data, isLoading, error };
}

// Main Component Function
function MovieList() {
  const { data, isLoading, error } = useFetch('/data/movies.json');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="movie-list">
      {data.map((movie) => (
        <div key={movie.id} className="movie-item">
          <h3>{movie.title}</h3>
          <p>Year: {movie.year}</p>
          <p>Genre: {movie.genre}</p>
          <p>Director: {movie.director}</p>
          <p>Rating: {movie.rating}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;