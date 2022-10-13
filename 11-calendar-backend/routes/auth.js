const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { createUser, loginUser, renewToken } = require('../controllers/auth');


router.post(
  '/new',
  [ // Middlewares
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe ser de mas de 6 caracteres').isLength({ min: 6 }),
  ],
  createUser);

router.post(
  '/',
  [ // Middlewares
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe ser de mas de 6 caracteres').isLength({ min: 6 }),
  ],
  loginUser);

router.get('/renew', renewToken);

module.exports = router;