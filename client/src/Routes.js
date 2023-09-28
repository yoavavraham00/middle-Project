import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { AboutPage } from './Pages/AboutPage';
import { CardsPage } from './Pages/CardsPage';
import { RegistrationPage } from './Pages/RegistrationPage';
import {LoginPage} from './Pages/LoginPage';
import { NavBarHeader } from './Components/NavBarHeader';
import { CardDetails } from './Components/CardDetails';
import BusinessCard from './Components/BusinessCard';
import { SavedCardsPage } from './Pages/FAVCards'; // Import the SavedCardsPage component
import { ProtectedRoute } from './ProtectedRoute';
import ProtectedData from './ProtectedDataComponent';

const ROUTES = {
  HOME: '/home',
  ABOUT: '/about',
  CARDS_PAGE: '/cards',
  CARDS_DETAILS: '/cards_details',
  BUSINESSCARD: '/businesscard',
  REGISTRATION: '/registration',
  LOGINPAGE: '/login',
  SAVED_CARDS: '/saved-cards', // Add a new route for SavedCardsPage
  PROTECTED_DATA: '/protected_data',
  PROTECTEDROUTE: '/protected route',
  // ... other route definitions
};

export function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.LOGINPAGE} element={<LoginPage />} />
      <Route element={<NavBarHeader />} />
      <Route path={ROUTES.SAVED_CARDS} element={<SavedCardsPage />} /> {/* Add route for SavedCardsPage */}
      <Route path="/*" element={<ProtectedContent />} />
    </Routes>
  );
}

function ProtectedContent() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.CARDS_PAGE} element={<CardsPage />} />
      <Route path={ROUTES.CARDS_DETAILS} element={<CardDetails />} />
      <Route path={ROUTES.BUSINESSCARD} element={<BusinessCard />} />
      <Route path={ROUTES.REGISTRATION} element={<RegistrationPage />} />
      <Route path={ROUTES.PROTECTED_DATA} element={<ProtectedData />} />
      <Route path={ROUTES.PROTECTEDROUTE} element={<ProtectedRoute />} />
    </Routes>
  );
}
/////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { HomePage } from './Pages/HomePage';
// import { AboutPage } from './Pages/AboutPage';
// import { CardsPage } from './Pages/CardsPage';
// import { RegistrationPage } from './Pages/RegistrationPage';
// import LoginPage from './Pages/LoginPage'; // Make sure to provide the correct path
// import { NavBarHeader } from './Components/NavBarHeader';
// import { CardDetailsPage } from './Components/CardDetailsPage';
// import ProtectedRoute from './ProtectedRoute'; // Import the ProtectedRoute component

// const ROUTES = {
//   HOME: '/home',
//   ABOUT: '/about',
//   CARDS_PAGE: '/cards',
//   CARDS_DETAILS: '/cards_details',
//   REGISTRATION: '/registration',
//   LOGINPAGE: '/login', // Update the route to lowercase
//   // ... other route definitions
// };

// export function AppRoutes({ isAuthenticated }) {
//   return (
//     <Routes>
//       <Route path={ROUTES.LOGINPAGE} element={<LoginPage />} /> {/* Public route */}
//       <Route element={<NavBarHeader />} /> {/* Always display the header */}
//       <ProtectedRoute path="/protected" element={<ProtectedContent />} isAuthenticated={isAuthenticated} />
//       {/* Define other public routes here */}
//       <Route path="/*" element={<ProtectedContent />} /> {/* Protected routes */}
//     </Routes>
//   );
// }


// // Create a component to wrap protected routes
// function ProtectedContent() {
//   return (
//     <>
//       <Route path={ROUTES.HOME} element={<HomePage />} />
//       <Route path={ROUTES.ABOUT} element={<AboutPage />} />
//       <Route path={ROUTES.CARDS_PAGE} element={<CardsPage />} />
//       <Route path={ROUTES.CARDS_DETAILS} element={<CardDetailsPage />} />
//       <Route path={ROUTES.REGISTRATION} element={<RegistrationPage />} />
//     </>
//   );
// }