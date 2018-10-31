const products = require("../model");

module.exports = {
  Query: {
    message() {
      return "Hello World!";
    },
    products() {
      return products;
    }
  }
};
