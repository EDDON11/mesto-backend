const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    minlength: 2,
    maxlength: 30,
    reqired: true,
    type: String,
  },

  about: {
    minlength: 2,
    maxlength: 30,
    reqired: true,
    type: String,
  },

  avatar: {
    reqired: true,
    type: String,
    validate: {
      validator(valid) {
        return /(http|https):\/\/(www\.)?(\S+)\.([a-zA-Z])+(\/)?(\w-\._~:\/\?#\[\]@!\$&’\(\)\*\+,;=)?/.test(
          valid,
        );
      },
      message: 'Введите правильный url',
    },
  },
});

module.exports = mongoose.model('user', userSchema);
