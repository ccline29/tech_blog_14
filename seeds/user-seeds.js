const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userData = [
  {
    username: "johnsmoltz",
    email: "jsmoltz@gmail.com",
    password: "password123",
  },
  {
    username: "tomglavine",
    email: "tglavine@gmail.com",
    password: "password123",
  },
  {
    username: "gregmaddux",
    email: "gmaddux@gmail.com",
    password: "password123",
  },
  {
    username: "ryanklesko",
    email: "rklesko@gmail.com",
    password: "password123",
  },
  {
    username: "chipperjones",
    email: "cjones@gmail.com",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;