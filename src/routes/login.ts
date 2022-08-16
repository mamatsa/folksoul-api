import { Router } from 'express'
import { login } from 'controllers'
import { validateBody } from 'middlewares'
import { loginSchema } from 'schemas'

const router = Router()

router.post('/login', validateBody(loginSchema), login)

export default router
