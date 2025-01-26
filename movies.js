import React from "react";

const movies = [
  { id: 1, title: "Inception", year: 2010 },
  { id: 2, title: "The Dark Knight", year: 2008 },
  { id: 3, title: "Interstellar", year: 2014 },
];

const Movies = () => {
  return (
    <div style={styles.container}>
      <h1>Popular Movies</h1>
      <ul style={styles.list}>
        {movies.map((movie) => (
          <li key={movie.id} style={styles.listItem}>
            <h2>{movie.title}</h2>
            <p>{movie.year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    margin: "10px 0",
    padding: "10px",
    backgroundColor: "#f4f4f4",
    borderRadius: "8px",
  },
};

export default Movies;
