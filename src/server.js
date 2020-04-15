"use strict";

const Hapi = require("@hapi/hapi");
const inert = require("@hapi/inert");
const path = require("path");

const routes = require("./routes/user");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
    routes: {
      files: {
        relativeTo: path.join(__dirname, "public"),
      },
    },
  });

  await server.register(inert);
  await server.start();

  server.route(routes);
  console.log(`Server running on ${server.info.uri}`);
};

process.on("unhandledRejection", (err) => {
  console.error(err);
  process.exit(1);
});

module.exports = {
  init,
};
