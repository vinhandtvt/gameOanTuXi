import React from "react";
import { combineReducers } from "redux";
import { CHON_KEO_BUA_BAO, END_GAME, RAN_DOM } from "../constants/Constants";

const initState = {
  mangDatCuoc: [
    { ma: "keo", hinhAnh: "./img/keo.png", datCuoc: true },
    { ma: "bua", hinhAnh: "./img/bua.png", datCuoc: false },
    { ma: "bao", hinhAnh: "./img/bao.png", datCuoc: false },
  ],
  ketQua: "I'm Iron man, I love you..3000 !",
  soBanThang: 0,
  soBanChoi: 0,
  computer: { ma: "keo", hinhAnh: "./img/keo.png" },
};

const oanTuXiReducers = (state = { ...initState }, action) => {
  console.log(action.type);
  switch (action.type) {
    case RAN_DOM: {
      let soNN = Math.floor(Math.random() * 3);
      console.log(soNN);
      let soNgauNhien = Math.floor(Math.random() * 3);
      console.log("so ngau nhien", soNgauNhien);
      let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
      console.log(quanCuocNgauNhien);
      state.computer = quanCuocNgauNhien;

      return { ...state };
    }
    case CHON_KEO_BUA_BAO: {
      let mangCuocUpdate = [...state.mangDatCuoc];
      console.log(mangCuocUpdate);
      console.log(action.maVuKhi);
      mangCuocUpdate = mangCuocUpdate.map((item, index) => {
        if (item.ma === action.maVuKhi) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });

      state.mangDatCuoc = mangCuocUpdate;
      return { ...state };
    }
    case END_GAME: {
      let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
      let computer = state.computer;

      switch (player.ma) {
        case "keo":
          if (computer.ma === "keo") {
            state.ketQua = "Ban Hoa";
          } else if (computer.ma === "bua") {
            state.ketQua = "ban thua sml!";
          } else {
            state.soBanThang += 1;
            state.ketQua = "I'm Iron man, I love you..3000 !";
          }
          break;
        case "bua":
          if (computer.ma === "keo") {
            state.soBanThang += 1;
            state.ketQua = "I'm Iron man, I love you..3000 !";
          } else if (computer.ma === "bua") {
            state.ketQua = "Ban Hoa";
          } else {
            state.ketQua = "ban thua sml!";
          }
          break;

        case "bao":
          if (computer.ma === "keo") {
            state.ketQua = "ban thua sml!";
          } else if (computer.ma === "bua") {
            state.soBanThang += 1;
            state.ketQua = "I'm Iron man, I love you..3000 !";
          } else {
            state.ketQua = "Ban Hoa";
          }
          break;
        default:
          state.soBanThang += 1;
          state.ketQua = "I'm Iron man, I love you..3000 !";
      }
      state.soBanChoi += 1;
      return { ...state };
    }
  }

  return { ...state };
};

export default combineReducers({
  oanTuXiReducers,
});
