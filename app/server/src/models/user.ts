import mongoose from 'mongoose';
// import uniqueValidator from 'mongoose-unique-validator';

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const UserSchema = new mongoose.Schema<IUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // unique just creates an index (faster querying), it doesn't
  // validate that the email is unique in the DB
  password: { type: String, required: true },
});

// UserSchema.plugin(uniqueValidator); // this uses a mongoose package to validate that email is unique

const User = mongoose.model<IUser>('User', UserSchema);
export default User;
