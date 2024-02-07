import React, { useState } from 'react';
import './FlippableCard.css';
import Card from '../Card/Card';
import { CSSTransition } from 'react-transition-group';

const FlippableCard = () => {
  const [showFront, setShowFront] = useState(true);
  return (
    <div id="container-FlippableCard">
      <CSSTransition in={showFront} timeout={300} classNames="flip">
        <Card
          handleClick={() => {
            setShowFront((showFront) => !showFront);
          }}
        />
      </CSSTransition>
    </div>
  );
};

export default FlippableCard;
