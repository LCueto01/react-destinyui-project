import React, { useContext, useState } from "react";
import { equipContext } from "./ArmorHolder";
import { useStoreState, useStoreActions } from "easy-peasy";
import InfoPanel from "./InfoPanel";

export const ChildFrame = ({ item, renderRarity }) => {
  const equipFunction = useContext(equipContext);
  const itemRarity = renderRarity(item);
  const [isHovering, setHovering] = useState(false);

  const frameStyle = {
    border: "2px solid white",
    width: "90px",
    height: "90px",
    marginLeft: "2px",
    backgroundColor: itemRarity,
  };

  const setHover = () => {
    setHovering(true);
  };

  return (
    <div
      className="childGridStyle"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div onClick={() => equipFunction(item)} style={frameStyle}>
        <h2 className="itemWriting">{item.name}</h2>
        <h2 className="itemWriting">{item.light_level}</h2>
      </div>
      {isHovering && <InfoPanel item={item} />}
    </div>
  );
};
