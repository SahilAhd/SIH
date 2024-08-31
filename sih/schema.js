import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true, 
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  school: {
    type: String,
    required: true,
    trim: true
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true
  },
  classsection: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    match: /.+\@.+\..+/  // Basic email validation
  }
});

// Create the model
const Profile = mongoose.model('Profile', profileSchema);

export default Profile;
