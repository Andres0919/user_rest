"use strict";
const { User } = require("../models");

module.exports = {
  saveUser: async (user) => {
    await User.create(user);
  },
};
