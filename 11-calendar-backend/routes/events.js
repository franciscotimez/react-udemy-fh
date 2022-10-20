const { Router } = require("express");
const { getEvents, createEvent, updateEvent, deleteEvent } = require("../controllers/events");
const { validateJWT } = require("../middlewares/validateJWT");

const router = Router();

// Todas deben pasar por validacion de JWT
router.use(validateJWT) // De aqui hacia abajo paths protegidos

// Obtener eventos
router.get('/', getEvents);

// Crear evento
router.post('/', createEvent);

// Update evento
router.put('/:id', updateEvent);

// Delete evento
router.delete('/:id', deleteEvent);

module.exports = router;
