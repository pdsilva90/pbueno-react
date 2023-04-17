import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import sendRequest from '../../utilities/send-request';
import axios from 'axios';
// import { useAuth } from '../../path/to/useAuth'

function NewItemForm() {
  const [formData, setformData] = useState({
    name: '',
    category: '',
    price: '',
    image: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsSubmitting(true);
      const response = await sendRequest('/api/items/', 'POST', formData);
      console.log(response.data); // The newly created item
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  function handleAddSubmit(evt) {
    setformData({...formData, [evt.target.name]:evt.target.value})
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" onChange={handleAddSubmit} />
     

      <label htmlFor="category">Category</label>
      <textarea id="category" name="category" onChange={handleAddSubmit} />
     

      <label htmlFor="price">Price</label>
      <input type="number" id="price" name="price" onChange={handleAddSubmit} />
     

      <label htmlFor="image">Image</label>
      <input type="file" id="image" name="image" onChange={handleAddSubmit} />
      

      <button type="submit">
        ADD ITEM
      </button>
    </form>
  );
}

export default NewItemForm;
