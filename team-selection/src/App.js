import "./App.css";
import playerData from "./data/playerData.json";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import PlayerCard from "./components/PlayerCard/PlayerCard";

function App() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    setPlayers(playerData);
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <PlayerCard players={players}></PlayerCard>
    </div>
  );
}

export default App;
