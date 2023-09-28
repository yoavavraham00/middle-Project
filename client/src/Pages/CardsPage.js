import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BusinessCard from '../Components/BusinessCard'; 
import './CardsPage.css'; // Import the CSS file

export function CardsPage() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchCards() {
      try {
        const apiUrl = 'http://localhost:8080/cards'; // Update the URL with the correct port
        const response = await axios.get(apiUrl);
        setCards(response.data);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    }

    fetchCards();
  }, []);

  return (
    <div className="cards-page">
      {cards.map((card) => (
        <BusinessCard key={card._id} card={card} isAdmin={false} isBusiness={true} isLoggedIn={true}  />
      ))}
    </div>
  );
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////




