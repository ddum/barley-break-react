import * as types from '../constants/ActionTypes';

function generateRandomMap() {
  return [
          [1,  2,  3,  4],
          [5,  6,  7,  8],
          [9,  10, 11, 12],
          [13, 14, 15, 0]
        ];
}

const initialState = {
  steps: 0,
  map  : generateRandomMap()
};

const barleyBreak = function (state = initialState, action) {
  switch (action.type) {
    case types.RESTART_GAME:
      return {
        steps: 0,
        map  : generateRandomMap()
      };

    case types.CLICK_KEY:
      return Object.assign({}, state, {steps: ++state.steps});

    default:
      return state;
  }
};

export default barleyBreak;
