import { Router } from 'express';
import getMovies from '../../controllers/movie.controllers';

const router = Router();

router.get('/', getMovies);

export default router;
