import { Router } from 'express';
import { getPosts, getPostsByCategory } from '../controllers/posts';

const router = Router();

router.get('/', getPosts);
router.get('/:category', getPostsByCategory);

export default router;