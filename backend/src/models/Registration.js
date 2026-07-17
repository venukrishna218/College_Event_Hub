const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema(
  {
    event_id: { type: mongoose.Schema.Types.ObjectId, ref: "Event", required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
  },
  {
    timestamps: true, // This adds created_at and updated_at (acts as timestamp)
  }
);

module.exports = mongoose.model("Registration", registrationSchema);
