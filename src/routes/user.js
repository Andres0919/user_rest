"use strict";

module.exports = [
  {
    method: "GET",
    path: "/user",
    handler: (req, h) => {
      console.log(":)");
      return h
        .response({
          message: "organization created",
        })
        .code(200);
    },
  },
];
