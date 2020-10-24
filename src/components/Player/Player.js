import React from "react";
import { connect } from "react-redux";
import { chonVuKhi } from "../../actions/actions";
import "./Player.css";

const Player = ({ mangDatCuoc, chonVuKhi }) => {
  return (
    <div className="text-center playerGame">
      <div className="theThink">
        <img
          style={{ transform: "rotate(120deg)" }}
          className="mt-3"
          width={70}
          height={70}
          src={mangDatCuoc.find((item) => item.datCuoc === true).hinhAnh}
          alt={mangDatCuoc.find((item) => item.datCuoc === true).hinhAnh}
        />
      </div>
      <div className="speech-bubble"></div>
      <img
        style={{ width: 200, height: 200 }}
        src="./img/player.png"
        alt="player oan tu xi"
      />
      <div className="row">
        {mangDatCuoc.map((item, index) => {
          // sét giá trị đặt cược thêm viền cho item được chọn
          let border = {};
          if (item.datCuoc) {
            border = { border: "3px solid orange" };
          }

          return (
            <div className="col-4">
              <button
                onClick={() => {
                  chonVuKhi(item.ma);
                }}
                style={border}
                className="btn btnItem"
              >
                <img
                  width={50}
                  height={50}
                  src={item.hinhAnh}
                  alt={item.hinhAnh}
                />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProp = (state) => {
  return {
    mangDatCuoc: state.oanTuXiReducers.mangDatCuoc,
  };
};

export default connect(mapStateToProp, { chonVuKhi })(Player);
