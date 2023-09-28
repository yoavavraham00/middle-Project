import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function CardSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Call the onSearch function with the search term
    onSearch(searchTerm);
  };

  return (
    <Form inline>
      <Form.Control
        type="text"
        placeholder="Search cars..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button variant="outline-success" onClick={handleSearch}>
        Search
      </Button>
    </Form>
  );
}
