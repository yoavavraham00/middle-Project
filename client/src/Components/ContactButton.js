// import React from 'react';
// import Button from 'react-bootstrap/Button';

// export function ContactButton({ card }) {
//   const handleContact = () => {
//     // Prepare the email link
//     const subject = encodeURIComponent(`Regarding ${card.title}`);
//     const body = encodeURIComponent(`Hello, I'm interested in your ${card.title} business card.`);

//     // Generate the email link
//     const emailLink = `mailto:${card.email}?subject=${subject}&body=${body}`;

//     // Open the user's default email client
//     window.location.href = emailLink;
//   };

//   return (
//     <Button variant="link" className="action-icon" onClick={handleContact}>
//       <i className="fas fa-phone"></i>
//     </Button>
//   );
// }

///////////////////////////////////////////////////////////////////////////

import React from 'react';
import Button from 'react-bootstrap/Button';

export function ContactButton({ card }) {
  const handleContact = () => {
    // Implement your contact functionality here, e.g., sending an email
    window.location.href = `mailto:${card.email}`;
  };

  return (
    <Button variant="link" className="action-button" onClick={handleContact}>
      <FaPhone />
    </Button>
  );
}

