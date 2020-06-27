const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema(
  {
    roomName: {
      type: String,
      required: true,
      unique: true
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    participants: [
      { type: Schema.Types.ObjectId, ref: 'User' }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Room", RoomSchema);