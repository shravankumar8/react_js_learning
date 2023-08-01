import React, { useState, useEffect } from "react";

const Mycomponent = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("the count is mounting");
  }, []);
  useEffect(() => {
    console.log("count got updated"+count);
  }, [count]);
  useEffect(() => {
    console.log("count2 got updated"+count2);
  }, [count2]);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleIncrement2 = () => {
    setCount2(count2 + 1);
  };

  return (
    <div>
      <p>{count} is the count. </p>
      <p>{count2} is the count. </p>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleIncrement2}>increment2</button>
    </div>
  );
};

export default Mycomponent;
