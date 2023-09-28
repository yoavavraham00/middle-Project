import React from 'react';
import { Route, Navigate } from 'react-router-dom';

export function ProtectedRoute({ element: Element, ...rest }) {
  const isAuthenticated = !!localStorage.getItem('authToken'); // Change to check for token presence

  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Element /> : <Navigate to="/login" />} // Redirect to login if not authenticated
    />
  );
}





