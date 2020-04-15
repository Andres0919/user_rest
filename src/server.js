"use strict";

const Hapi = require("@hapi/hapi");
const routes = require("./routes/user");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  server.route(routes);

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

process.on("unhandledRejection", (err) => {
  console.error(err);
  process.exit(1);
});

module.exports = {
  init,
};
