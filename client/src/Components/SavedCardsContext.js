import React, { createContext, useContext, useState } from 'react';

const SavedCardsContext = createContext();

export const useSavedCards = () => {
  return useContext(SavedCardsContext);
};

export const SavedCardsProvider = ({ children }) => {
  const [savedCards, setSavedCards] = useState([]);

  const saveCard = (card) => {
    // Implement logic to save the card to the savedCards array
    setSavedCards([...savedCards, card]);
  };

  const unsaveCard = (cardId) => {
    // Implement logic to remove the card from the savedCards array
    setSavedCards(savedCards.filter((card) => card._id !== cardId));
  };

  return (
    <SavedCardsContext.Provider value={{ savedCards, saveCard, unsaveCard }}>
      {children}
    </SavedCardsContext.Provider>
  );
};