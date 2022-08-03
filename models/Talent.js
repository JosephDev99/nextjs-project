import mongoose from "mongoose";

const TalentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "This field is required"],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "This field is required"],
    trim: true,
  },
  parentFirstName: {
    type: String,
    trim: true,
  },
  parentLastName: {
    type: String,
    trim: true,
  },
  gender: {
    type: String,
    required: [true, "This field is required"],
    trim: true,
  },
  identicalTwin: {
    type: Boolean,
    required: [true, "This field is required"],
  },
  actualEthnicity: {
    type: String,
    required: true,
    trim: true,
  },
  looksLikeEthnicity: [{
    type: String,
    required: [true, "This field is required"],
    trim: true,
  }],
  ethnicityNotes: {
    type: Text,
  },
  dob: {
    type: Date,
    required: [true, "This field is required"],
  },
  eyeColor: {
    type: String,
    required: [true, "This field is required"],
    trim: true,
  },
  hairColor: {
    type: String,
    required: [true, "This field is required"],
    trim: true,
  },
  clothingSize: {
    type: String,
    required: [true, "This field is required"],
    trim: true,
  },
  shoeSize: {
    type: String,
    required: [true, "This field is required"],
    trim: true,
  },
  height: {
    type: String,
    required: [true, "This field is required"],
    trim: true,
  },
  weight: {
    type: Number,
    required: [true, "This field is required"],
  },
  cellPhone: {
    type: String,
    required: [true, "This field is required"],
    trim: true,
  },
  secondaryPhone: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "This field is required"],
    trim: true,
  },
  confirmEmail: {
    type: String,
    required: [true, "This field is required"],
    trim: true,
  },
  stateTalentLivesIn: {
    type: String,
    required: [true, "This field is required"],
    trim: true,
  },
  cityTalentLivesIn: {
    type: String,
    required: [true, "This field is required"],
    trim: true,
  },
  facebook: {
    type: String,
    trim: true,
  },
  imdbs: {
    type: String,
    trim: true,
  },
  instagram: {
    type: String,
    trim: true,
  },
  personalWebsite: {
    type: String,
    trim: true,
  },
  twitter: {
    type: String,
    trim: true,
  },
  youtube: {
    type: String,
    trim: true,
  },
  isHomeschooled: {
    type: Boolean,
    required: [true, "This field is required"],
  },
  agencyOrManager: {
    type: String,
    trim: true,
  },
  message: {
    type: Text,
  },
  desiredUsername: {
    type: String,
    required: [true, "Please enter a valid username"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "This field is required"],
    trim: true,
  },
  confirmPassword: {
    type: String,
    required: [true, "This field is required"],
    trim: true,
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Talent ||
  mongoose.model("Talent", TalentSchema);
