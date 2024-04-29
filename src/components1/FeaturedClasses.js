import React from 'react'
import './Feature.css'

function FeaturedClasses(props) {
  return (
    <div className='box2'>
        <div className="featured-class">
      <img src={props.imageUrl} alt="Featured Class" />
      {/* <p>{content}</p> */}
    </div>
    </div>
  
  );
}
 
export default FeaturedClasses
