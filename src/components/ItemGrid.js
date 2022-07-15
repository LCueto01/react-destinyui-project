
import { useContext } from "react"
import { equipContext } from "./ArmorHolder"
const gridStyle = {
  backgroundColor:"lightGrey",
  width: "305px",
  height: "300px",
  position:"absolute",
  marginLeft:"100px",
  display:"flex"
}

const frameStyle = {
  border: "2px solid white",
  width: "90px",
  height: "90px",
  backgroundColor: "red",
  marginLeft: "5px",
  marginRight: "5px"
}



export const ItemGrid = ({hoverFunction, itemsList}) => {

    const equipFunction = useContext(equipContext)
    const copyArr = {...itemsList}
  

    const renderItems = ( itemsList.map((item) => <div onClick = {() => equipFunction(item)} style = {frameStyle} key = {item.id}>
      <h2 className = "itemWriting">{item.name}</h2>
      <h2 className = "itemWriting">{item.light_level}</h2>
      <h2 className = "itemWriting">{item.hasOwnProperty("slot")? item.slot : item.armor_slot}</h2>
    </div>))

  return (
    <div onMouseLeave = {hoverFunction} style = {gridStyle}>
      {renderItems}
    </div>
    
  )
}