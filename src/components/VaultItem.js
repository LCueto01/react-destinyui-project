import { useStoreState, useStoreActions, useActions,  } from "easy-peasy";
import React, { useEffect, Fragment } from "react";
import { ChildFrame } from "./ChildFrame";

const VaultItem = () => {
  const {items,name,count} = useStoreState(state => state)
  const doThing = useStoreActions((state) => state.addToVault);
  const add = useStoreActions((state) => state.increment)

  let idk = null
  const getFromVault = useStoreActions((state) => state.getFromVault)
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
  const renderItems = items.map((gridItem) => (
    <ChildFrame key={gridItem.id} item={gridItem} renderRarity={getRarity} />
  ));

    const newItem = {
      id: 182,
      light_level: 15233,
      name: "Teamp",
      description:
        "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
      armor_slot: "head",
      rarity: "legendary",
      mobility: 51,
      intellect: 45,
      resilience: 98,
      recovery: 61,
      strength: 21,
      discipline: 34,
    }
  useEffect(() => {
    console.log(items);
  }, []);
  return (
    <Fragment>
      <h1>hello</h1>
      <button onClick = {() => doThing(newItem)}>does stuff</button>
      <button onClick= {() => add()}>  add</button>
      <button onClick = {() => {idk = getFromVault(4);
      console.log(idk)
      }}>get</button>
      {name}
      {count}
      <div>{renderItems}</div>
    </Fragment>
  );
};

export default VaultItem;
