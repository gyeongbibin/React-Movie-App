import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <h1>About MovieApp</h1>
      <p>
        MovieApp is a simple platform to explore and learn about popular movies.
        Built with React and love for movies! 🎥
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
};

export default About;
