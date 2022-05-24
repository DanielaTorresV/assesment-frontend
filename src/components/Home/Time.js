import React, { useState, useEffect } from 'react';

const Time = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  }, []);

  return <h5>{count}</h5>;
};

export default Time;
