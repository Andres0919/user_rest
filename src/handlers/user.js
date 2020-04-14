"use strict";
const userStore = require("../store/user");

module.exports = {
  createUser: async (req, h) => {
    try {
      let { payload } = req;
      let user = {
        firstName: payload.firstName,
        lastName: payload.lastName,
        documentType: payload.documentType,
        documentNumber: payload.documentNumber,
        email: payload.email,
        cellphone: payload.cellphone,
        birthDate: payload.birthDate,
        filePath: payload.filePath,
      };

      await userStore.saveUser(user);

      return h
        .response({
          message: "user created",
        })
        .code(200);
    } catch (error) {
      console.error("Internal error", error);
    }
  },
};
