import React from "react";
import "./PlayerInfo.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const PlayerInfo = (props) => {
  const { first_name, last_name, salary, img } = props.player;
  return (
    <div>
      <div className="col">
        <div className="card h-100 shadow bg-white p-3 rounded border-0">
          <img className="card-img-top" src={img} alt="" />
          <div class="card-body">
            <h5 className="card-title">
              {first_name} {last_name}
            </h5>
            <p className="card-text">Salary: ${salary}</p>
            <a href="#" className="btn btn-success">
            <FontAwesomeIcon icon={faCheckCircle} /> Add Player
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;
