import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaHeart, FaPhone, FaTrash, FaEdit } from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios';
import { ContactButton } from './ContactButton';
import { EditButton } from './EditButton';
import { SaveButton } from './SaveButton';
import { DeleteButton } from './DeleteButton';
import './BusinessCard.css';

function BusinessCard({ card, isAdmin, isBusiness, isLoggedIn }) {
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveClick = async () => {
    try {
      if (isLoggedIn) {
        const apiUrl = '/savedCards';
        await axios.post(apiUrl, { cardId: card._id });
        setIsSaved(true);
      } else {
        // Handle the case where the user is not logged in
        // You might want to show a message or redirect to the login page
      }
    } catch (error) {
      console.error('Error saving card:', error);
    }
  };

  const handleContactClick = () => {
    console.log('Contacting:', card.email);
  };

  const handleDeleteClick = () => {
    if (isAdmin) {
      // Implement deleting the card (only for admin)
    }
  };

  const handleEditClick = () => {
    if (isAdmin) {
      // Implement editing the card (only for admin)
    }
  };

  return (
    <Card className="business-card">
      <Card.Img className="card-image" variant="top" src={"./CardImages/car15.jpeg"} alt="Card Image" />
      <Card.Body className="card-details">
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>{card.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {card.listItems && card.listItems.length > 0 ? (
          card.listItems.map((item, index) => (
            <ListGroup.Item key={index}>{item}</ListGroup.Item>
          ))
        ) : (
          <ListGroup.Item>No items to display</ListGroup.Item>
        )}
      </ListGroup>
      <Card.Body className="card-actions">
        <div>
          {isLoggedIn && (
            <FaHeart
              className={`action-icon1 ${isSaved ? 'saved' : ''}`}
              onClick={handleSaveClick}
            />
          )}
          {isBusiness && isLoggedIn && (
            <FaEdit className="action-icon3" onClick={handleEditClick} />
          )}
          {isAdmin && (
            <FaTrash className="action-icon4" onClick={handleDeleteClick} />
          )}
          <FaPhone className="action-icon2" onClick={handleContactClick} />
        </div>
      </Card.Body>
    </Card>
  );
}

export default BusinessCard;


/////////////////////////////////////////////////////////////////////

// import React from 'react';
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import { FaHeart, FaPhone, FaTrash, FaEdit } from 'react-icons/fa';
// import { useState } from 'react'; // Import useState from React
// import axios from 'axios'; 
// import { ContactButton } from './ContactButton';
// import { EditButton } from './EditButton';
// import { SaveButton } from './SaveButton';
// import { DeleteButton } from './DeleteButton';
// import './BusinessCard.css';

// function BusinessCard({ card, isAdmin, isBusiness, isLoggedIn }) {
//   const [isSaved, setIsSaved] = useState(false); // Add state to track saved status

//   const handleSaveClick = async () => {
//     try {
//       if (isLoggedIn) {
//         const apiUrl = '/savedCards'; // Update the URL with the correct endpoint
//         // Send a POST request to save the card
//         await axios.post(apiUrl, { cardId: card._id });
//         // Handle success or provide feedback to the user
//         setIsSaved(true); // Update the saved status in state
//       } else {
//         // Handle the case where the user is not logged in
//         // You might want to show a message or redirect to the login page
//       }
//     } catch (error) {
//       console.error('Error saving card:', error);
//     }
//   };

//   const handleContactClick = () => {
//     // Implement contacting the person using the provided contact information
//     console.log('Contacting:', card.email);
//   };

//   const handleDeleteClick = () => {
//     if (isAdmin) {
//       // Implement deleting the card (only for admin)
//     }
//   };

//   const handleEditClick = () => {
//     if (isAdmin) {
//       // Implement editing the card (only for admin)
//     }
//   };

//   return (
//     <Card className="business-card">
//       <Card.Img className="card-image" variant="top" src={card.imageSrc} alt="Card Image" />
//       <Card.Body className="card-details">
//         <Card.Title>{card.title}</Card.Title>
//         <Card.Text>{card.description}</Card.Text>
//       </Card.Body>
//       <ListGroup className="list-group-flush">
//         {card.listItems && card.listItems.length > 0 ? (
//           card.listItems.map((item, index) => (
//             <ListGroup.Item key={index}>{item}</ListGroup.Item>
//           ))
//         ) : (
//           <ListGroup.Item>No items to display</ListGroup.Item>
//         )}
//       </ListGroup>
//       <Card.Body className="card-actions">
//         <div>
//           {isLoggedIn && (
//             <FaHeart
//               className={`action-icon1 ${isSaved ? 'saved' : ''}`}
//               onClick={handleSaveClick}
//             />
//           )}
//           {isBusiness && isLoggedIn && (
//             <FaEdit className="action-icon3" onClick={handleEditClick} />
//           )}
//           {isAdmin && (
//             <FaTrash className="action-icon4" onClick={handleDeleteClick} />
//           )}
//           <FaPhone className="action-icon2" onClick={handleContactClick} />
//         </div>
//       </Card.Body>
//     </Card>
//   );
// }

// export default BusinessCard;