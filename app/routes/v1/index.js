import { Router } from 'express';
import movieRoutes from './movie.routes';
import characterRoutes from './character.routes';

const router = Router();

router.get('/', (req, res) => {
  res
    .status(200)
    .json({
      status: 'success',
      code: 200,
      message: 'Welcome to Star wars API!',
    });
});

router.use('/movies', movieRoutes);
router.use('/characters', characterRoutes);

export default router;
