const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 4,   // use "minlength" (all lowercase) not "minLength"
      maxLength: 50
    },
    lastName: {
      type: String,
      required: true,
      minlength: 4,
      maxLength: 50
    },
    emailID: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
      match: /.+\@.+\..+/ // simple email regex
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
      maxLength: 16
    },
    age: {
      type: Number,
      min: 18,
      max: 60
    },
    gender: {
      type: String,
      validate(value) {
        if (!["male", "female", "others"].includes(value)) {
          throw new Error("Gender is not valid...!");
        }
      }
    },
    skills: {
      type: [String],
    },
    photoUrl: {
      type: String,
      default: "https://www.freepik.com/premium-vector/people-profile-graphic_2757319.htm"
    },
    about: {
      type: String,
      default: "default message about user "
    }
  },
  { 
    timestamps: true // ✅ placed outside the schema fields
  }
);

module.exports = mongoose.model("User", userSchema);
