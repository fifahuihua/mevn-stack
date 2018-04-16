'use strict';

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  displayName: String,
  username: {
    type: String,
    required: true,
    index: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

mongoose.model('User', UserSchema);