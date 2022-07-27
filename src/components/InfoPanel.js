import StatPair from "../containers/StatPair";
import { getRarity } from "./ItemFrame";

const InfoPanel = ({ item }) => {
  const {
    light_level,
    name,
    armor_slot,
    rarity,
    description,
    mobility,
    intellect,
    resilience,
    recovery,
    strength,
    discipline,
  } = item;

  const bannerStyle = {
    minWidth: "150px",
    minHeight: "60px",
    backgroundColor: getRarity(item)
  }


  return (
    <div className="infoPanel">
      <div id= "infoPanelBanner" style = {bannerStyle}>
        <h2>{name}</h2>
        <div>
          <span>{armor_slot}</span>
          <span>{rarity}</span>
        </div>
      </div>
      <h2 className="infoPanelLight">{light_level}</h2>
      <div className="armorStatsPanel">
        <StatPair statName={"Mobility"} value={mobility} />
        <StatPair statName={"Resilience"} value={resilience} />
        <StatPair statName={"Recovery"} value={recovery} />
        <StatPair statName={"Discipline"} value={discipline} />
        <StatPair statName={"Intellect"} value={intellect} />
        <StatPair statName={"Strength"} value={strength} />
      </div>
      <button>Dismantle</button>
      <button>Transfer to Vault</button>
    </div>
  );
};

export default InfoPanel;
