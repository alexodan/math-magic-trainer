import React from 'react';
import './count-down.css';

const CountDown = ({timeLeft}) => {
  return (
    <div className="count-down">
      <span>{ timeLeft }</span>
    </div>
  );
}

export default CountDown;