import React, { useEffect } from 'react';
import axios from 'axios';

const ProtectedData = () => {
  useEffect(() => {
    const authToken = localStorage.getItem('authToken');

    axios.get('/api/protected', {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
    .then(response => {
      // Handle the response data
    })
    .catch(error => {
      // Handle errors
    });
  }, []);

  return (
    <div>
      {/* Your component's content */}
    </div>
  );
};

export default ProtectedData;