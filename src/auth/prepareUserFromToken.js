/* global localStorage */
const jwt = require("jsonwebtoken");
const setTokenToHeaders = require("./setTokenToHeaders");

function prepareUserFromToken(token) {
  if (token) {
    localStorage.setItem("token", token);
    setTokenToHeaders(token);
    return jwt.decode(token);
  } else {
    console.error(
      "ERROR: redux: prepareUserFromToken did not receive a token:",
      token
    );
    return null;
  }
}

module.exports = prepareUserFromToken;
