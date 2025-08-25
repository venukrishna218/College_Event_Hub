const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    college: { type: String, required: true },
    password: { type: String, required: true, minlength: 6 },
    role: { type: String, enum: ["student", "admin"], default: "student" },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// compare password
userSchema.methods.matchPassword = async function (entered) {
  return bcrypt.compare(entered, this.password);
};

// generate reset password token
userSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  const hashed = crypto.createHash("sha256").update(resetToken).digest("hex");
  this.resetPasswordToken = hashed;
  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000; // 15 min
  return resetToken;
};

// IST time
function toISTString(d) {
  return new Date(d).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
}

// virtual fields for IST
userSchema.virtual("createdAtIST").get(function () {
  return this.createdAt ? toISTString(this.createdAt) : null;
});

userSchema.virtual("updatedAtIST").get(function () {
  return this.updatedAt ? toISTString(this.updatedAt) : null;
});

module.exports = mongoose.model("User", userSchema);
