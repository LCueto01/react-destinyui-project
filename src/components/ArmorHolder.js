import React, { useState } from 'react'
import ItemFrame from './ItemFrame'
import { headArmorData, chestArmorData, armsArmorData, legsArmorData, bootsArmorData, classItemsData } from './data'

export const equipContext = React.createContext()

export default function ArmorHolder({ lightCalculator }) {

    //records item ids
    const [equippedItems, setEquippedItems] = useState({
        head: 0,
        arms: 0,
        chest: 0,
        legs: 0,
        boots: 0,
        class_item: 0,
    })

    const [headData, setHeadData] = useState(headArmorData)
    const [armsData, setArmsData] = useState(armsArmorData)
    const [chestData,setChestData] = useState(chestArmorData)
    const [legsData, setLegData] = useState(legsArmorData)
    const [bootsData, setBootsData] = useState(bootsArmorData)
    const [classItemData, setClassItemData] = useState(classItemsData)


    function getEquippedItems() {
        let sumLight = 0;
        const equippedArmour = [headData[0], chestData[0], legsData[0], bootsData[0], classItemData[0]]
        equippedArmour.forEach(i => {
            sumLight += i.light_level
            setEquippedItems(armor => armor[i.armor_slot] = i.id)
        })
    }

    const equipNewItem = (item) => {
        const replaceItem = (foundItem, itemSource) =>{
            const copy = JSON.parse(JSON.stringify(headData))
            // it only worked if I did this for some reason??
            const matchingItem = copy.find(i => {return i.id == foundItem.id})
            const foundIndex = copy.indexOf(matchingItem)
            copy[foundIndex] = headData[0]
            copy[0] = foundItem
           
            return copy
           
        }
        switch(item.armor_slot){
            case "head":
                setHeadData(replaceItem(item,headData))
                break;
            case "arms":
                setArmsData(replaceItem(item,armsData))
                break;
            case "chest":
                setChestData(replaceItem(item,chestData))
                break;
            case "legs":
                setLegData(replaceItem(item,legsData))
                break;
            case "boots":
                setClassItemData(replaceItem(item,classItemData))
                break;
            default:
                break;
        }
    }
    return (
        <div className="armorHolder">
            <equipContext.Provider value = {equipNewItem}>
                <ItemFrame itemList={headData} />
                <ItemFrame itemList={armsData} />
                {/*
             <ItemFrame itemList = {armsArmor} updaterFunction = {updaterFunction}/>
            <ItemFrame itemList = {chestArmor} updaterFunction = {updaterFunction}/>
            <ItemFrame itemList = {legsArmor} updaterFunction = {updaterFunction}/>
            <ItemFrame itemList = {bootsArmor} updaterFunction = {updaterFunction}/>
            <ItemFrame itemList = {classItems}updaterFunction = {updaterFunction}/>

            */}
            </equipContext.Provider>
        </div>
    )
}
