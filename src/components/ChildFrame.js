import React,{useContext} from 'react'
import { equipContext } from './ArmorHolder'


export const ChildFrame = ({item, renderRarity}) => {
  
  const equipFunction = useContext(equipContext)
  const itemRarity = renderRarity(item)
 
  const frameStyle = {
    border: "2px solid white",
    width: "90px",
    height: "90px",
    marginBottom: "30px",
    marginLeft: "10px",
    backgroundColor: itemRarity,
  }
    
  return (

    <div  onClick = {() => equipFunction(item)} style={frameStyle}>
      <h2 className = "itemWriting">{item.name}</h2>
      <h2 className = "itemWriting">{item.light_level}</h2>
      <h2 className = "itemWriting">{item.hasOwnProperty("slot")? item.slot : item.armor_slot}</h2>
  </div>
  
  )
}
