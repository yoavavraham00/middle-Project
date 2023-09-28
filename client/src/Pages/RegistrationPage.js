// import React, { useState } from 'react';
// import './RegistrationPage.css';

// export function RegistrationPage() {
//   const [emailValid, setEmailValid] = useState(true);
//   const [passwordValid, setPasswordValid] = useState(true);

//   const validateEmail = (email) => {
//     setEmailValid(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email));
//   };

//   const validatePassword = (password) => {
//     setPasswordValid(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^])[A-Za-z\d@$!%*?&^]{8,}$/.test(password));
//   };

//   const handleEmailChange = (e) => {
//     const email = e.target.value;
//     validateEmail(email);
//   };

//   const handlePasswordChange = (e) => {
//     const password = e.target.value;
//     validatePassword(password);
//   };

//   return (
//     <div className="register-form">
//       <div className="register-form-header">
//         <br></br>
//         <h2>REGISTER FORM</h2>
//         <br></br>
//       </div>
//       <div className="form-row">
//       <div className="form-column">
//   <div className="form-group">
//     <label>First name:</label>
//     <input type="text" placeholder="First name" required />
//   </div>
//   <div className="form-group">
//     <label>Last name:</label>
//     <input type="text" placeholder="Last name" required />
//   </div>
//   <div className="form-group">
//     <label>Email:</label>
//     <input
//       type="email"
//       placeholder="Email"
//       onChange={handleEmailChange}
//       className={`form-group ${emailValid ? 'valid' : 'invalid'}`}
//       required
//     />
//     {!emailValid && <span className="validation-message">Invalid email</span>}
//   </div>
// </div>
//         <div className="form-column">
//           <div className="form-group">
//             <label>Middle name:</label>
//             <input type="text" placeholder="Middle name" />
//           </div>
//           <div className="form-group">
//             <label>Phone:</label>
//             <input type="tel" placeholder="Phone" />
//           </div>
//           <div className="form-group">
//             <label>Password:</label>
//             <input
//               type="password"
//               placeholder="Password"
//               onChange={handlePasswordChange}
//               className={passwordValid ? 'valid' : 'invalid'}
//               required
//             />
//             {!passwordValid && (
//               <span className="validation-message">
//                 Password must contain at least one uppercase letter, one lowercase letter, four numbers, and one special character.
//               </span>
//             )}
//           </div>
//         </div>
//       </div>
//       <hr></hr>
//       <div className="optional-fields">
//         <div className="form-table">
//           <div className="form-row">
//             <div className="form-group">
//               <label>Image URL:</label>
//               <input type="text" placeholder="Image URL" />
//             </div>
//             <div className="form-group">
//               <label>State:</label>
//               <input type="text" placeholder="State" />
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="form-group">
//               <label>City:</label>
//               <input type="text" placeholder="City" />
//             </div>
//             <div className="form-group">
//               <label>House Number:</label>
//               <input type="text" placeholder="House Number" />
//             </div>
//           </div>
//         </div>
//         <div className="form-table">
//           <div className="form-row">
//             <div className="form-group">
//               <label>Image alt:</label>
//               <input type="text" placeholder="Image alt" />
//             </div>
//             <div className="form-group">
//               <label>Country:</label>
//               <input type="text" placeholder="Country" />
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="form-group">
//               <label>Street:</label>
//               <input type="text" placeholder="Street" />
//             </div>
//             <div className="form-group">
//               <label>Zip:</label>
//               <input type="text" placeholder="Zip" />
//             </div>
//           </div>
//         </div>
//         <hr></hr>
//         <div className="form-row">
//           <div className="form-group">
//             <label className="sign-up-business-label">
//               <input type="checkbox" />
//               SignUp as Business
//             </label>
//           </div>
//         </div>
//       </div>
//       <hr></hr>
//       <div className="form-row buttons-row">
//   <button className="cancel-button">Cancel</button>
//   <button className="refresh-button">
//   <i className="fas fa-sync-alt"></i> Refresh
// </button>
// </div>
// <br></br>
// <div className="form-row">
// <button className="submit-button">Submit</button>
// </div>
//     </div>
//   );
// }

//////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RegistrationPage.css';

export function RegistrationPage() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    middleName: '', // Add other form fields here
    phone: '',
    imageURL: '',
    state: '',
    city: '',
    houseNumber: '',
    country: '',
    street: '',
    zip: '',
    signUpAsBusiness: false,
  });

  const [mandatoryFieldsFilled, setMandatoryFieldsFilled] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Define state variables for form errors
  const [formErrors, setFormErrors] = useState({});
  const handleInputChange = e => {
    const { name, value, type, checked } = e.target;

    switch (name) {
      case 'email':
        setFormErrors(prev => ({
          ...prev,
          email:
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) 
            ? '' : 'Email must meet the specified format'
        }))
        break;
      case 'password':
        setFormErrors(prev => ({
          ...prev,
          password:
           /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^])[A-Za-z\d@$!%*?&^]{8,}$/.test(value)
           ? '' : 'Password must meet the specified criteria'
        }))
        break;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

  };

  useEffect(() => {
    const allMandatoryFieldsFilled =
      document.querySelector('input[required]:invalid') === null;
    setMandatoryFieldsFilled(allMandatoryFieldsFilled);
  }, [formData]);

  // const handleInputChangeEmail = (e) => {
  //   const { name, value, type, checked } = e.target;

  //   if (name === 'email') {
  //     validateEmail(value); // Validate email when it changes
  //   }
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleInputChangePassword = (e) => {
  //   const { name, value, type, checked } = e.target;

  //   if (name === 'password') {
  //     validatePassword(value); // Validate password when it changes
  //   }
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(formErrors).filter(x => x).length > 0) {
      setSubmitMessage('');
      return;
    }

    try {
      const response = await axios.post('/users', formData);

      // Assuming your API returns a token upon successful registration
      const { token } = response.data;

      // Save the token to the server
      await axios.post('/users/models/Token', { token });

      setSubmitMessage('Form submitted successfully!');
    } catch (error) {
      setSubmitMessage('Registration failed. Please try again.');
    }
  };

  return (
    <div className="register-form">
      <div className="register-form-header">
        <br />
        <h2>REGISTER FORM</h2>
        <br />
      </div>
      <div className="form-row">
        <div className="form-column">
          <div className="form-group">
            <label>First name:</label>
            <input
              type="text"
              name="firstName"
              placeholder="Firstname"
              onChange={handleInputChange}
              required
            />
            {formErrors.firstName && (
              <span className="validation-message">
                {formErrors.firstName}
              </span>
            )}
          </div>
          <div className="form-group">
            <label>Last name:</label>
            <input
              type="text"
              name="lastName"
              placeholder="Lastname"
              onChange={handleInputChange}
              required
            />
            {formErrors.lastName && (
              <span className="validation-message">
                {formErrors.lastName}
              </span>
            )}
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
              className={`form-group ${!formErrors.email ? 'valid' : ''}`}
              required
            />
            {formErrors.email && (<>
              <div className="validation-message">{formErrors.email}</div>
              <span className="validation-message">
                email must be a valid email address and contain at least one @
              </span>
            </>)}
          </div>
        </div>
        <div className="form-column">
          <div className="form-group">
            <label>Middle name:</label>
            <input
              type="text"
              name="middleName"
              placeholder="Middle name"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleInputChange}
              className={!formErrors.password ? 'valid' : 'invalid'}
              required
            />
            {formErrors.password && ( <>
              <div className="validation-message">{formErrors.password}</div>
              <span className="validation-message">
                Password must contain at least one uppercase letter, one lowercase letter, four numbers, and one special character.
              </span>
              </>)}
          </div>
        </div>
      </div>
      <hr />
      <div className="optional-fields">
        <div className="form-table">
          <div className="form-row">
            <div className="form-group">
              <label>Image URL:</label>
              <input type="text" placeholder="Image URL" />
            </div>
            <div className="form-group">
              <label>State:</label>
              <input type="text" placeholder="State" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>City:</label>
              <input type="text" placeholder="City" />
            </div>
            <div className="form-group">
              <label>House Number:</label>
              <input type="text" placeholder="House Number" />
            </div>
          </div>
        </div>
        <div className="form-table">
          <div className="form-row">
            <div className="form-group">
              <label>Image alt:</label>
              <input type="text" placeholder="Image alt" />
            </div>
            <div className="form-group">
              <label>Country:</label>
              <input type="text" placeholder="Country" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Street:</label>
              <input type="text" placeholder="Street" />
            </div>
            <div className="form-group">
              <label>Zip:</label>
              <input type="text" placeholder="Zip" />
            </div>
          </div>
        </div>
        <hr></hr>
        <br></br>
        <div className="form-row">
          <div className="form-group">
            <label className="sign-up-business-label">
              <input className='checkbox' type="checkbox" />
              SignUp as Business
            </label>
          </div>
        </div>
      </div>
      <br></br>
      <hr />
      <div className="form-row buttons-row">
        <button className="cancel-button">Cancel</button>
        <button className="refresh-button">
          <i className="fas fa-sync-alt"></i> Refresh
        </button>
      </div>
      <div className="form-row">
        <button
          className="submit-button"
          disabled={!mandatoryFieldsFilled}
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>
        <p className="submit-message">{submitMessage}</p>
      </div>
    </div>
  );
}