module.exports = function getSeason(date) {
  if (arguments.length === 0) {
    return "Unable to determine the time of year!";
  }
  if (!(date instanceof Date)) {
    throw new TypeError;
  }
  if (Object.prototype.hasOwnProperty.call(date, "getMonth")) {
    throw new TypeError;
  }

  let month = date.getMonth()
  if (month < 2 || month === 11) {
    return "winter";
  }
  if (month >= 2 && month < 5) {
    return "spring";
  }
  if (month >= 5 && month < 8) {
    return "summer";
  }
  if (month >= 8 && month < 11) {
    return "autumn";
  }
};
