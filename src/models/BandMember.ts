import { Schema, model } from 'mongoose'

interface IBandMember {
  avatarUrl?: string
  name: string
  instrument: string
  orbitWidth: number
  color: string
  bio: string
}

const bandMemberSchema = new Schema<IBandMember>(
  {
    avatarUrl: String,
    name: {
      type: String,
      required: true,
    },
    instrument: {
      type: String,
      required: true,
    },
    orbitWidth: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
)

const BandMember = model<IBandMember>('BandMember', bandMemberSchema)

export default BandMember
