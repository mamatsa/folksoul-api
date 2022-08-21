import { Router } from 'express'
import { addMember, getMembers, updateMember, deleteMember } from 'controllers'

const router = Router()

router.get('/band-members', getMembers)
router.post('/band-member', addMember)
router.put('/band-member/:id', updateMember)
router.delete('/band-member/:id', deleteMember)

export default router
