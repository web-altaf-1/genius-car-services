import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {name , img , description , price} = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>This is service {name}</h2> 
            <p>Price : {price}</p>
            <p><small>{description}</small></p>
            <button>Book Now !! </button>
        </div>
    );
};

export default Service;