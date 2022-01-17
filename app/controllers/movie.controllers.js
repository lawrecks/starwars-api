import fetchMovies from '../services/movie.services';
import { successResponse } from '../utils/helpers/response.helpers';

const getMovies = async (req, res, next) => {
  try {
    const data = await fetchMovies();
    successResponse(res, 'Movies fetched successfully', 200, data);
  } catch (error) {
    logger.error('getMovies::moviesController', error);
    next(error);
  }
};

export default getMovies;
