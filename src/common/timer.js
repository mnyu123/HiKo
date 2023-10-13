import React, { useState, useEffect } from 'react';

const Timer = ({ initialTime, onTimeExpired , resetTimer}) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeExpired();
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : prevTime));
    }, 1000);

    return () => {
      clearInterval(timer);
      resetTimer();
    };
  }, [timeLeft, onTimeExpired , resetTimer]);

  return <div>Time Left: {timeLeft} seconds</div>;
};

export default Timer;