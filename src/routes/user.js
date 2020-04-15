"use strict";
const userHandle = require("../handlers/user");

module.exports = [
  {
    method: "POST",
    path: "/user",
    handler: userHandle.createUser,
  },
];
