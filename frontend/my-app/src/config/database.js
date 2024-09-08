require('dotenv').config({
  path: "../.env",
});

module.exports = {
  url: `https://${process.env.BASE_URL}:${process.env.SERVER_PORT}`,
};
