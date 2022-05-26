import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Time = (props) => {
  const [seconds, setSeconds] = useState(Math.floor(Math.random() * 180));
  useEffect(() => {
    const timer =
      seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);
    return () => clearInterval(timer);
  }, [seconds]);
  return (
    <div className="productDetail-footer">
      {seconds > 0 ? (
        <Link to={props.route}>
          <button className="buttonHeader"> Go to detail</button>
        </Link>
      ) : (
        <p className="productDetail-footerOver">Time is Over</p>
      )}
      <h5>{seconds} Sec</h5>
    </div>
  );
};
export default Time;
