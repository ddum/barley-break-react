import * as types from '../constants/ActionTypes';

export function restartGame() {
  return {
    type: types.RESTART_GAME
  };
}

export function clickKey(idKey) {
  return {
    type : types.CLICK_KEY,
    idKey: types.ARR_KEY[idKey]
  };
}
