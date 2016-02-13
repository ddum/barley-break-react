import * as types from '../constants/ActionTypes';

const initArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function arrayShuffle(array) {
    let bufArr = array;
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

function generateRandomMap(initArray) {
  let shuffleInitArray = arrayShuffle(initArray);

  return {
        map: [
              shuffleInitArray.slice(0, 4),
              shuffleInitArray.slice(4, 8),
              shuffleInitArray.slice(8, 12),
              shuffleInitArray.slice(12, 15)
            ],
        xNull: 3,
        yNull: 3
      };
}

function checkMap(initArray, arrayMap) {
  let i = 0;
  let status = true;

  if(arrayMap[3][3] !== 0) return false;

  console.log();

  arrayMap.map(row =>
    row.map(number =>{
      if(number != initArray[i] && i != 15){
        status =  false;
      }
      i++;
    })
  );

  return status;
}

const initialState = {
  steps: 0,
  game : generateRandomMap(initArray),
  gameEnd: false
};

const barleyBreak = function (state = initialState, action) {
  switch (action.type) {
    case types.RESTART_GAME:
      return Object.assign({}, initialState, { game : generateRandomMap(initArray) });

    case types.CLICK_KEY:
      let bufGame = state.game;

      if(action.idKey == 'KEY_UP' && bufGame.yNull != 3) { // стрелка вверх
        bufGame.map[bufGame.yNull][bufGame.xNull] = bufGame.map[++bufGame.yNull][bufGame.xNull];
        ++state.steps;
      }else if(action.idKey == 'KEY_DOWN' && bufGame.yNull !== 0){ // стрелка вниз
        bufGame.map[bufGame.yNull][bufGame.xNull] = bufGame.map[--bufGame.yNull][bufGame.xNull];
        ++state.steps;
      }else if(action.idKey == 'KEY_LEFT' && bufGame.xNull != 3){ // стрелка <-
        bufGame.map[bufGame.yNull][bufGame.xNull] = bufGame.map[bufGame.yNull][++bufGame.xNull];
        ++state.steps;
      }else if(action.idKey == 'KEY_RIGHT' && bufGame.xNull !== 0){ // стрелка ->
        bufGame.map[bufGame.yNull][bufGame.xNull] = bufGame.map[bufGame.yNull][--bufGame.xNull];
        ++state.steps;
      }
      bufGame.map[bufGame.yNull][bufGame.xNull] = 0;
      return {
        steps: state.steps,
        game : bufGame,
        gameEnd: checkMap(initArray, bufGame.map)
      };

    default:
      return state;
  }
};

export default barleyBreak;
