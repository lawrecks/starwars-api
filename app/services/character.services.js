import sendHttpRequest from '../utils/helpers/api.helpers';
import * as helpers from '../utils/helpers/character.helpers';

const fetchCharacters = async (query) => {
  const {
    data: { results },
  } = await sendHttpRequest('https://swapi.dev/api/people/', 'GET');
  let characters = results;
  characters = helpers.sortOrFilterCharacters(characters, query);
  const metaData = helpers.calculateTotalHeight(characters);
  
  console.log('characters===>>>', results);
  return { metaData, characters };
};

export default fetchCharacters;
