'use strict';

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  emailAddress: {
    type: String,
    required: 'Email address is required',
    unique: true,
    index: true,
    match: [/^[\w\.-]+@([\w-]+\.){1,4}[A-Za-z]{2,6}$/, "Please fill a valid email address"]
  },
  title: {
    type: String,
    required: true
  },
  content: String,
  keywords: [String]
}, {
  timestamps: true
});