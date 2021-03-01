import React from "react";
import playerData from "../../data/playerData.json";
import PlayerInfo from "../PlayerInfo/PlayerInfo";
import Selection from "../Selection/Selection";
import { useEffect, useState } from "react";
import "./PlayerCard.css";

const PlayerCard = () => {
    const [players, setPlayers] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    useEffect(() => {
      setPlayers(playerData);
    }, []);

    const handleAddPlayer = (player)=>{
        console.log("player added", player);
        const newSelectedPlayers = [...selectedPlayers, player]
        setSelectedPlayers(newSelectedPlayers);
    }

  return (
    <div className="PlayerCard">
      <div className="row row-cols-md-4 g-3 justify-content-center">
        <Selection selectedPlayers={selectedPlayers}></Selection>
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-2 justify-content-center">
        {players.map((player) => (
          <PlayerInfo handleAddPlayer={handleAddPlayer} player={player} key={player.id}></PlayerInfo>
        ))}
      </div>
    </div>
  );
};

export default PlayerCard;
