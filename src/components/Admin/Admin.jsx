
import React from 'react';

function Admin() {
  return (
    <div>
      <h1>Welcome, Admin!</h1>
      <p>You can access the Admin dashboard here.</p>
    </div>
  );
}

export default Admin;








//import React, { useState, useEffect } from 'react';
// import { Button, Table } from 'react-bootstrap';
// import axios from 'axios';

// export default function Admin() {
//   const [items, setItems] = useState([]);
//   const [itemToEdit, setItemToEdit] = useState({});
//   const [itemToDelete, setItemToDelete] = useState({});

//   useEffect(() => {
//     axios.get('/api/items')
//       .then(res => setItems(res.data))
//       .catch(err => console.error(err));
//       alert('Failed to fetch items');
//   }, []);

//   const handleAddSubmit = (event) => {
//     event.preventDefault();
//     const newItem = {
//       name: event.target.elements.name.value,
//       category: event.target.elements.category.value,
//       price: event.target.elements.price.value,
//     };
//     axios.post('/api/items', newItem)
//       .then(res => {
//         setItems([...items, res.data]);
//       })
//       .catch(err => console.error(err));
//       alert('Failed to add item');
//   };

//   const handleEditSubmit = (event) => {
//     event.preventDefault();
//     const updatedItem = {
//       ...itemToEdit,
//       name: event.target.elements.name.value,
//       category: event.target.elements.category.value,
//       price: event.target.elements.price.value,
//     };
//     axios.put(`/api/items/${itemToEdit.id}`, updatedItem)
//       .then(res => {
//         const index = items.findIndex(i => i.id === res.data.id);
//         const newItems = [...items];
//         newItems[index] = res.data;
//         setItems(newItems);
//         // setShowEditModal(false);
//       })
//       .catch(err => console.error(err));
//       alert('Failed to update item');
//   };

//   const handleDeleteSubmit = () => {
//     axios.delete(`/api/items/${itemToDelete.id}`)
//       .then(res => {
//         const newItems = items.filter(i => i.id !== res.data.id);
//         setItems(newItems);
//         // setShowDeleteModal(false);
//       })
//       .catch(err => console.error(err));
//       alert('Failed to delete item');
//   };
//   const confirmDelete = () => {
//     if (window.confirm(`Are you sure you want to delete ${itemToDelete.name}?`)) {
//     handleDeleteSubmit();
//     }
//     };

//   return (
//     <div>
//       <Button variant="primary" >Add Item</Button>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Category</th>
//             <th>Price</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {items.map(item => (
//               <tr key={item.id}>
//               <td>{item.name}</td>
//               <td>{item.category}</td>
//               <td>{item.price}</td>
//               <td>
//                 <Button variant="secondary" onClick={() => handleEditSubmit(item)}>Edit</Button>
//                 <Button variant="danger" onClick={() => handleDeleteSubmit(item)}>Delete</Button>
//               </td>
//               </tr>
//             ))};
//         </tbody>
//        </Table>
//     </div>
// )}