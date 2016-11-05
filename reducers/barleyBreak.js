import * as types from '../constants/ActionTypes';

function arrayShuffle() {
  let bufArr = Array.from({ length: 15 }, (v, k) => ++k);
  let counter = bufArr.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
  
    let temp = bufArr[counter];
    bufArr[counter] = bufArr[index];
    bufArr[index] = temp;
  }
  return bufArr;
}

function generateRandomMap() {
  let shuffleInitArray = arrayShuffle();
  shuffleInitArray.push(0);

  return {
    map: [
      shuffleInitArray.slice(0, 4),
      shuffleInitArray.slice(4, 8),
      shuffleInitArray.slice(8, 12),
      shuffleInitArray.slice(12, 16)
    ],
    xNull: 3,
    yNull: 3
  };
}

function checkMap(arrayMap) {
  let bufArr = arrayMap[0].concat(arrayMap[1], arrayMap[2], arrayMap[3]);
  bufArr.splice(15, 1);

  return bufArr.every((element, index) => element == ++index);
}

function nextStepMap(arrayMap, action) {
  let xNull   = arrayMap.xNull,
      yNull   = arrayMap.yNull,
      bufGame = arrayMap.map;

  if(action.idKey == 'KEY_UP' && yNull != 3) { // стрелка вверх
    bufGame[yNull][xNull] = bufGame[++yNull][xNull];
  }else if(action.idKey == 'KEY_DOWN' && yNull !== 0){ // стрелка вниз
    bufGame[yNull][xNull] = bufGame[--yNull][xNull];
  }else if(action.idKey == 'KEY_LEFT' && xNull != 3){ // стрелка <-
    bufGame[yNull][xNull] = bufGame[yNull][++xNull];
  }else if(action.idKey == 'KEY_RIGHT' && xNull !== 0){ // стрелка ->
    bufGame[yNull][xNull] = bufGame[yNull][--xNull];
  }
  bufGame[yNull][xNull] = 0;

  return { map: bufGame, xNull, yNull };
}

const initialState = {
  steps  : 0,
  game   : generateRandomMap(),
  gameEnd: false
};

const barleyBreak = function (state = initialState, action) {
  switch (action.type) {
    case types.RESTART_GAME:
      return Object.assign({}, initialState, {
        game: generateRandomMap()
      });

    case types.CLICK_KEY:
      let bufGame = nextStepMap(state.game, action);

      return Object.assign({}, state, {
        steps  : state.steps + 1,
        game   : bufGame,
        gameEnd: checkMap(bufGame.map)
      });

    default:
      return state;
  }
};

export default barleyBreak;
