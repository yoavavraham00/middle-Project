import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export function EditButton() {
  
  const { cardId } = useParams(); // Get cardId from route parameter
  const  handleEditClick = () => {
  return (
    <Link to={`/edit/${cardId}`}>
      <Button variant="link" className="action-icon">
        <i className="fas fa-pencil-alt"></i>
      </Button>
    </Link>
  );
}
}