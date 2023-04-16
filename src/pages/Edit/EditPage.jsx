import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import sendRequest from '../../utilities/send-request';

function EditPage() {
  const [formData, setformData] = useState({
    name: '',
    category: '',
    price: '',
    image: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  let {id}=useParams();
  const navigate = useNavigate();

  useEffect(function() {
    async function getItem() {
        let itemToEdit = await sendRequest(`/api/items/${id}`);
        if(itemToEdit) {
    setformData({ 
      name: itemToEdit.name || '',
      category: itemToEdit.category || '',
      price: itemToEdit.price || '',
     });
     console.log(setformData)
}
    }
getItem();
}, []);


  const onSubmit = async () => {
    try {
      setIsSubmitting(true);
      const response = await sendRequest(`/api/items/${id}`, 'PUT', formData);
      console.log(response.data); // The newly created item
      navigate('/items');
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  function handleChange(evt) {
    setformData({...formData, [evt.target.name]:evt.target.value})
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
     

      <label htmlFor="category">Category</label>
      <textarea id="category" name="category" value={formData.category} onChange={handleChange} />
     

      <label htmlFor="price">Price</label>
      <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} />
     

      <label htmlFor="image">Image</label>
      <input type="file" id="image" name="image" onChange={handleChange} />
      

      <button type="submit">
        UPDATE ITEM
      </button>
    </form>
  );
}

export default EditPage;
