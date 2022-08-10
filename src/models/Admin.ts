import mongoose from 'mongoose';

interface IAdmin {
  nickname: string;
  password: string;
}

const adminSchema = new mongoose.Schema<IAdmin>({
  nickname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;
