

const gridStyle = {
  backgroundColor:"lightGrey",
  width: "280px",
  height: "300px",
  position:"absolute",
  marginLeft:"100px"
}

export const ItemGrid = ({hoverFunction, itemsList}) => {

  return (
    <div onMouseLeave = {hoverFunction} style = {gridStyle}>

    </div>
    
  )
}