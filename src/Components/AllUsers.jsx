import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const AllUsers = () => {
  const api_url = "https://jsonplaceholder.typicode.com/posts";
  let [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get(api_url)
      .then((res) => {
        console.log("Axios Recieved", res.data);
        setState(res.data);
      })
      .catch((err) => {
        console.log("Axios Error", err);
      });
  }, [setState, api_url]);

  return (
    <div>
      <Container>
        <Row>
          {state.map((user) => (
            <Col key={user.id} lg={4}>
              <Card style={{ width: "20rem", margin: "auto" }}>
                <Card.Body>
                  <Card.Text>
                    <b>Product Title:</b> {user.title} <br />
                    <b>Description:</b> {user.body} <br />
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AllUsers;
