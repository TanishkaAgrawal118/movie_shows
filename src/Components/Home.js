import { Paper } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const [shows, setShows] = useState([]);
  const [selectedShowKey, setSelectedShowKey] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleBookClick = (showKey) => {
    setSelectedShowKey(showKey);
  };

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "30px",
      }}
    >
      <Row>
        {shows.map((show) => (
          <Col key={show.show.id} lg={4}>
            <Paper elevation={2} className="moviebox">
              <div style={{textAlign:'center'}}>
                <h4>{show.show.name}</h4>
              </div>
              <img
                src={show.show.image?.medium || "placeholder.jpg"}
                alt={show.show.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "0% 50%",
                }}
              />
              <div className="text-center" style={{ marginBottom: '40px', marginTop: '8px' }}>
                <Link
                  to={{
                    pathname: '/detail',
                    state: { showKey: show.show.id, showName: show.show.name },
                  }}
                  className="btn btn-outline-info"
                  style={{ marginRight: '110px' }}
                  onClick={() => handleBookClick(show.show.id)}
                >
                  Book
                </Link>
                <span>Ratings: {show.show.rating.average}</span>
              </div>
            </Paper>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
