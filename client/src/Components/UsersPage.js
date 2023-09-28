import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get('http://localhost:3000/api/users'); // Update the URL
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className="users-page">
      {users.map((user) => (
        <div key={user._id}>
          <h2>{user.firstName} {user.lastName}</h2>
          <p>Email: {user.email}</p>
          {/* Display other user data here */}
        </div>
      ))}
    </div>
  );
}