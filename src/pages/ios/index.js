import React from "react";
import { Helmet } from "react-helmet";

import "./style.css";

const IOSTest = () => {
  const divRef = React.useRef(null);

  React.useEffect(() => {
    // const fn = (e) => {
    //   e.preventDefault();
    // };
    // window.addEventListener("touchmove", fn, { passive: false });
    return () => {
      // window.removeEventListener("touchmove", fn);
    };
  }, []);
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      </Helmet>
      <div className="container" ref={divRef}>
      
        <div className="div1" ref={divRef}>
          <div className="inner1">
            <div className="inner2"><p></p></div>
          </div>
        </div>
        <div className="div2">2</div>
      </div>
    </>
  );
};

export default IOSTest;
