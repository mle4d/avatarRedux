import { createAction } from 'promise-middleware-redux';
import { getCharacters } from '../services/avatarAPI';

export const [
  fetchCharacters,
  FETCH_CHARACTERS,
] = createAction('FETCH_CHARACTERS', getCharacters);
