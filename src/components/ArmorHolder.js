import React, { useState, useEffect } from "react";
import ItemFrame from "./ItemFrame";
import StatHolder from "./StatHolder";
import {
  headArmorData,
  chestArmorData,
  armsArmorData,
  legsArmorData,
  bootsArmorData,
  classItemsData,
} from "./data";

export const equipContext = React.createContext();

export default function ArmorHolder({ lightSetter }) {
  //records item ids
  const [equippedItems, setEquippedItems] = useState({
    head: 0,
    arms: 0,
    chest: 0,
    legs: 0,
    boots: 0,
    class_item: 0,
  });

  const [headData, setHeadData] = useState(headArmorData);
  const [armsData, setArmsData] = useState(armsArmorData);
  const [chestData, setChestData] = useState(chestArmorData);
  const [legsData, setLegData] = useState(legsArmorData);
  const [bootsData, setBootsData] = useState(bootsArmorData);
  const [classItemData, setClassItemData] = useState(classItemsData);

  function getEquippedItems() {
    //console.log("this was done")
    const equippedArmour = [
      headData[0],
      armsData[0],
      chestData[0],
      legsData[0],
      bootsData[0],
      classItemData[0],
    ];
    return equippedArmour;
  }

  function updateEquippedItems(itemsArray) {
    let sumLight = 0;
    itemsArray.forEach((i) => {
      sumLight += i.light_level;
      const armorIdCopy = equippedItems;
      armorIdCopy[i.armor_slot] = i.id;
      setEquippedItems(armorIdCopy);
    });
    lightSetter(sumLight);
  }

  const findItemIndex = (item, itemSource) => {
    const copy = JSON.parse(JSON.stringify(itemSource));
    // it only worked if I did this for some reason??
    const matchingItem = copy.find((i) => {
      return i.id == item.id;
    });
    const foundIndex = copy.indexOf(matchingItem);
    return foundIndex;
  };
  const equipNewItem = (item) => {
    //replaces item and updates ids
    const replaceItem = (foundItem, itemSource) => {
      const copy = JSON.parse(JSON.stringify(itemSource));

      const itemIndex = findItemIndex(foundItem, itemSource);
      copy[itemIndex] = copy[0];
      copy[0] = foundItem;

      const copyArmorIds = { ...equippedItems };
      copyArmorIds[foundItem.armor_slot] = foundItem.id;
      console.log(copyArmorIds);
      return copy;
    };
    switch (item.armor_slot) {
      case "head":
        setHeadData(replaceItem(item, headData));
        break;
      case "arms":
        setArmsData(replaceItem(item, armsData));
        break;
      case "chest":
        setChestData(replaceItem(item, chestData));
        break;
      case "legs":
        setLegData(replaceItem(item, legsData));
        break;
      case "boots":
        setBootsData(replaceItem(item, bootsArmorData));
        break;
      case "class_item":
        setClassItemData(replaceItem(item, classItemData));
        break;
      default:
        break;
    }
  };

  const transferToVault = (item) => {
    switch (item.armor_slot) {
      case "head":
        break;
      case "arms":
        break;
      case "chest":
        break;
      case "legs":
        break;
      case "boots":
        break;
      case "class_item":
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    updateEquippedItems(getEquippedItems());
  }, [headData, armsData, chestData, legsData, bootsData, classItemData]);
  return (
    <>
      <StatHolder armorList={getEquippedItems()} />
      <div className="armorHolder">
        <equipContext.Provider value={equipNewItem}>
          <ItemFrame itemList={headData} />
          <ItemFrame itemList={armsData} />

          <ItemFrame itemList={chestData} />
          <ItemFrame itemList={legsData} />
          <ItemFrame itemList={bootsData} />
          <ItemFrame itemList={classItemData} />
        </equipContext.Provider>
      </div>
    </>
  );
}
