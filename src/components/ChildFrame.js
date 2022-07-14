import React from 'react'

export const ChildFrame = (item) => {

  

    const getRarity = (i) => {
        switch (i.rarity) {
          case "exotic":
            return "yellow";
          case "legendary":
            return "purple";
          case "rare":
            return "blue";
          case "uncommon":
            return "green";
          default:
            return "white"
        }
      }
      const itemRarity = getRarity(item)
      const frameStyle = {
        border: "2px solid white",
        width: "90px",
        height: "90px",
        marginBottom: "30px",
        marginLeft: "10px",
        backgroundColor: itemRarity,
        
      }
  return (
    <div className = "itemContainer">
    <div   style={frameStyle}>
      <h2 className = "itemWriting">{item.name}</h2>
      <h2 className = "itemWriting">{item.light_level}</h2>
      <h2 className = "itemWriting">{item.hasOwnProperty("slot")? item.slot : item.armor_slot}</h2>
  </div>
    </div>
  )
}
