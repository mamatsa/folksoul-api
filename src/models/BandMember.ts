import { Schema, model } from 'mongoose'

interface IBandMember {
  nickname: string
  password: string
}

const bandMemberSchema = new Schema<IBandMember>({
  avatarUrl: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  instrument: {
    type: String,
    required: true,
  },
  orbitWidth: {
    type: String,
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
})

const BandMember = model<IBandMember>('Admin', bandMemberSchema)

export default BandMember
