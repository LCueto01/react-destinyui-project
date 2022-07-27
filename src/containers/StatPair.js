const StatPair = ({ statName, value }) => {
  const barStyle = {
    width: value * 2,
    height: "20px",
    backgroundColor: "white",
    marginTop: "15px",
    float: "left",
  };
  return (
    <div className="statPair">
      <p id="statName">{statName}</p>
      <div style={barStyle}>
        <div></div>
      </div>
      <p id="statValue">{value}</p>
    </div>
  );
};

export default StatPair;
