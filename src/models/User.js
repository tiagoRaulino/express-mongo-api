import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ddd: { type: Number, required: true },
  number: { type: Number, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

export default User;
