import { Router } from 'express';
import * as controller from '../../controllers/movie.controllers';
import * as validator from '../../validators/comment.validators';

const router = Router();

router.get('/', controller.getMovies);
router.post(
  '/:episodeId/comment',
  validator.validateParams,
  validator.validateAddComment,
  controller.addComment,
);
router.get('/:episodeId/comments', validator.validateParams, controller.getMovieComments);

export default router;
