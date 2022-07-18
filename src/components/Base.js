import React, { useState, useEffect, useCallback } from "react";

import CurrenciesHolder from "./CurrenciesHolder.js";
import SubClassHolder from "./SubClassHolder.js";
import ArmorHolder from "./ArmorHolder.js";
import WeaponHolder from "./WeaponHolder.js";

export const baseContext = React.createContext(0);

const Base = () => {
  const [armorLight, setArmorLight] = useState(0);
  const [weaponLight, setWeaponLight] = useState(0);

  const getArmorLight = (newLight) => {
    setArmorLight(newLight);
  };

  const getWeaponLight = (newLight) => {
    setWeaponLight(newLight);
  };
  return (
    <div className="Page">
      <p>Hello</p>
      <div className="topBanner"></div>

      <div className="characterScreen">
        {/*WeaponHolder*/}
        <div className="backgroundCharacter"></div>

        <div className="statsBar">
          <CurrenciesHolder></CurrenciesHolder>
          <div className="lightContainer">
            <h1>Light Level</h1>
            <h1>{parseInt(armorLight / 9)}</h1>
          </div>
          <ArmorHolder lightSetter={setArmorLight} />
        </div>
      </div>
    </div>
  );
};
export default Base;
