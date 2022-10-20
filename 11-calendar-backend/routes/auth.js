const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { fieldValidator } = require('../middlewares/fieldValidator');
const { createUser, loginUser, renewToken } = require('../controllers/auth');
const { validateJWT } = require('../middlewares/validateJWT');


router.post(
  '/new',
  [ // Middlewares
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe ser de mas de 6 caracteres').isLength({ min: 6 }),
    fieldValidator
  ],
  createUser);

router.post(
  '/',
  [ // Middlewares
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe ser de mas de 6 caracteres').isLength({ min: 6 }),
    fieldValidator
  ],
  loginUser);

router.get('/renew', validateJWT, renewToken);

module.exports = router;