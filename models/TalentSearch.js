import mongoose from "mongoose";

const TalentSearchSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  gender: [{
    type: String,
    trim: true,
  }],
  identicalTwin: {
    type: String,
    trim: true,
  },
  profileUpdated: {
    type: Number,
  },
  profileNotUpdated: {
    type: Number,
  },
  fromAge: {
    type: String,
    trim: true,
  },
  toAge: {
    type: String,
    trim: true,
  },
  fromHeight: {
    type: String,
    trim: true,
  },
  toHeight: {
    type: String,
    trim: true,
  },
  fromWeight: {
    type: Number,
  },
  toWeight: {
    type: Number,
  },
  requiredAvailability: [{
    type: Date,
  }],
  unionStatus: [{
    type: String,
    trim: true,
  }],
  ethnicity: [{
    type: String,
    trim: true,
  }],
  eyeColor: [{
    type: String,
    trim: true,
  }],
  hairColor: [{
    type: String,
    trim: true,
  }],
  clothingSize: [{
    type: String,
    trim: true,
  }],
  shoeSize: [{
    type: String,
    trim: true,
  }],
  bodyType: [{
    type: String,
    trim: true,
  }],
  area: [{
    type: String,
    trim: true,
  }],
  type: [{
    type: String,
    trim: true,
  }],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.TalentSearch ||
  mongoose.model("TalentSearch", TalentSearchSchema);
