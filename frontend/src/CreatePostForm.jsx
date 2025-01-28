import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import "./Create.css"
import { useNavigate } from 'react-router-dom';

function CreatePostForm() {
  // Define state for form fields
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate()
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form reload

    // Clear any previous error or success message
    setError('');
    setSuccess('');

    // Prepare data to send to the backend
    const data = { name, title, image: imageUrl };
    
    try {
      // Send data to the backend using Axios
      const response = await axios.post('https://testdb-vlco.onrender.com/create', data);
      // If successful, handle the response
    
        navigate("/")
        setSuccess('Data submitted successfully!');
        // Reset the form fields
        setName('');
        setTitle('');
        setImageUrl('');
    } catch (error) {
      setError('Failed to submit data');
      console.error('Error:', error);
    }
  };

  return (
    <div className='b2'>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="url"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
}

export default CreatePostForm;
