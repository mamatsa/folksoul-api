import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import { SocialLink } from 'models'
import fs from 'fs/promises'

// @desc     Get all social links
// @route    GET /social-links
// @access   Public
export const getSocialLinks = asyncHandler(
  async (_: Request, res: Response) => {
    const socialLinks = await SocialLink.find()
    res.status(200).json({ status: 'success', data: { socialLinks } })
  }
)

// @desc     Get specific social link
// @route    GET /social-link/:id
// @access   Public
export const getSocialLink = asyncHandler(
  async (req: Request, res: Response) => {
    const socialLink = await SocialLink.findById(req.params.id)
    res.status(200).json({ status: 'success', data: { socialLink } })
  }
)

// @desc     Add new social link
// @route    POST /social-link
// @access   Private
export const addSocialLink = asyncHandler(
  async (req: Request, res: Response) => {
    const addedSocialLink = await SocialLink.create(req.body)
    res.status(200).json({ status: 'success', data: { addedSocialLink } })
  }
)

// @desc     Add icon to social link
// @route    PUT /social-link/icon/:id
// @access   Private
export const addSocialLinkIcon = asyncHandler(
  async (req: Request, res: Response) => {
    // Check if image is provided
    if (!req.file) {
      res.status(422)
      throw new Error('no image provided')
    }

    // Extract image path in filesystem
    const iconUrl: string = req.file!.path

    // Find social link
    const socialLink = await SocialLink.findById(req.params.id)
    if (!socialLink) {
      res.status(400)
      throw new Error('wrong social link id')
    }

    // Update existing social link
    const updatedSocialLink = await socialLink.updateOne({
      iconUrl,
    })

    // Remove old image if exists
    if (updatedSocialLink && socialLink.iconUrl) {
      await fs.unlink(socialLink.iconUrl)
    }

    res.status(200).json({
      status: 'success',
      data: { iconUrl },
    })
  }
)

// @desc     Update social link
// @route    PUT /social-link/:id
// @access   Private
export const updateSocialLink = asyncHandler(
  async (req: Request, res: Response) => {
    const updatedSocialLink = await SocialLink.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    )
    if (!updateSocialLink) {
      res.status(400)
      throw new Error('wrong social link id')
    }
    res.status(200).json({ status: 'success', data: { updatedSocialLink } })
  }
)

// @desc     Delete social link
// @route    DELETE /social-link/:id
// @access   Private
export const deleteSocialLink = asyncHandler(
  async (req: Request, res: Response) => {
    const socialLink = await SocialLink.findById(req.params.id)
    if (!socialLink) {
      res.status(400)
      throw new Error('wrong social link id')
    }
    await socialLink.remove()
    // Remove social link icon
    if (socialLink && socialLink.iconUrl) {
      await fs.unlink(socialLink.iconUrl)
    }
    res.status(200).json({ status: 'success', data: null })
  }
)
