"use strict";
const fs = require("fs");
const userStore = require("../store/user");

const handleFileUpload = (file) => {
  return new Promise((resolve, reject) => {});
};

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
        filePath: payload.file,
      };
      fs.writeFile("./src/upload/test.pdf", payload.file, (err) => {
        if (err) {
          console.log("Upload error!", err);
        }
        console.log("Upload successfully!");
      });

      await userStore.saveUser(user);
      return h
        .response({
          message: "user created",
          user,
        })
        .code(200);
    } catch (error) {
      console.error("Internal error", error);
    }
  },
};
