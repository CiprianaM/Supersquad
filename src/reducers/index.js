import { combineReducers } from 'redux';
import characters_json from '../data/characters.json';
import { ADD_CHARACTER } from '../actions';

function characters (state = characters_json, action) {
  switch (action.type) {
    case ADD_CHARACTER:
      let characters = state.filter(item => item.id!==action.id);
      return characters;
    default:
      return state;
  }
}

function heroes (state = [], action) {
  switch (action.type) {
    case ADD_CHARACTER:
      let heroes = [...state, createCharacter(action.id)];
      return heroes;
    default:
      return state;
  }
}

function createCharacter(id) {
  return characters_json.find(char => char.id===id)
}

const rootReducer = combineReducers({
  characters,
  heroes
})

export default rootReducer;