import React from 'react';
import back from './back.webp';
import cardio from './cardio.jpeg';
import chest from './inner_chest_exercises_600x.webp';
import legs from './legs.jpg';
import shoulder from './shoulder.jpg';
import tricep from './tricep.webp';
const Workout = () => {
  const imageUrls = [
    { url: back, jsCode: () => { console.log('Clicked on Back image'); } },
    { url: cardio, jsCode: () => { console.log('Clicked on Back image'); } },
    { url: chest, jsCode: () => { console.log('Clicked on Back image'); } },
    { url: legs, jsCode: () => { console.log('Clicked on Back image'); } },
    { url: shoulder, jsCode: () => { console.log('Clicked on Back image'); } },
    { url: tricep, jsCode: () => { console.log('Clicked on Back image'); } },
  ];

  // Function to handle image click
  const handleImageClick = (jsCode) => {
    jsCode(); // Execute the provided JavaScript code
  };

  return (
    <div className="container2">
      <h3 className="heading2">SELECT YOUR<span>WORKOUT FOR TODAY</span></h3>
      <div className="grid">
        {/* Map through the imageUrls array to render img elements */}
        {imageUrls.map((imageUrl, index) => (
          <img
            key={index}
            className={`img${index + 1}`}
            src={imageUrl.url}
            alt={`Workout ${index + 1}`}
            onClick={() => handleImageClick(imageUrl.jsCode)}
          />
        ))}
      </div>
    </div>
  );
};

export default Workout;
