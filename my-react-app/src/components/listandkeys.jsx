import React from "react";

const Style = () => {
  const IPL = ["RR", "SRH", "MI","Csk","patna " ];
  const result = IPL.map((ipl) => <h1 key={ipl}>{ipl}</h1>);

  return <div>{result}</div>;
};

export default Style;
