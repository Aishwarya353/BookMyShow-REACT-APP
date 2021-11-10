import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useState, useEffect } from "react";
//import data from "./movies.json";
//to import json files
function AllMoviesFetch() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    try {
      const response = await axios.get("//localhost:5000/movies");
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }, []);
  //   async function getMovies() {
  //     try {
  //       const response = await axios.get("https://localhost:5000/movies");
  //       console.log(response);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  return (
    <div>
      <Container fluid style={{ padding: "8%", background: "darkblue" }}>
        <Row style={{ textAlign: "center" }}>
          {data.map((mov) => (
            <Col
              id={mov._id}
              key={mov.id}
              xs={6}
              md={4}
              lg={3}
              style={{ marginBottom: "2%" }}
            >
              <Card
                style={{ cursor: "pointer" }}
                onClick={() => (window.location.href = "/movies/" + mov._id)}
              >
                <Card.Img variant="dark" src={mov.image} />
                <Card.Body>
                  <Card.Title>{mov.title}</Card.Title>
                  <Card.Text>{mov.actor}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
export default AllMoviesFetch;
