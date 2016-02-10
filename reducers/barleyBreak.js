import * as types from '../constants/ActionTypes';


function arrayShuffle(array) {
    let counter = array.length;
    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}

function generateRandomMap() {
  var initArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  initArray = arrayShuffle(initArray);

  return {
        map: [
              initArray.slice(0, 4),
              initArray.slice(4, 8),
              initArray.slice(8, 12),
              initArray.slice(12, 15)
            ],
        xNull: 3,
        yNull: 3
      };
}

const initialState = {
  steps: 0,
  game : generateRandomMap()
};

const barleyBreak = function (state = initialState, action) {
  switch (action.type) {
    case types.RESTART_GAME:
      return {
        steps: 0,
        game : generateRandomMap()
      };

    case types.CLICK_KEY:
      var bufGame = state.game;

      if(action.idKey == 38 && bufGame.yNull != 3) { // стрелка вверх
        bufGame.map[bufGame.yNull][bufGame.xNull] = bufGame.map[++bufGame.yNull][bufGame.xNull];
        ++state.steps;
      }else if(action.idKey == 40 && bufGame.yNull !== 0){ // стрелка вверх
        bufGame.map[bufGame.yNull][bufGame.xNull] = bufGame.map[--bufGame.yNull][bufGame.xNull];
        ++state.steps;
      }else if(action.idKey == 37 && bufGame.xNull != 3){ // стрелка <-
        bufGame.map[bufGame.yNull][bufGame.xNull] = bufGame.map[bufGame.yNull][++bufGame.xNull];
        ++state.steps;
      }else if(action.idKey == 39 && bufGame.xNull !== 0){ // стрелка ->
        bufGame.map[bufGame.yNull][bufGame.xNull] = bufGame.map[bufGame.yNull][--bufGame.xNull];
        ++state.steps;
      }
      bufGame.map[bufGame.yNull][bufGame.xNull] = 0;
      return {
        steps: state.steps,
        game : bufGame
      };
    default:
      return state;
  }
};

export default barleyBreak;
