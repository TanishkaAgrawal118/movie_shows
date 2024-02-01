import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import showImages from "../Images/shows.jpg";

const Hero = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div
        style={{
          textAlign: "center",
          padding: "200px",
          height: "100%",
          backgroundImage: `url(${showImages})`,
          backgroundSize: "cover",
        }}
      >
        <h1 style={{ color: "white",fontFamily:'revert',fontSize:'70px' }}>Book Movies</h1>
        <span style={{ color: "white",fontFamily:'cursive' }}>Discover the Magic of Cinema</span>
      </div>
      <div>
        <h2 style={{ textAlign: 'center', padding: '19px' }}>List of Latest Movies</h2>
        <Container className="content-box">
          <div className="tablebox">
            <table>
              <thead>
                <tr>
                  <th>S No.</th>
                  <th>Movie Name</th>
                  <th>Language</th>
                  <th>Genres</th>
                  <th>Ratings</th>
                </tr>
              </thead>
              <tbody>
                {movies.map((movie, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{movie.show.name}</td>
                    <td>{movie.show.language}</td>
                    <td>{movie.show.genres.join(', ')}</td>
                    <td>{movie.show.rating.average}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Hero;
