import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String, // For a real app, store hashed passwords only!
});

export default mongoose.models.User || mongoose.model('User', UserSchema);