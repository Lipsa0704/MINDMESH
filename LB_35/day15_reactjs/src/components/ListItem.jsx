import React from "react";

const ListItem = React.memo(function ListItem({ item, onClick }) {
  console.log("Rendering:", item);

  return (
    <li
      onClick={() => onClick(item)}
      className="p-2 border-b cursor-pointer hover:bg-gray-100"
    >
      {item}
    </li>
  );
});

export default ListItem;
