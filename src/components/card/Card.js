import React from 'react';
import './card.css';

export function Card({ someCard }) {
  return (
    <div className='card'>
      <img
        src={`./img/${someCard}.jpg`}
        alt={someCard}
        className='card__img'
      />
    </div>
  )
}
