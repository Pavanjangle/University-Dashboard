import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import image5 from "./images/img5.jpg";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-3 mt-5" style={{fontFamily: "'Roboto', sans-serif"}}>
      <Container>
        <Row>
          <Col md={4} className="text-center text-md-left mb-3 mb-md-0">
            <img src={image5} alt="University Logo" className="img-fluid mb-3" style={{ width: '100px', borderRadius: '50%' }} />
            <h5>Global Tech University</h5>
            <p>123 University Lane<br/>Tech City, TC 12345</p>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <h5>Quick Links</h5>
            <ListGroup>
              <ListGroupItem className="bg-dark border-0 text-white">About Us</ListGroupItem>
              <ListGroupItem className="bg-dark border-0 text-white">Contact</ListGroupItem>
              <ListGroupItem className="bg-dark border-0 text-white">Privacy Policy</ListGroupItem>
              <ListGroupItem className="bg-dark border-0 text-white">Terms of Service</ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <div className="d-flex justify-content-around">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white"><i className="fab fa-twitter"></i></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white"><i className="fab fa-instagram"></i></a>
            </div>
            <p className="mt-3">Email: info@globaltechuniversity.edu</p>
            <p>Phone: (123) 456-7890</p>
          </Col>
        </Row>
      </Container>
      <div className="bg-dark text-center py-2">
        <p className="mb-0">&copy; 2024 Global Tech University. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
