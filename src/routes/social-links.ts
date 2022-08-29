import { Router } from 'express'
import { multerMiddleware } from 'middlewares'
import {
  getSocialLinks,
  getSocialLink,
  addSocialLink,
  addSocialLinkIcon,
  updateSocialLink,
  deleteSocialLink,
} from 'controllers'

const router = Router()

router.get('/social-links', getSocialLinks)
router.post('/social-link', addSocialLink)
router.put('/social-link/icon/:id', multerMiddleware, addSocialLinkIcon)
router
  .route('/social-link/:id')
  .get(getSocialLink)
  .put(updateSocialLink)
  .delete(deleteSocialLink)

export default router
