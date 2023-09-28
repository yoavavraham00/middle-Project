import React, { useState } from 'react';

export function CreateCard({ onSave }) {
  const [card, setCard] = useState({
    title: '',
    description: '',
    imageSrc: '',
    // Add other card properties here
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCard({ ...card, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setCard({ ...card, imageSrc: event.target.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(card);
    setCard({
      title: '',
      description: '',
      imageSrc: '',
      // Reset other card properties
    });
  };

  return (
    <div>
      <h2>Create Business Card</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={card.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={card.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <button type="submit">Create Card</button>
      </form>
    </div>
  );
}


