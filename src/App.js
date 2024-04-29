import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import FeaturedClasses from './components1/FeaturedClasses';
import BMI from './components1/BMI';
import Workout from './components1/Workout';
import Home from './components1/Home';
import Button from './components1/Button';
import PriceBox from './components1/PriceBox';
import image3 from './images/image3.jpeg';
import image4 from './images/image4.avif';
import image5 from './images/image5.avif';
import image6 from './images/image6.jpg';
import image7 from './images/image7.jpg';
import pricing1 from './images/pricing1.png';
import pricing2 from './images/pricing2.png';
import pricing3 from './images/pricing3.png';
import VideoPlaylist from './components2/VideoPlaylist'

function App() {
  const boxes = [
    { imageUrl: image3, content: 'Content for box 1' },
    { imageUrl: image4, content: 'Content for box 2' },
    { imageUrl: image5, content: 'Content for box 3' },
    { imageUrl: image6, content: 'Content for box 3' },
    { imageUrl: image7, content: 'Content for box 3' }
  ];

  const priceBoxes = [
    { imageUrl1: pricing1, title: 'BASIC PACKAGE', price: '$120',content1:'' },
    { imageUrl1: pricing2, title: 'PREMIUM PACKAGE', price: '$240' },
    { imageUrl1: pricing3, title: 'DIAMOND PACKAGE', price: '$420' }
  ];

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FeaturedClasses" element={<FeaturedClassesPage />} />
        <Route path="/PriceBox" element={<PriceBoxPage />} />
        <Route path="/BMI" element={<BMI />} />
        <Route path="/Workout" element={<WorkoutWithVideo />} /> {/* Render Workout component with video */}
        <Route path="/Button" element={<Button />} />
      </Routes>
    </>
  );

  function WorkoutWithVideo() {
    return (
      <>
        <Workout />
        <VideoPlaylist /> {/* Render VideoPlaylist component here */}
      </>
    );
  }

  function FeaturedClassesPage() {
    return (
      <div>
        {/* Dynamically render FeaturedClasses */}
        {boxes.map((box, index) => (
          <div className='boxm' key={index}>
            <FeaturedClasses imageUrl={box.imageUrl} content={box.content} />
          </div>
        ))}
      </div>
    );
  }

  function PriceBoxPage() {
    return (
      <div className="container4">
        <div className="container4-heading" data-aos="fade-in">
          <h2>OUR PLANS</h2>
        </div>

        <div className="price-boxes">
          {priceBoxes.map((box, index) => (
            <div className={`pb${index + 1}`} key={index} data-aos="flip-left">
              <PriceBox imageUrl={box.imageUrl1} title={box.title} price={box.price} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
