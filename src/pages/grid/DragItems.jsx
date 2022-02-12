import React from "react";
const DragItems = ({ items }) => {
  return (
    <div>
      <div
        className="drop-item"
        draggable={true}
        unselectable="on"
        onDragStart={(e) =>
          e.dataTransfer.setData("id", `id${items.length + 1}`)
        }
      >
        Drag Me
      </div>
    </div>
  );
};

export default DragItems;
