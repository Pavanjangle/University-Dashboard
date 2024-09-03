import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';

function StudentSignup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/students/signup', { username, password })
      .then(response => setMessage(response.data.message))
      .catch(error => setMessage('Signup failed'));
  };

  return (
    <div className="container mt-5 mb-5 p-4" style={{
      backgroundColor: '#F0FCF9',
      fontFamily: "'Roboto', sans-serif",
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px', 
    }}>
      <h2>Student Sign-Up</h2>
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
          Sign Up
        </Button>
      </Form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default StudentSignup;
