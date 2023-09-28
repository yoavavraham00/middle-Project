// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// export function CardDetailsPage() {
//   const { cardId } = useParams(); // Get cardId from route parameter

//   // State to hold card data
//   const [card, setCard] = useState(null);

//   useEffect(() => {
//     // Fetch card data based on cardId
//     const fetchCardData = async () => {
//       try {
//         const response = await fetch(`http://localhost:8080/cards/${cardId}`); // Assuming correct endpoint
//         const data = await response.json();
//         setCard(data);
//       } catch (error) {
//         console.error('Error fetching card data:', error);
//       }
//     };
//     fetchCardData();
//   }, [cardId]);

//   if (!card) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="card-details">
//       <h2>Card Details</h2>
//       <div>
//         <h3>{card.title}</h3>
//         <p>{card.subtitle}</p>
//         <p>{card.description}</p>
//         <p>{card.phone}</p>
//         <p>{card.email}</p>
//         <p>{card.web}</p>
//         {/* Display other card data here */}
//       </div>
//     </div>
//   );
// }

////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function CardDetails() {
  const { cardId } = useParams(); // Get cardId from route parameter

  // State to hold card data
  const [card, setCard] = useState(null);

  useEffect(() => {
    // Fetch card data based on cardId
    const fetchCardData = async () => {
      try {
        const response = await fetch(`/api/cards/${cardId}`); // Use the proxy route
        const data = await response.json();
        setCard(data);
      } catch (error) {
        console.error('Error fetching card data:', error);
      }
    };
    fetchCardData();
  }, [cardId]);

  if (!card) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card-details">
      <h2>Card Details</h2>
      <div>
        <h3>{card.title}</h3>
        <p>{card.subtitle}</p>
        <p>{card.description}</p>
        <p>{card.phone}</p>
        <p>{card.email}</p>
        <p>{card.web}</p>
        {/* Display other card data here */}
      </div>
    </div>
  );
}