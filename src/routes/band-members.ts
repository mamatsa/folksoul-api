import { Router } from 'express'
import {
  getMembers,
  addMember,
  addMemberAvatar,
  updateMember,
  deleteMember,
} from 'controllers'
import { multerMiddleware, validateBody } from 'middlewares'
import { bandMemberSchema } from 'schemas'

const router = Router()

router.get('/band-members', getMembers)
router.post('/band-member', validateBody(bandMemberSchema), addMember)
router.put('/band-member/avatar/:id', multerMiddleware, addMemberAvatar)
router.put('/band-member/:id', validateBody(bandMemberSchema), updateMember)
router.delete('/band-member/:id', deleteMember)

export default router
