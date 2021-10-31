import React from 'react';
import './Card.scss';

export const Card = (props) => {
    const {img, name, description} = props;
    return (
        <>
            <div className='card'>
                <img className='card-image' src={img} alt={name}/>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </>
    );
};
