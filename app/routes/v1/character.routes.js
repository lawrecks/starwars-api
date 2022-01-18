import { Router } from 'express';
import getCharacters from '../../controllers/character.controllers';
import validateQuery from '../../validators/character.validators';

const router = Router();

router.get('/', validateQuery, getCharacters);

export default router;
