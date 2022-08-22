import { Request } from 'express'
import multer from 'multer'

// Image save destination in filesystem
const fileStorage = multer.diskStorage({
  destination: (_: Request, __: any, cb) => {
    cb(null, 'images')
  },
  filename: (_: Request, file, cb) => {
    cb(null, new Date().toISOString() + '-' + file.originalname)
  },
})

// Filter uploaded images by type
const fileFilter = (_: Request, file: any, cb: any) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

const uploadImage = multer({
  storage: fileStorage,
  fileFilter: fileFilter,
  limits: { fileSize: 3145728 },
}).single('image')

export default uploadImage
