const moment = require('moment');

const isDate = (value) => {

  const fecha = moment(value);
  if (fecha.isValid()) {
    return true;
  }
  return false;
};

module.exports = { isDate };