import React from "react";
import { connect } from "react-redux";

const Computer = ({ computer }) => {
  return (
    <div className="text-center playerGame">
      <div className="theThink">
        <img
          className="mt-3"
          width={70}
          height={70}
          src={computer.hinhAnh}
          alt={computer.hinhAnh}
        />
      </div>
      <div className="speech-bubble"></div>
      <img
        style={{ width: 200, height: 200 }}
        src="./img/playerComputer.png"
        alt="computer oan tu xi"
      />
      =
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    computer: state.oanTuXiReducers.computer,
  };
};

export default connect(mapStateToProps)(Computer);
