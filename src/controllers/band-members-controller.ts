import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import { BandMember } from 'models'
import { AddMemberBody } from 'types'
import fs from 'fs/promises'

// @desc     Get all band members
// @route    GET /band-members
// @access   Public
export const getMembers = asyncHandler(async (_: Request, res: Response) => {
  const bandMembers = await BandMember.find()
  res.status(200).json({ status: 'success', data: { bandMembers } })
})

// @desc     Get specific band member
// @route    GET /band-member/:id
// @access   Public
export const getMember = asyncHandler(async (req: Request, res: Response) => {
  const bandMember = await BandMember.findById(req.params.id)
  res.status(200).json({ status: 'success', data: { bandMember } })
})

// @desc     Add new band member
// @route    POST /band-member
// @access   Private
export const addMember = asyncHandler(async (req: Request, res: Response) => {
  const addedBandMember = await BandMember.create(req.body as AddMemberBody)
  res.status(200).json({ status: 'success', data: { addedBandMember } })
})

// @desc     Add band member avatar
// @route    PUT /band-member/avatar
// @access   Private
export const addMemberAvatar = asyncHandler(
  async (req: Request, res: Response) => {
    // Check if image is provided
    if (!req.file) {
      res.status(422)
      throw new Error('no image provided')
    }

    // Extract image path in filesystem
    const avatarUrl: string = req.file!.path

    // Find band member
    const bandMember = await BandMember.findById(req.params.id)
    if (!bandMember) {
      res.status(400)
      throw new Error('wrong member id')
    }

    // Update existing band member
    const updatedBandMember = await bandMember.updateOne({
      avatarUrl,
    })

    // Remove old image
    if (updatedBandMember && bandMember.avatarUrl) {
      await fs.unlink(bandMember.avatarUrl)
    }

    res.status(200).json({
      status: 'success',
      data: { avatarUrl },
    })
  }
)

// @desc     Update band member
// @route    PUT /band-member
// @access   Private
export const updateMember = asyncHandler(
  async (req: Request, res: Response) => {
    const updatedBandMember = await BandMember.findByIdAndUpdate(
      req.params.id,
      req.body as AddMemberBody,
      {
        new: true,
      }
    )
    if (!updatedBandMember) {
      res.status(400)
      throw new Error('wrong member id')
    }
    res.status(200).json({ status: 'success', data: { updatedBandMember } })
  }
)

// @desc     Delete band member
// @route    DELETE /band-member
// @access   Private
export const deleteMember = asyncHandler(
  async (req: Request, res: Response) => {
    const bandMember = await BandMember.findById(req.params.id)
    if (!bandMember) {
      res.status(400)
      throw new Error('wrong band member id')
    }
    await bandMember.remove()
    res.status(200).json({ status: 'success', data: null })
  }
)
