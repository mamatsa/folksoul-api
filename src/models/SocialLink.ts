import { Schema, model } from 'mongoose'

interface ISocialLink {
  iconUrl?: string
  name: string
  link: string
}

const socialLinkSchema = new Schema<ISocialLink>(
  {
    iconUrl: String,
    name: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
)

const SocialLink = model<ISocialLink>('SocialLink', socialLinkSchema)

export default SocialLink
