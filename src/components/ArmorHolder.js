import React,{useState} from 'react'
import ItemFrame from './ItemFrame'
import { headArmorData,chestArmorData,armsArmorData,legsArmorData,bootsArmorData,classItemsData} from './data'

export default function ArmorHolder({lightCalculator}) {

    //records item ids
    const [equippedItems, setEquippedItems] = useState({
        head: 0,
        arms: 0,
        chest: 0,
        legs: 0,
        boots: 0,
        class_item: 0,
      })

    const headArmor = headArmorData
    const chestArmor = chestArmorData
    const armsArmor = armsArmorData
    const legsArmor = legsArmorData
    const bootsArmor = bootsArmorData
    const classItems = classItemsData


    function getEquippedItems(){
        let sumLight = 0;
        const equippedArmour = [headArmor[0],chestArmor[0],legsArmor[0],bootsArmor[0],classItems[0]]
        equippedArmour.forEach( i => {
            sumLight += i.light_level
            setEquippedItems(armor => armor[i.armor_slot] = i.id)
        })
    }
    return (
        <div className="armorHolder">
            <ItemFrame itemList = {headArmor} />
            <ItemFrame itemList = {armsArmor}/>
            {/*
             <ItemFrame itemList = {armsArmor} updaterFunction = {updaterFunction}/>
            <ItemFrame itemList = {chestArmor} updaterFunction = {updaterFunction}/>
            <ItemFrame itemList = {legsArmor} updaterFunction = {updaterFunction}/>
            <ItemFrame itemList = {bootsArmor} updaterFunction = {updaterFunction}/>
            <ItemFrame itemList = {classItems}updaterFunction = {updaterFunction}/>

            */}
        </div>
    )
}
