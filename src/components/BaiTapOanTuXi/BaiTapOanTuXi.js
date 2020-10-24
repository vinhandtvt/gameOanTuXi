import React from "react";
import { connect } from "react-redux";
import Computer from "../Computer/Computer";
import KetQuaTroChoi from "../KetQuaTroChoi/KetQuaTroChoi";
import Player from "../Player/Player";
import { choigame, endgame } from "../../actions/actions";
import "./BaiTapOanTuXi.css";

const BaiTapOanTuXi = (props) => {
  console.log(props);
  return (
    <div className="gameOanTuXi">
      <div className="row">
        <div className="col-4">
          <Player />
        </div>
        <div className="col-4">
          <KetQuaTroChoi />
          <button
            onClick={() => {
              props.choigame();
              props.endgame();
            }}
            className="btn btn-success display-2 p-3"
          >
            Play Game
          </button>
        </div>
        <div className="col-4">
          <Computer />{" "}
        </div>
      </div>
    </div>
  );
};

export default connect(null, { choigame, endgame })(BaiTapOanTuXi);
