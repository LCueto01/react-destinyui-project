
import React, { useEffect, useState, useContext } from 'react'
import { ChildFrame } from './ChildFrame'


export default function ItemFrame({ itemList }) {
  // the first item in the list is the currently equipped item
  const [equippedItem, setEquippedItem] = useState(itemList[0])
  const [isHovering, setHovering] = useState(false)
  const [isHoveringBox, setHoveringBox] = useState(false)

  // on item frame hover show grid
  // on grid leav show grid
  // on item frame leave, hide grid || if !isHovering and isHoveringBox == true

  const [firstItem, ...rest] = itemList
  function handleMouseEnter() {
    setHovering(true)
    setHoveringBox(false)
  }
  function handleMouseLeave() {
    if(!isHoveringBox && !isHovering){
      setHovering(false)
    }
  }

  function handleBoxHover() {
  setHoveringBox(true)
    console.log("bruh")
  }

  const getRarity = (i) => {
    switch (i.rarity) {
      case "exotic":
        return "#ffea29";
      case "legendary":
        return "#9e4fff";// purple
      case "rare":
        return "#2b80ff";//blue
      case "uncommon":
        return "green";
      default:
        return "white"
    }
  }
  const itemRarity = getRarity(equippedItem)

  const frameStyle = {
    border: "2px solid white",
    width: "90px",
    height: "90px",
    marginBottom: "30px",
    marginLeft: "5px",
    backgroundColor: itemRarity,
  }

  const gridStyle = {
    backgroundColor: "#706f6f",
    width: "320px",
    height: "300px",
    position: "absolute",
    marginLeft: "100px",
    display:"flex",
    flexWrap: "wrap",
    flexDirection: "row",
    transition: "width 2s, height 4s"
  }
  //renders items in grid
  const renderItems = (rest.map((gridItem) => <ChildFrame key={gridItem.id} item={gridItem} renderRarity={getRarity} />))

  useEffect(() => {
    setEquippedItem(itemList[0])
  }, [itemList])

  return (

    <div >
      <div className="itemContainer">
        <div onMouseEnter={handleMouseEnter} onMouseLeave = {handleMouseLeave} style={frameStyle}>
          <h2 className="itemWriting">{equippedItem.name}</h2>
          <h2 className="itemWriting">{equippedItem.light_level}</h2>
          <h2 className="itemWriting">{equippedItem.hasOwnProperty("slot") ? equippedItem.slot : equippedItem.armor_slot}</h2>
        </div>
        {isHovering   && (
          <div  onMouseLeave = {handleMouseLeave} onMouseEnter = {handleBoxHover}className="gridStyle">
            {renderItems}
          </div>
        )}
      </div>


    </div>


  )
}


