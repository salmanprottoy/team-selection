import "./App.css";
import playerData from "./data/playerData.json";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";

function App() {
  const [player, setPlayer] = useState([]);
  useEffect(() => {
    setPlayer(playerData);
    console.log(playerData);
  }, []);

  return (
    <div className="App">
      <Header></Header>
    </div>
  );
}

export default App;
