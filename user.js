const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  status: { type: Number, enum: [0, 1], default: 1 }  // 0=admin, 1=user
});

module.exports = mongoose.model('User', userSchema);
