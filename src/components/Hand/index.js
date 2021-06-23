import React, { useEffect, useState } from 'react';
import { GiVisoredHelm, GiCrownedSkull } from 'react-icons/gi';
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

  const playerIcon = isTable ? <GiCrownedSkull /> : <GiVisoredHelm />;

  return (
    <div className="hand-container">
      <div className="title-container">
        {playerIcon}
        <h1>{title}</h1>
      </div>
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
