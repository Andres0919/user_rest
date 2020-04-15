"use strict";
const userHandle = require("../handlers/user");

module.exports = [
  {
    method: "GET",
    path: "/",
    handler: (req, h) => {
      return h.file("./index.html");
    },
  },
  {
    method: "POST",
    path: "/user",
    options: {
      payload: {
        output: "stream",
        parse: true,
      },
      handler: userHandle.createUser,
    },
  },
];
