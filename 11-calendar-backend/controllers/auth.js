const { response } = require('express');
const { validationResult } = require('express-validator');
const createUser = (req, res = response) => {

  const { name, email, password } = req.body;

  // Manejo de errores
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped()
    });
  }

  res.status(201).json({
    ok: true,
    msg: 'registro',
    name,
    email,
    password
  });
};

const loginUser = (req, res = response) => {
  // Manejo de errores
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped()
    });
  }

  const { email, password } = req.body;

  res.json({
    ok: true,
    msg: 'login',
    email,
    password
  });
};

const renewToken = (req, res = response) => {
  console.log("Holis");
  res.json({
    ok: true,
    msg: 'renewToken'
  });
};

module.exports = {
  createUser,
  loginUser,
  renewToken
};