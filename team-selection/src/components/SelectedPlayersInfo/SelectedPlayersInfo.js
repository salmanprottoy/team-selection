import React from 'react';

const SelectedPlayersInfo = (props) => {

    const selectedPlayers = props.selectedPlayers;
    const { first_name, last_name, salary} = selectedPlayers;
    return (
        <div>
            <p>
                <li>
                    Name: {first_name} {last_name}
                    <br/>
                    Salary: ${salary}</li>
            </p>
        </div>
    );
};

export default SelectedPlayersInfo;