const { response } = require('express');

const createUser = (req, res = response) => {

  const { name, email, password } = req.body;

  if (name.length < 5) {
    return res.status(400).json({
      ok: false,
      msg: "El nombre debe tener mas de 5 letras"
    });
  }
  res.json({
    ok: true,
    msg: 'registro',
    name,
    email,
    password
  });
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