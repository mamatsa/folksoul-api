import { Router } from 'express'
import {
  getMembers,
  addMember,
  addMemberAvatar,
  updateMember,
  deleteMember,
} from 'controllers'
import { multerMiddleware } from 'middlewares'

const router = Router()

router.get('/band-members', getMembers)
router.post('/band-member', addMember)
router.put('/band-member/avatar/:id', multerMiddleware, addMemberAvatar)
router.put('/band-member/:id', updateMember)
router.delete('/band-member/:id', deleteMember)

export default router
