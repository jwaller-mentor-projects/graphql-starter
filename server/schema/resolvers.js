const products = require("../model");

module.exports = {
  Query: {
    message() {
      return "Hello World!";
    },
    products() {
      return products;
    },
    productsCheaperThan(_, args, req) {
      //   console.log("req: ", req);
      //   console.log("args: ", args);
      return products.filter(prod => prod.price < price);
    }
  },
  Mutation: {
    addProduct(_, { name, price, color }) {
      let id = products.slice().pop().id + 1;
      products.push({ name, price, color, id });
      return products;
    }
  }
};
