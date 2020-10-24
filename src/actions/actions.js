import { CHON_KEO_BUA_BAO } from "../constants/Constants";
import { RAN_DOM } from "../constants/Constants";
import { END_GAME } from "../constants/Constants";

export const chonVuKhi = (maVuKhi) => {
  return {
    type: CHON_KEO_BUA_BAO,
    maVuKhi,
  };
};

export const choigame = () => {
  return {
    type: RAN_DOM,
  };
};
export const endgame = () => {
  return {
    type: END_GAME,
  };
};
