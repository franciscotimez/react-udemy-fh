const { Router } = require("express");
const { check } = require('express-validator');

const { getEvents, createEvent, updateEvent, deleteEvent } = require("../controllers/events");
const { isDate } = require("../helpers/isDate");
const { fieldValidator } = require("../middlewares/fieldValidator");
const { validateJWT } = require("../middlewares/validateJWT");

const router = Router();

// Todas deben pasar por validacion de JWT
router.use(validateJWT); // De aqui hacia abajo paths protegidos

// Obtener eventos
router.get('/', getEvents);

// Crear evento
router.post(
  '/',
  [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatoria').custom(isDate),
    check('end', 'Fecha de fin es obligatoria').custom(isDate),
    fieldValidator
  ],
  createEvent);

// Update evento
router.put('/:id', updateEvent);

// Delete evento
router.delete('/:id', deleteEvent);

module.exports = router;
