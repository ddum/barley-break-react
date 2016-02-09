import * as types from '../constants/ActionTypes';

const initialState = {
  steps: 0,
};

const barleyBreak = function (state = initialState, action) {
  switch (action.type) {
    case types.RESTART_GAME:
      return { steps: 0 };

    case types.CLICK_KEY:
      return { steps: ++state.steps };

    default:
      return state;
  }
};

export default barleyBreak;
