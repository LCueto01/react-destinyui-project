import React, { useState, useEffect } from 'react'
import mobPng from "../images/mob.png"
import intPng from "../images/int.png"
import resPng from "../images/res.png"
import recPng from "../images/rec.png"
import discPng from "../images/disc.png"
import strengthPng from "../images/strength.png"

import ArmorHolder from './ArmorHolder'


// This has been moved to Base, keeping this component for now....
export default function StatHolder({ armorList }) {

  const [charStats, setCharStats] = useState({
    "mobility": 0,
    "resilience": 0,
    "recovery": 0,
    "discipline": 0,
    "intellect": 0,
    "strength": 0
  })

  const updateStats = () => {
    //resets stats for new calculation
    const newStats = {
      "mobility": 0,
      "resilience": 0,
      "recovery": 0,
      "discipline": 0,
      "intellect": 0,
      "strength": 0
    }
    armorList.forEach(element => {
      const { mobility, resilience, recovery, discipline, intellect, strength } = element
      newStats["mobility"] += mobility
      newStats["resilience"] += resilience
      newStats["recovery"] += recovery
      newStats["discipline"] += discipline
      newStats["intellect"] += intellect
      newStats["strength"] += strength

    });
    setCharStats(newStats)
    console.log(newStats)
  }

  useEffect(() => {
    updateStats();
  }, [armorList])

  return (
    <div className="statsCont">
      <div className="stat">
        <p>mobility</p>
        <img className="statLogo" alt="mobility logo" src={mobPng}></img>
        <h2>{parseInt(charStats.mobility / 6)}</h2>
      </div>

      <div className="stat">
        <p>resilience</p>
        <img className="statLogo" alt="resilience logo" src={resPng}></img>
        <h2>{parseInt(charStats.resilience / 6)}</h2>
      </div>

      <div className="stat">
        <p>recovery</p>
        <img className="statLogo" alt="recovery logo" src={recPng}></img>
        <h2>{parseInt(charStats.recovery / 6)}</h2>
      </div>

      <div className="stat">
        <p>discipline</p>
        <img className="statLogo" alt="recovery logo" src={discPng}></img>
        <h2>{parseInt(charStats.discipline / 6)}</h2>
      </div>

      <div className="stat">
        <p>intellect</p>
        <img className="statLogo" alt="recovery logo" src={intPng}></img>
        <h2>{parseInt(charStats.intellect / 6)}</h2>
      </div>

      <div className="stat">
        <p>strength</p>
        <img className="statLogo" alt="recovery logo" src={strengthPng}></img>
        <h2>{parseInt(charStats.strength / 6)}</h2>
      </div>

    </div>
  )
}
