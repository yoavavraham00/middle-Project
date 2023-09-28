// import React from 'react';
// import Button from 'react-bootstrap/Button';

// export function SaveButton() {
//   return (
//     <Button variant="link" className="action-icon">
//       <i className="fas fa-heart"></i>
//     </Button>
//   );
// }

////////////////////////////////////////////////////////////////

import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { useSavedCards } from './SavedCardsContext'; // Import the context

export function SaveButton({ card }) {
  const { savedCards, saveCard, unsaveCard } = useSavedCards();

  const isSaved = savedCards.some((savedCard) => savedCard._id === card._id);

  const handleSaveClick = () => {
    if (isSaved) {
      unsaveCard(card._id);
    } else {
      saveCard(card);
    }
  };

  return (
    <Button
      variant="link"
      className={`action-button ${isSaved ? 'saved' : ''}`}
      onClick={handleSaveClick}
    >
      {/* Render your save icon here */}
    </Button>
  );
}