import React from "react";
import { connect } from "react-redux";

const KetQuaTroChoi = (props) => {
  return (
    <div>
      <div className="display-4 text-warning">{props.ketQua}</div>
      <div className="display-4 text-success">
        Số bàn thắng: <span className="text-warning">{props.soBanThang}</span>
      </div>
      <div className="display-4 text-success">
        Số bàn chơi: <span className="text-warning">{props.soBanChoi}</span>
      </div>
    </div>
  );
};

const mapStateToPtops = (state) => {
  return {
    ketQua: state.oanTuXiReducers.ketQua,
    soBanThang: state.oanTuXiReducers.soBanThang,
    soBanChoi: state.oanTuXiReducers.soBanChoi,
  };
};
export default connect(mapStateToPtops)(KetQuaTroChoi);
