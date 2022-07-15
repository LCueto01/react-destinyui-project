
import React, { useEffect,useState,useContext } from 'react'
import { ItemGrid } from './ItemGrid'
import { baseContext } from './Base'


export default function ItemFrame({ itemList}) {
  // the first item in the list is the currently equipped item
  const [equippedItem,setEquippedItem] = useState(itemList[0])
  const [isHovering,setHovering] = useState(false)
  const [isHoveringBox,setHoveringBox] = useState(false)

  function handleMouseEnter(){
    setHovering(true)
  }
  function handleMouseLeave(){
    setHovering(false)
  }

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
  const itemRarity = getRarity(equippedItem)
  const frameStyle = {
    border: "2px solid white",
    width: "90px",
    height: "90px",
    marginBottom: "30px",
    marginLeft: "10px",
    backgroundColor: itemRarity,
    
  }
  useEffect(()=>{
    console.log(itemList)
    setEquippedItem(itemList[0])
  },[itemList])

  return (

    <div >
      <div className = "itemContainer">
        <div onMouseEnter = {handleMouseEnter}  style={frameStyle}>
          <h2 className = "itemWriting">{equippedItem.name}</h2>
          <h2 className = "itemWriting">{equippedItem.light_level}</h2>
          <h2 className = "itemWriting">{equippedItem.hasOwnProperty("slot")? equippedItem.slot : equippedItem.armor_slot}</h2>
      </div>
        {isHovering &&(
          <ItemGrid hoverFunction ={handleMouseLeave} itemsList = {itemList}/>
        )}
      </div>
      

    </div>


  )
}


