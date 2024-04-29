import React from 'react';
import { Link } from 'react-router-dom';
import pumpwikiLogo from './pumpwikiLogo.png';

const Navbar=()=>{
    return (    
        <div className='navBar'>
            <div className='Logo'>
                 <Link to='/'>
                    <img src={pumpwikiLogo} alt="pumpwiki" />
                 </Link>
            </div>
<div className='navbar1'>
<div className='Home'>
                <Link to="/">Home</Link>
            </div>
            <div className='Featured_classes'>
                <Link to="/Featured_classes">Featured Classes</Link>
        </div>
            <div className='PriceBox'>
                <Link to="/PriceBox">Price</Link>
            </div>
            <div className='BMI'>
                <Link to="/BMI">BMI</Link>
            </div>
            <div className='Workout'>
                <Link to="/Workout">Workout With Us</Link>
            </div>
            
</div>
<div className='Button'>
                <Link to="/Button">Become A Member</Link>
            </div>
        </div>
    )

}

export default Navbar;