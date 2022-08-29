import { Router } from 'express'
import {
  multerMiddleware,
  validateBody,
  validateParams,
  protect,
} from 'middlewares'
import { socialLinkSchema } from 'schemas'
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
router.post(
  '/social-link',
  protect,
  validateBody(socialLinkSchema),
  addSocialLink
)
router.put(
  '/social-link/icon/:id',
  protect,
  validateParams,
  multerMiddleware,
  addSocialLinkIcon
)
router
  .route('/social-link/:id')
  .get(validateParams, getSocialLink)
  .put(
    protect,
    validateParams,
    validateBody(socialLinkSchema),
    updateSocialLink
  )
  .delete(protect, validateParams, deleteSocialLink)

export default router
