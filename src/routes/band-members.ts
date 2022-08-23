import { Router } from 'express'
import {
  getMembers,
  addMember,
  addMemberAvatar,
  updateMember,
  deleteMember,
} from 'controllers'
import {
  multerMiddleware,
  validateBody,
  validateParams,
  protect,
} from 'middlewares'
import { bandMemberSchema } from 'schemas'

const router = Router()

router.get('/band-members', protect, getMembers)
router.post('/band-member', protect, validateBody(bandMemberSchema), addMember)
router.put(
  '/band-member/avatar/:id',
  protect,
  validateParams,
  multerMiddleware,
  addMemberAvatar
)
router.put(
  '/band-member/:id',
  protect,
  validateParams,
  validateBody(bandMemberSchema),
  updateMember
)
router.delete('/band-member/:id', protect, validateParams, deleteMember)

export default router
