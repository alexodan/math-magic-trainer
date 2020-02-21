import React, { useEffect, useState, useRef } from 'react';
import './count-down.css';

const CountDown = ({ timeLeft, onCountDownFinished }) => {
  const [countDown, setCountDown] = useState(timeLeft);
  const savedCallback = useRef();

  function callback() {
    if (countDown > 0) {
      setCountDown(countDown - 1);
    } else {
      onCountDownFinished();
    }
  }

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="count-down">
      <span>{ countDown }</span>
    </div>
  );
}

export default CountDown;