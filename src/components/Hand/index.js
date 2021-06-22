import React, { useEffect, useState } from 'react';
import './styles.css';

import Card from '../Card';

function Hand({ url, title, isTable }) {
  const fetchCards = async (url) => {
    try {
      const response = await fetch(url);
      const handData = await response.json();
      const { hand } = handData;
      setCurrentCards(hand.cards);
    } catch (err) {
      console.warn(err);
    }
  };
  const [currentCards, setCurrentCards] = useState([]);

  useEffect(() => {
    fetchCards(url);
  }, [url]);

  return (
    <div className="hand-container">
      <h1>{title}</h1>
      <div className="player-area">
        <ul>
          {currentCards.map((cardValue, index) => (
            <Card
              key={`${title}-card-${index}`}
              cardValue={cardValue}
              isTable={isTable}
              index={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Hand;
