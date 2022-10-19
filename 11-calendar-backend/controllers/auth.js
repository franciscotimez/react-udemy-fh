const { response } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const createUser = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    let usuario = await User.findOne({ email });

    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: 'El usuario ya existe.',
      });
    }
    usuario = new User(req.body);

    // Encrypt pass
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();

    res.status(201).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name
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