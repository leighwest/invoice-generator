import { v4 as uuidV4 } from 'uuid';
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator'

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const userSchema = new mongoose.Schema({
  id: {type: uuidV4, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true, unique: true},  // unique just creates an index (faster querying), it doesn't 
                                                        // validate that the email is unique in the DB
  password: {type: String, required: true},
});

userSchema.plugin(uniqueValidator);   // this uses a mongoose package to validate that email is unique

module.exports = mongoose.model('User', userSchema);


