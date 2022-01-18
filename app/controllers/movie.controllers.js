import requestIp from 'request-ip';
import * as service from '../services/movie.services';
import { successResponse } from '../utils/helpers/response.helpers';

export const getMovies = async (req, res, next) => {
  try {
    const data = await service.fetchMovies();
    successResponse(res, 'Movies fetched successfully', 200, data);
  } catch (error) {
    logger.error('getMovies::moviesController', error);
    next(error);
  }
};

export const addComment = async (req, res, next) => {
  try {
    const ip = requestIp.getClientIp(req);
    const data = await service.addComment({ ...req.params, ...req.body, ip });
    successResponse(res, 'Comment added successfully', 201, data);
  } catch (error) {
    logger.error('addComment::moviesController', error);
    next(error);
  }
};

export const getMovieComments = async (req, res, next) => {
  try {
    const data = await service.fetchMovieComments(req.params);
    successResponse(res, 'Comments fetched successfully', 200, data);
  } catch (error) {
    logger.error('getMovieComments::moviesController', error);
    next(error);
  }
};
