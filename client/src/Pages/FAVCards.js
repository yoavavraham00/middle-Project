// import React, { useState, useEffect } from 'react';
// import BusinessCard from '../Components/BusinessCard';
// import axios from 'axios';

// export function SavedCardsPage() {
//   const [savedCards, setSavedCards] = useState([]);

//   useEffect(() => {
//     async function fetchSavedCards() {
//       try {
//         // Fetch the user's saved cards from your backend (you might need to send user authentication tokens here)
//         const apiUrl = 'http://localhost:8080/saved-cards'; // Update the URL with the correct endpoint
//         const response = await axios.get(apiUrl);
//         setSavedCards(response.data);
//       } catch (error) {
//         console.error('Error fetching saved cards:', error);
//       }
//     }

//     fetchSavedCards();
//   }, []);

//   return (
//     <div>
//       <h1>Your Saved Cards</h1>
//       <div className="cards-page">
//         {savedCards.map((card) => (
//           <BusinessCard
//             key={card._id}
//             card={card}
//             isLoggedIn={true} // You can set this based on user login status
//             isAdmin={false}  // You can set this based on user role
//             isBusiness={false} // You can set this based on user role
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

///////////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from 'react';
import BusinessCard from '../Components/BusinessCard';
import axios from 'axios';

export function SavedCardsPage() {
  const [savedCards, setSavedCards] = useState([]);

  useEffect(() => {
    async function fetchSavedCards() {
      try {
        // Fetch the user's saved cards from your backend (you might need to send user authentication tokens here)
        const apiUrl = 'http://localhost:8080/savedcards'; // Update the URL with the correct endpoint
        const response = await axios.get(apiUrl);
        setSavedCards(response.data);
      } catch (error) {
        console.error('Error fetching saved cards:', error);
      }
    }

    fetchSavedCards();
  }, []);

  return (
    <div>
      <h1>Your Saved Cards</h1>
      <div className="cards-page">
        {savedCards.map((card) => (
          <BusinessCard
            key={card._id}
            card={card}
            isLoggedIn={true} // You can set this based on user login status
            isAdmin={false}  // You can set this based on user role
            isBusiness={false} // You can set this based on user role
          />
        ))}
      </div>
    </div>
  );
}
