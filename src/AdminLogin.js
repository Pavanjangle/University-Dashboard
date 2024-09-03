import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Container, Row, Col, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


import image1 from "./images/img1.jpg";
import image2 from "./images/img2.jpg";
import image3 from "./images/img3.jpg";
import image4 from "./images/img4.jpg";
import image5 from "./images/img5.jpg";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    
    axios.post("http://localhost:5000/admin/login", { username, password })
      .then((response) => {
        setMessage(response.data.message);
        
      })
      .catch((error) => {
        console.error("Error:", error); 
        setMessage("Login failed");
      });
  };

  return (
    <>
     
      <Carousel
        className="shadow-sm"
        style={{ height: "700px", width: "100%" }}
        interval={3000}
      >
        {[image1, image2, image3, image4].map((image, index) => (
          <Carousel.Item key={index}>
            <div className="carousel-image-wrapper">
              <img
                className="d-block w-100"
                src={image} 
                alt={`Slide ${index + 1}`}
                style={{ height: "700px", filter: "blur(4px)" }}
              />
             
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center h-100">
                <img
                  src={image5} 
                  className="rounded-circle mb-3"
                  style={{
                    filter: "none",
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <h1
                  className="text-white display-4 custom-heading"
                  style={{
                    fontFamily: "'Arial', sans-serif", 
                    fontWeight: "bold",
                  }}
                >
                  Global Tech University Dashboard
                </h1>
                <h3>Innovating the Future Through Technology</h3>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="container mt-5 mb-5 p-4" style={{
      backgroundColor: '#FCF0FC',
      fontFamily: "'Roboto', sans-serif",
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px', 
    }}>
      <h2>Admin Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-2 btn text-white bg-secondary">
          Login
        </Button>
      </Form>
      {message && <p>{message}</p>}
    </div>
     
   </>
  );
}

export default AdminLogin;
