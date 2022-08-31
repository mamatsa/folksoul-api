import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import { Band } from 'models'
import fs from 'fs/promises'

// @desc     Get information about band
// @route    GET /band-information
// @access   Public
export const getBandInformation = asyncHandler(
  async (_: Request, res: Response) => {
    const band = await Band.findOne().select('-_id')
    res.status(200).json({ status: 'success', data: { band } })
  }
)

// @desc     Change band information
// @route    PUT /band-information
// @access   Private
export const updateBandInformation = asyncHandler(
  async (req: Request, res: Response) => {
    let band = await Band.findOne()
    if (!band) {
      band = await Band.create(req.body)
    } else {
      band.about = req.body.about
      await band.save()
    }
    res.status(200).json({ status: 'success', data: { band } })
  }
)

// @desc     Add band image
// @route    PUT /band-image
// @access   Private
export const updateBandImage = asyncHandler(
  async (req: Request, res: Response) => {
    // Check if image is provided
    if (!req.file) {
      res.status(422)
      throw new Error('no image provided')
    }

    // Extract image path in filesystem
    const imageUrl: string = req.file!.path

    // Find band
    let band = await Band.findOne()
    if (!band) {
      band = await Band.create({ about: '' })
    }

    // Update band
    const updatedBand = await band.updateOne({
      imageUrl,
    })

    // Remove old image if exists
    if (updatedBand && band.imageUrl) {
      await fs.unlink(band.imageUrl)
    }

    res.status(200).json({
      status: 'success',
      data: { imageUrl },
    })
  }
)
