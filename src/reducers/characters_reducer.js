import characters_json from '../data/characters.json';
import { ADD_CHARACTER, REMOVE_HERO } from '../actions';
import { createCharacter} from './helper_functions';

function characters (state = characters_json, action) {
  switch (action.type) {
    case ADD_CHARACTER:
      let characters = state.filter(item => item.id!==action.id);
      return characters;
    case REMOVE_HERO:
      let addChar = [...state, createCharacter(action.id)];
      return addChar;
    default:
      return state;
  }
}

export default characters;