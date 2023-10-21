import React, { useState, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomProgressBar({ now, initialTime }) {
  return (
    <ProgressBar animated now={now} max={initialTime} label={`${now}초`} />
  );
}

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

  return (
    <div>
      <CustomProgressBar now={initialTime - timeLeft} initialTime={initialTime} />
      남은시간: {timeLeft} 초
    </div>
  );
};

//Navigate("/end", {state : {score : 0}});

export default Timer;