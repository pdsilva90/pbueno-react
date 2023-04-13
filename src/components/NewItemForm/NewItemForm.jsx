import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function NewItemForm() {
  const { register, handleSubmit, errors } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      const response = await axios.post('/api/items', data);
      console.log(response.data); // The newly created item
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" ref={register({ required: true })} />
      {errors.name && <span>This field is required</span>}

      <label htmlFor="category">Category</label>
      <textarea id="category" name="category" ref={register({ required: true })} />
      {errors.category && <span>This field is required</span>}

      <label htmlFor="price">Price</label>
      <input type="number" id="price" name="price" ref={register({ required: true })} />
      {errors.price && <span>This field is required</span>}

      <label htmlFor="image">Image</label>
      <input type="file" id="image" name="image" ref={register({ required: true })} />
      {errors.image && <span>This field is required</span>}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Creating...' : 'Create Item'}
      </button>
    </form>
  );
}

export default NewItemForm;
