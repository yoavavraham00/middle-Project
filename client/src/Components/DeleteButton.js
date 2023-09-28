// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import axios from 'axios';

// export function DeleteButton({ cardId }) {
//   const handleDeleteClick = async () => {
//     try {
//       const apiUrl = `http://localhost:8080/cards/${cardId}`; // Update with the correct URL
//       await axios.delete(apiUrl);
//       // Implement a way to update the UI or state to remove the deleted card
//     } catch (error) {
//       console.error('Error deleting card:', error);
//     }
//   };

//   return (
//     <Button variant="link" className="action-button delete-button" onClick={handleDeleteClick}>
//       <i className="fas fa-trash"></i>
//     </Button>
//   );
// }

//////////////////////////////////////////////////////////////////

import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaTrash } from 'react-icons/fa'; // Make sure this import is present
import axios from 'axios';

export function DeleteButton({ cardId }) {
  const handleDeleteClick = async () => {
    try {
      // Implement delete functionality using axios
      await axios.delete(`your_delete_endpoint/${cardId}`);
      // Optionally update state to remove the card from view
    } catch (error) {
      console.error('Error deleting card:', error);
    }
  };

  return (
    <Button variant="link" className="action-button" onClick={handleDeleteClick}>
      <FaTrash />
    </Button>
  );
}