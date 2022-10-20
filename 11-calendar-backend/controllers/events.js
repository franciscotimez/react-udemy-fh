const { response } = require('express');
const Event = require('../models/Event');

const getEvents = async (req, res = response) => {
  const events = await Event.find().populate("user", "name");

  res.json({
    ok: true,
    events
  });
};

const createEvent = async (req, res = response) => {
  // Verificar evento en el body
  const evento = new Event(req.body);

  try {
    evento.user = req.uid;
    const eventSaved = await evento.save();

    res.status(201).json({
      ok: true,
      event: eventSaved
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrator',
    });
  }
};

const updateEvent = async (req, res = response) => {

  const eventId = req.params.id;
  const uid = req.uid;

  try {

    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: 'El evento No existe.',
      });
    }

    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: 'No tiene permiso de hacer esta accion.',
      });
    }

    const newEvent = {
      ...req.body,
      user: uid
    };

    const eventUpdated = await Event.findByIdAndUpdate(eventId, newEvent, { new: true });

    res.status(200).json({
      ok: true,
      event: eventUpdated
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrator',
    });
  }
};

const deleteEvent = async (req, res = response) => {
  res.json({
    ok: true,
    msg: 'deleteEvent',
  });
};

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
};