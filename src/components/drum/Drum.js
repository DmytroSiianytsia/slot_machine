import React from 'react';
import { Card } from '../card/Card';

export function Drum(props) {
  const listCards = [];  
  const cards = ['ace', 'crab', 'dolphine', 'fish', 'fishes', 'jack',
    'king', 'manta', 'nine', 'pearl', 'queen', 'sea-horse', 'ten'];

  function getRandomCard(numberOfCards) {    
    return cards.splice([Math.floor(Math.random() * numberOfCards)], 1)    
  }  

  for (let i = 0; i < 13; i++) {
    listCards.push(<Card someCard={getRandomCard(cards.length)} key={i} />)
  }

  return (
    <div className={props.className}>
      {listCards} 
    </div>
  )
}
