import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';

function MyProfile() {
  const [profile, setProfile] = useState({ first_name: '', last_name: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [updatedProfile, setUpdatedProfile] = useState(profile);

  useEffect(() => {
    
    axios.get('http://localhost:5000/students/1/profile') 
      .then(response => setProfile(response.data))
      .catch(error => console.error('Error fetching profile:', error));
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    axios.put('http://localhost:5000/students/1/profile', updatedProfile)
      .then(response => {
        setProfile(updatedProfile);
        setIsEditing(false);
      })
      .catch(error => console.error('Error updating profile:', error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile(prevProfile => ({ ...prevProfile, [name]: value }));
  };

  return (
    <div className="container mt-5 mb-5 p-4" style={{
      backgroundColor: '#F0F7FC',
      fontFamily: "'Roboto', sans-serif",
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px', 
    }}>
      <h2>My Profile</h2>
      <Form>
        <Form.Group controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="first_name"
            value={isEditing ? updatedProfile.first_name : profile.first_name}
            onChange={handleChange}
            readOnly={!isEditing}
          />
        </Form.Group>

        <Form.Group controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="last_name"
            value={isEditing ? updatedProfile.last_name : profile.last_name}
            onChange={handleChange}
            readOnly={!isEditing}
          />
        </Form.Group>

        {isEditing ? (
          <Button variant="primary" onClick={handleSaveClick} className="mt-2 btn text-white bg-secondary">
            Save
          </Button>
        ) : (
          <Button variant="secondary" onClick={handleEditClick} className="mt-2 btn text-white bg-secondary">
            Edit
          </Button>
        )}
      </Form>
    </div>
  );
}

export default MyProfile;
