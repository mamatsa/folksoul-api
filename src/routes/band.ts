import { Router } from 'express'
import {
  getBandInformation,
  updateBandInformation,
  updateBandImage,
} from 'controllers'
import { validateBody, multerMiddleware, protect } from 'middlewares'
import { bandSchema } from 'schemas'

const router = Router()

router.get('/band-information', getBandInformation)
router.put(
  '/band-information',
  protect,
  validateBody(bandSchema),
  updateBandInformation
)
router.put('/band-image', protect, multerMiddleware, updateBandImage)

export default router
