import React, { useEffect, useState, useContext } from "react";
import { ChildFrame } from "./ChildFrame";
import InfoPanel from "./InfoPanel";

export default function ItemFrame({ itemList }) {
  // the first item in the list is the currently equipped item
  const [equippedItem, setEquippedItem] = useState(itemList[0]);
  const [isHovering, setHovering] = useState(false);
  const [isHoveringBox, setHoveringBox] = useState(false);

  // on item frame hover show grid
  // on grid leav show grid
  // on item frame leave, hide grid || if !isHovering and isHoveringBox == true

  const [firstItem, ...rest] = itemList;
  function handleMouseEnter() {
    setHovering(true);
    setHoveringBox(false);
  }
  function handleMouseLeave() {
    if (!isHoveringBox) {
      setHovering(false);
    }
  }

  const getRarity = (i) => {
    switch (i.rarity) {
      case "exotic":
        return "#ffea29";
      case "legendary":
        return "#9e4fff"; // purple
      case "rare":
        return "#2b80ff"; //blue
      case "uncommon":
        return "green";
      default:
        return "white";
    }
  };
  const itemRarity = getRarity(equippedItem);

  const frameStyle = {
    border: "2px solid white",
    width: "90px",
    height: "90px",
    marginBottom: "30px",
    marginLeft: "5px",
    backgroundColor: itemRarity,
    overflow: "hidden",
  };

  //renders items in grid
  const renderItems = rest.map((gridItem) => (
    <ChildFrame key={gridItem.id} item={gridItem} renderRarity={getRarity} />
  ));

  useEffect(() => {
    setEquippedItem(itemList[0]);
  }, [itemList]);

  return (
    <div>
      <div data-testid="itemContainer" className="itemContainer">
        <div
          data-testid="itemFrame"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={frameStyle}
        >
          <h2 data-testid="itemNameLabel" className="itemWriting">
            {equippedItem.name}
          </h2>
          <h2 data-testid="itemLightLabel" className="itemWriting">
            {equippedItem.light_level}
          </h2>
          <h2 data-testid="itemSlotLabel" className="itemWriting">
            {equippedItem.hasOwnProperty("slot")
              ? equippedItem.slot
              : equippedItem.armor_slot}
          </h2>
        </div>
        {(isHovering || isHoveringBox) && (
          <div
            data-testid="itemGrid"
            onMouseLeave={() => setHoveringBox(false)}
            onMouseEnter={() => setHoveringBox(true)}
            className="gridStyle"
          >
            {renderItems}
          </div>
        )}
      </div>
    </div>
  );
}
ItemFrame.defaultProps = {
  itemList: [
    {
      id: 0,
      light_level: 0,
      name: "",
      description: "",
      armor_slot: "chest",
      rarity: "",
      mobility: 0,
      intellect: 0,
      resilience: 0,
      recovery: 0,
      strength: 0,
      discipline: 0,
    },
    {
      id: 0,
      light_level: 0,
      name: "",
      description: "",
      armor_slot: "chest",
      rarity: "",
      mobility: 0,
      intellect: 0,
      resilience: 0,
      recovery: 0,
      strength: 0,
      discipline: 0,
    },
  ],
};
