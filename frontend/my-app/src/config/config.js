require('dotenv').config({
  path: "../.env",
});

module.exports = {
  url: `http://${process.env.BASE_URL}:${process.env.SERVER_PORT}`,
};
