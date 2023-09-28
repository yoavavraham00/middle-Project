import React from 'react';
import BusinessCard from './BusinessCard'; // Import your BusinessCard component

function BusinessCardList({ cards }) {
  // This component will receive an array of card data as a prop
  // Use map to iterate over the cards and render BusinessCard components

  return (
    <div className="business-card-list">
      {cards.map((card) => (
        <BusinessCard
          key={card._id}
          card={card}
          isAdmin={false}
          isBusiness={true}
          isLoggedIn={true}
          // Assuming that the image filename is stored in card.imageSrc
          // You can create the image URL using your directory structure
          // For example, if your images are in the public directory
          // and your card.imageSrc is the filename, you can use:
          // imageSrc={`./CardImages/${card.imageSrc}`}
          imageSrc={`./CardImages/${card.imageSrc}`}
        />
      ))}
    </div>
  );
}

export default BusinessCardList;
