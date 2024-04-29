import React from 'react';
import image1 from './image1.png'; // Importing image1

const Home = () => {
  return (
    <div className='Homepage'>
      <div className='leftSide'>
        <h1>MAKE YOUR</h1>
        <h1 className='BodyShape'>BODY SHAPE</h1>
        <h1>A GUIDE FOR</h1>
        <h1>YOUR PUMP</h1>
        <button>
                <b>Get Started</b>
                <i class="fa-solid fa-arrow-right"></i>
              </button>
      </div>
      <div className='RightSide'>
        <div className="parallelogram"></div>
        {/* Use curly braces and import image1 variable */}
        <div class="image" data-aos="fade-in">
                <img class="rightIMG" src={image1}/>
              </div>
      </div>
    </div>
  );
}

export default Home;
