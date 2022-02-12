import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Comp1 = ({ str }) => {
  const count = useSelector((state) => state.counter.value);
  const [sec, setSec] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setSec(new Date().getSeconds());
    }, 1000);
  });

  return (
    <div style={{ padding: 4 }}>
      <h4>
        {str || ""}, {sec} 초
      </h4>
      <h5>Count: {count}</h5>
    </div>
  );
};

export default Comp1;
