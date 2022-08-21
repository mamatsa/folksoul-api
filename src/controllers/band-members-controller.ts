import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import { BandMember } from 'models'
import { AddMemberBody } from 'types'

// @desc     Get all band members
// @route    GET /band-members
// @access   Private
export const getMembers = asyncHandler(async (_: Request, res: Response) => {
  const bandMembers = await BandMember.find()
  res.status(200).json({ status: 'success', data: { bandMembers } })
})

// @desc     Add new band member
// @route    POST /band-member
// @access   Private
export const addMember = asyncHandler(async (req: Request, res: Response) => {
  const { name, instrument, orbitWidth, color, bio } = req.body as AddMemberBody
  if (!req.file) {
    res.status(422)
    throw new Error('no image provided.')
  }
  const avatarUrl: string = req.file!.path
  const bandMember = await BandMember.create({
    avatarUrl,
    name,
    instrument,
    orbitWidth,
    color,
    bio,
  })

  res
    .status(200)
    .json({ status: 'success', data: { addedBandMember: bandMember } })
})

// @desc     Update band member
// @route    PUT /band-member
// @access   Private
export const updateMember = asyncHandler(
  async (req: Request, res: Response) => {
    const updatedMember = await BandMember.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    )
    if (!updatedMember) {
      res.status(422)
      throw new Error('wrong member id')
    }
    res
      .status(200)
      .json({ status: 'success', data: { updatedBandMember: updatedMember } })
  }
)

// @desc     Delete band member
// @route    DELETE /band-member
// @access   Private
export const deleteMember = asyncHandler(
  async (req: Request, res: Response) => {
    const bandMember = await BandMember.findById(req.params.id)
    if (!bandMember) {
      res.status(422)
      throw new Error('wrong band member id')
    }
    await bandMember.remove()
    res.status(200).json({ status: 'success', data: null })
  }
)
