import sendHttpRequest from '../utils/helpers/api.helpers';
import { Error } from '../utils/helpers/response.helpers';
import db from '../db';
import commentQueries from '../db/queries/comment.queries';
import * as movieHelpers from '../utils/helpers/movie.helpers';

const getCommentsCount = async (data) => db.any(commentQueries.countComments, [data]);

export const fetchMovies = async () => {
  const response = await sendHttpRequest('https://swapi.dev/api/films/', 'GET');
  if (response.status !== 200) {
    throw Error('Error fetching movies', 500);
  }
  const {
    data: { results: movies },
  } = response;
  const movieIds = movies.map((item) => item.episode_id);
  const commentsCount = await getCommentsCount(movieIds);
  let finalData = movieHelpers.filterAndUpdateMovies(movies, commentsCount);
  finalData = movieHelpers.sortByDate(finalData);
  return finalData;
};

export const addComment = async (data) => {
  const [comment] = await db.any(commentQueries.addComment, [
    data.episodeId,
    data.comment,
    data.ip,
  ]);

  return comment;
};

export const fetchMovieComments = async (params) => {
  const { episodeId } = params;
  return db.any(commentQueries.getComments, [episodeId]);
};
