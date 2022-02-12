import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Comp2 = ({ str }) => {
  const [milli, setMilli] = useState(0);
  const count = useSelector((state) => state.counter.value);
  useEffect(() => {
    setInterval(() => {
      setMilli(new Date().getMilliseconds());
    }, 10);
  }, []);

  return (
    <div style={{ padding: 4 }}>
      <h4>
        {str || ""},{milli} 밀리초
      </h4>
      <h5>{count}</h5>
    </div>
  );
};

export default Comp2;
