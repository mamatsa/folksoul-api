import { Schema, model } from 'mongoose'

interface IBand {
  imageUrl?: string
  about: string
}

const bandSchema = new Schema<IBand>(
  {
    imageUrl: String,
    about: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
)

const Band = model<IBand>('Band', bandSchema)

export default Band
