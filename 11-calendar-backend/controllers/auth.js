const { response } = require('express');

const createUser = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'registro'
  });
};

const loginUser = (req, res = response) => {
  console.log("Holis");
  res.json({
    ok: true,
    msg: 'login'
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