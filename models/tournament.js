const mongoose = require('mongoose');

const tournamentSchema = new mongoose.Schema(
  {
    tournament_name: {
      type: String,
      required: true,
      unique: true,
    },
    creator_name: {
      type: String,
      required: true,
    },
    winner_name: {
      type: String,
    },
    rooms: [
      {
        room_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "rooms",
          required: true,
        },
        players: [
          {
            player_name: {
              type: String,
              required: true,
            },
            score: {
              type: Number,
              required: true,
            },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

const Tournament = mongoose.model('Tournament', tournamentSchema);

module.exports = Tournament;
