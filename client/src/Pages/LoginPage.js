// import React from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Container from 'react-bootstrap/Container';

// export function LoginPage() {
//   return (
//     <Container className="text-center mt-5">
//       <h1 className="mb-4"> Welcome Back Friend </h1>
//       <DropdownButton
//         id="dropdown-basic-button"
//         title="Sign In"
//         className="mb-4"
//       >
//         <Dropdown.Item href="#/action-3">Sign In</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">Sign In As business </Dropdown.Item>
//         <Dropdown.Item href="#/action-3">Sign In As Admin </Dropdown.Item>
//         </DropdownButton>
//     </Container>
    
//   );
// }

////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from 'react';
// import axios from 'axios';
// import './LoginPage.css';

// const LoginPage = () => {
//   const [loginData, setLoginData] = useState({
//     email: '',
//     password: '',
//   });

//   const [loginError, setLoginError] = useState('');

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/login', loginData); // Replace with your API endpoint
//       const { token } = response.data;
//       localStorage.setItem('authToken', token);
//       // Redirect to protected route or handle as needed
//     } catch (error) {
//       setLoginError('Invalid email or password'); // Display error message
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h2 className="login-header">Login</h2>
//         {loginError && <p className="login-error">{loginError}</p>}
//         <form className="login-form" onSubmit={handleLogin}>
//           <div className="form-group">
//             <label className="label">Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={loginData.email}
//               onChange={handleInputChange}
//               className="login-input"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label className="label">Password:</label>
//             <input
//               type="password"
//               name="password"
//               value={loginData.password}
//               onChange={handleInputChange}
//               className="login-input"
//               required
//             />
//           </div>
//           <button type="submit" className="login-button">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

////////////////////////////////////////////////////////////////

import React, { useState } from 'react';
import axios from 'axios';
import './LoginPage.css';

export function LoginPage  () {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [loginError, setLoginError] = useState('');
  
  // Define state variables for form errors
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validation using the Joi validation rules
    const { email, password } = loginData;
    const errors = {};
    
    // Validate email
    if (!/^[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9_\-\.]+\.[a-zA-Z]{2,5}$/.test(email)) {
      errors.email = 'Invalid email ';
    }
    
    // Validate password
    if (!/^(?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20}$/.test(password)) {
      errors.password = 'Invalid password ';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      try {
        const response = await axios.post('/api/login', loginData); // Replace with your API endpoint
        const { token } = response.data;
        localStorage.setItem('authToken', token);
        // Redirect to protected route or handle as needed
      } catch (error) {
        setLoginError('Invalid email or password'); // Display error message
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-header">Login</h2>
        {loginError && <p className="login-error">{loginError}</p>}
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label className="label">Email:</label>
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleInputChange}
              className={`login-input ${formErrors.email && 'error'}`}
              required
            />
            {formErrors.email && (
              <span className="error-message">{formErrors.email}</span>
            )}
          </div>
          <div className="form-group">
            <label className="label">Password:</label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleInputChange}
              className={`login-input ${formErrors.password && 'error'}`}
              required
            />
            {formErrors.password && (
              <span className="error-message">{formErrors.password}</span>
            )}
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};





