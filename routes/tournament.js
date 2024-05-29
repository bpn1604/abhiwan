const express = require('express');
const Tournament = require('../models/tournament');

const router = express.Router();

router.post('/create-tournament', async (req, res) => {
  const { tournament_name, creator_name } = req.body;

  const tournament = new Tournament({ tournament_name, creator_name });

  try {
    await tournament.save();
    res.status(201).send(tournament);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/add-room/:tournament_name', async (req, res) => {
  const { tournament_name } = req.params;
  const { room_id, players } = req.body;
  console.log(req.params)
  try {
    const tournament = await Tournament.findOneAndUpdate(
      { tournament_name },
      { $push: { rooms: { room_id, players } } },
      { new: true }
    );
    console.log(tournament)
    if (!tournament) {
      return res.status(404).send('Tournament not found');
    }

    res.send(tournament);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/join-tournament', async (req, res) => {
  const { tournament_name, room_id, player_name, score } = req.body;

  try {
    const tournament = await Tournament.findOneAndUpdate(
      { tournament_name, "rooms.room_id": room_id },
      { $push: { "rooms.$.players": { player_name, score } } },
      { new: true }
    );

    if (!tournament) {
      return res.status(404).send('Tournament or Room not found');
    }

    res.send(tournament);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/declare-winner/:tournament_name/:room_id', async (req, res) => {
  const { tournament_name, room_id } = req.params;
  console.log(tournament_name,room_id)
  try {
    const tournament = await Tournament.findOne({ tournament_name });
    //console.log(tournament)
    if (!tournament) {
      return res.status(404).send('Tournament not found');
    }

    const room = tournament.rooms.find(room => room.room_id.toString() === room_id);
    //console.log(room)
    if (!room) {
      return res.status(404).send('Room not found');
    }

    let highestScore = -1;
    let winner = '';

    room.players.forEach(player => {
      if (player.score > highestScore) {
        highestScore = player.score;
        winner = player.player_name;
      }
    });
    console.log(winner)
    tournament.winner_name = winner;
    console.log(tournament)
    await tournament.save();

    res.send({ winner });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
