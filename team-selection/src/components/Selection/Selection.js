import React from "react";
import SelectedPlayersInfo from "../SelectedPlayersInfo/SelectedPlayersInfo";

const Selection = (props) => {
  const selectedPlayers = props.selectedPlayers;
  let totalExpense = 0;
  for (let i = 0; i < selectedPlayers.length; i++) {
    const salary = selectedPlayers[i].salary;
    totalExpense += salary;
  }
  return (
    <div>
      <div className="card text-white bg-success">
        <div className="card-header">
          <h4>Total Selected Player: {selectedPlayers.length}</h4>
        </div>
        <div className="card-body">
          <h5 className="card-title">Total Salary Cost: ${totalExpense}</h5>
          <h5 className="card-title">Selected Players</h5>
          <p className="card-text">
            <p>
              {selectedPlayers.map((selectedPlayers) => (
                <SelectedPlayersInfo
                  selectedPlayers={selectedPlayers}
                ></SelectedPlayersInfo>
              ))}
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Selection;
