// import React, { useState, useEffect } from 'react';
// import Carousel from 'react-bootstrap/Carousel';

// export function HomePage() {
//   const [cars, setCars] = useState([]);

//   useEffect(() => {
//     // Fetch car data from the server
//     fetch('/api/cars') // Update the API endpoint to match your server route
//       .then(response => response.json())
//       .then(data => setCars(data))
//       .catch(error => console.error('Error fetching car data:', error));
//   }, []);

//   return (
//     <div>
//       <h1>Welcome to Yoav Used Car's Palace</h1>
//       <Carousel>
//         {cars.map(car => (
//           <Carousel.Item key={car._id}>
//             <img
//               className="d-block w-100"
//               src={`/Client/public/carImages/${car.imageFileName}`}
//               alt={car.model}
//             />
//             <Carousel.Caption>
//               <h3>{car.model}</h3>
//               <p>{car.description}</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </div>
//   );
// }

// /////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './HomePage.css';

export function HomePage() {
  // Assuming your CarImage directory contains image filenames
  const carImageFilenames = [
    'car1.jpeg',
    'car2.jpeg',
    'car3.jpeg',
    'car4.jpeg',
    'car5.jpeg',
    'car6.jpeg',
    'car7.jpeg',
    'car8.jpeg',
    'car9.jpeg',
    'car10.jpeg',
    // Add more filenames here
  ];

  return (
    <>
    <div className='welcome'> 
       <br></br>
       <h1>Welcome to Yoav Used Car's Palace</h1>
       <p style={{ fontSize: '18px', marginBottom: '20px' }}>
        Explore our wide selection of high-quality pre-owned vehicles.<br></br>
        Whether you're looking for a compact car, a rugged SUV, or a powerful truck,<br></br> 
        we have the perfect vehicle to match your needs.<br></br> 
        Our experienced team is here to assist you in finding the right car at the best price.<br></br>
        Only here at Yoav Used Car's Palace you will find the best deals on the best cars.<br></br>
        And only here you can create your own account to show your car and to save your favorite cars.<br></br>
        Visit our showroom today and drive away in the car of your dreams!
      </p>
    <div className="carousel-container">
      <div className="carousel-content">
        <Carousel>
          {carImageFilenames.map((filename, index) => (
            <Carousel.Item key={index} interval={1000}>
              <img
                className="carousel-image"
                src={`./CardImages/${filename}`}
                alt={`Slide ${index + 1}`}
              />
              <Carousel.Caption className="carousel-caption">
                <h3>{`Slide ${index + 1} label`}</h3>
                <p>{`Lorem ipsum dolor sit amet ${index + 1}.`}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
    </div>
    </>
  );
}























/////////////////////////////////////////////////////////////////

