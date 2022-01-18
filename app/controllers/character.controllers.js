import fetchCharacters from '../services/character.services';
import { successResponse } from '../utils/helpers/response.helpers';

const getCharacters = async (req, res, next) => {
  try {
    const data = await fetchCharacters();
    successResponse(res, 'Characters fetched successfully', 200, data);
  } catch (error) {
    logger.error('getCharacters::charactersController', error);
    next(error);
  }
};

export default getCharacters;
