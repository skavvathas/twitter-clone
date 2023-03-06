import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  username: String,
  password: String
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);