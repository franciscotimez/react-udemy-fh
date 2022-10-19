const { response } = require('express');
const User = require('../models/User');

const createUser = async (req, res = response) => {
  // const { name, email, password } = req.body;
  try {
    const usuario = new User(req.body);
    await usuario.save();

    res.status(201).json({
      ok: true,
      msg: 'registro',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrator',
    });
  }
};

const loginUser = (req, res = response) => {
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