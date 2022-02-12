import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { WidthProvider, Responsive } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./style.scss";

import { increment, decrement, increment2, decrement2 } from "../../store";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import DragItems from "./DragItems";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const Comps = {
  Comp1,
  Comp2,
};

const Dynamic = () => {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  const handleClick = (num) => {
    createItem(num);
  };

  const createItem = (num) => {
    console.log("create item: ", num);
    const element = React.createElement(Comps[`Comp${(num % 2) + 1}`], {
      str: `${num}번 항목`,
    });

    setItems((prev) => {
      return prev.concat({
        element: (
          <div key={`comp${num}`} data-grid={{ x: 0, y: 0, w: 2, h: 1 }}>
            {element}
          </div>
        ),
      });
    });
  };

  const onAddItem = (el) => {
    return createItem(items.length);
  };

  const addItem = (layout) => {
    setItems((prev) => {
      return prev.concat({
        element: (
          <div key={layout.i} data-grid={layout}>
            {layout.i}
          </div>
        ),
      });
    });
  };

  const handleCounter = (isPlus) => {
    if (isPlus) {
      dispatch(increment());
    } else {
      dispatch(decrement());
    }
  };
  const handleCounter2 = (isPlus) => {
    if (isPlus) {
      dispatch(increment2());
    } else {
      dispatch(decrement2());
    }
  };

  const onLayoutChange = (a, b) => {
    console.log(1111, a, b);
  };

  const onDrop = (layouts, layout, _event) => {
    console.log(1111, layouts, layout, _event);
    const id = _event.dataTransfer.getData("id");
    layout.i = id;
    addItem(layout);
  };

  return (
    <>
      <div>
        <button onClick={() => handleClick(1)}>1번 항목 추가</button>
        <button onClick={() => handleClick(2)}>2번 항목 추가</button>
      </div>
      <hr />
      <div>
        <button onClick={() => handleCounter(true)}>더하기 1</button>
        <button onClick={() => handleCounter(false)}>빼기 1</button>
      </div>
      <div>
        <button onClick={() => handleCounter2(true)}>더하기 2</button>
        <button onClick={() => handleCounter2(false)}>빼기 2</button>
      </div>
      <div>
        <button onClick={onAddItem}>Add item</button>
      </div>
      <hr />

      <DragItems items={items} />
      <ResponsiveReactGridLayout
        className="layout"
        cols={{ lg: 12, md: 8, sm: 4, xs: 2, xxs: 1 }}
        rowHeight={100}
        margin={[16, 16]}
        onLayoutChange={onLayoutChange}
        onDrop={onDrop}
        isDroppable={true}
        // compactType={"horizontal"}
      >
        {items.map((item, idx) => item.element)}
      </ResponsiveReactGridLayout>
    </>
  );
};

export default Dynamic;
