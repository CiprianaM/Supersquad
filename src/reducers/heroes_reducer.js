import { ADD_CHARACTER, REMOVE_HERO } from '../actions';
import { createCharacter } from './helper_functions';

function heroes (state = [], action) {
  switch (action.type) {
    case ADD_CHARACTER:
      let heroes = [...state, createCharacter(action.id)];
      return heroes;
    case REMOVE_HERO:
      let remHeroes = state.filter(item => item.id!==action.id);
      return remHeroes;
    default:
      return state;
  }
}

export default heroes;