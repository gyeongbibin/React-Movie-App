import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.navbar}>
        <button style={styles.authButton}>Login</button>
        <button style={styles.authButton}>Sign Up</button>
      </div>
      <div style={styles.content}>
        <h1>Welcome to MovieApp 🎬</h1>
        <p>Your go-to site for the latest movies and info.</p>
      </div>
      <div style={styles.videoContainer}>
        <video autoPlay muted loop style={styles.video}>
         <source src="/background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    textAlign: "center",
    padding: "20px",
    minHeight: "100vh",
    color: "white",
  },
  navbar: {
    position: "absolute",
    top: "20px",
    right: "20px",
    zIndex: 1,
  },
  authButton: {
    marginLeft: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "white",
    border: "none",
    borderRadius: "5px",
  },
  content: {
    zIndex: 2,
    position: "relative",
    padding: "20px",
  },
  videoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
  video: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },
};

export default Home;
