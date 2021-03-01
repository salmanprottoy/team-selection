import React from "react";
import PlayerInfo from "../PlayerInfo/PlayerInfo";
import Selection from "../Selection/Selection";
import "./PlayerCard.css";

const PlayerCard = (props) => {
  console.log(props.players);
  return (
    <div>
      <div>
        <Selection></Selection>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-2 justify-content-center">
        {props.players.map((player) => (
          <PlayerInfo player={player}></PlayerInfo>
        ))}
      </div>
    </div>
  );
};

export default PlayerCard;
