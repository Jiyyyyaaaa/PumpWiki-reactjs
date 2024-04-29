import React, { useState } from 'react';
import BMIImage from './BMI.PNG'; // Corrected import path

const BMI = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiResult, setBmiResult] = useState('');

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmiResult(`Your BMI is: ${bmi}`);
  };

  return (
    <div className="container6">
      <div className="Kartik-container1">
        <div className="wrapper1" data-aos="flip-right">
          <div className="wrapper3">
            <div className="calculate__content">
              <h1 className="section__title-border">CALCULATE YOUR BMI</h1>
              <p className="calculate__description">
                The body mass index (BMI) calculator calculates body mass index
                from your weight and height.
              </p>
            </div>

            <br />

            <p>
              Height in CM: <input type="text" id="height" value={height} onChange={(e) => setHeight(e.target.value)} /><br /><span
                className="error"
                id="height_error"
              ></span>
            </p>

            <p>
              Weight in KG: <input type="text" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} /><br /><span
                id="weight_error"
              ></span>
            </p>

            <button id="btnCalculate" onClick={calculateBMI}>
              Calculate<i className="fa-solid fa-arrow-right"></i>
            </button>
            <p id="output">{bmiResult}</p>
          </div>
        </div>
        <div className="parallelogram3"></div>
        <div className="image_right" data-aos="slide-left">
          {/* Corrected usage of the imported image */}
          <img src={BMIImage} alt="BMI" className="class" />
        </div>
      </div>
    </div>
  );
};

export default BMI;
