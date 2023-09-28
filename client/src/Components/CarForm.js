// import React, { useState } from 'react';
// import axios from 'axios';

// export function CarForm() {
//   const [model, setModel] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [image, setImage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const newCarData = {
//       model,
//       description,
//       price: parseFloat(price),
//       image,
//     };

//     try {
//       await axios.post('/api/cars', newCarData);
//       console.log('Car data saved successfully');
//     } catch (error) {
//       console.error('Error saving car data:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {/* Input fields for model, description, price, and image */}
//       {/* Add submit button */}
//     </form>
//   );
// }