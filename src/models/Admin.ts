import { Schema, model } from 'mongoose'

interface IAdmin {
  nickname: string
  password: string
}

const adminSchema = new Schema<IAdmin>({
  nickname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

const Admin = model<IAdmin>('Admin', adminSchema)

export default Admin
