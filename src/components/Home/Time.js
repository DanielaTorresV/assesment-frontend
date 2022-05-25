import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Time = (props) => {
  // We need ref in this, because we are dealing
  // with JS setInterval to keep track of it and
  // stop it when needed
  const Ref = useRef(null);

  // The state for our timer
  const [timer, setTimer] = useState('00:00:00');

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor(((total / 1000) * 60 * 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the begining of the variable
      setTimer(
        (hours > 9 ? hours : '0' + hours) +
          ':' +
          (minutes > 9 ? minutes : '0' + minutes) +
          ':' +
          (seconds > 9 ? seconds : '0' + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    deadline.setSeconds(deadline.getSeconds() + Math.random() * 60);
    deadline.setMinutes(deadline.getMinutes() + Math.random() * 2);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);
  console.log({ timer });
  return (
    <>
      {{ timer } === { timer: '00:00:00' } ? (
        <div className="productDetail-footer">
          <button className="buttonHeader"> Go to detail</button>
          <h5>{timer}</h5>
        </div>
      ) : (
        <div className="productDetail-footer">
          <Link to={props.route}>
            <button className="buttonHeader"> Go to detail</button>
          </Link>
          <h5>{timer}</h5>
        </div>
      )}
    </>
  );
};
export default Time;
