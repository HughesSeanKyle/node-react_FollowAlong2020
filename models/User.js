const mongoose = require('mongoose');
const { Schema } = mongoose;
  //mongoose needs to know ahead of time what properties are defined in the Schema/model V38

const userSchema = new Schema({
  googleId: String
})

mongoose.model('users', userSchema);

