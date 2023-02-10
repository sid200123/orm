const express = require("express");
const app = express();
const sequelize = require("sequelize");
const db = require("./models");

const { User } = require("./models");

app.get("/select", (req, res) => {
  User.findAll({ where: { firstName: "sid" } })
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/insert", (req, res) => {
  User.create({
    firstName: "sid",
    age: 22,
  }).catch((err) => {
    if (err) {
      console.log("Error - ", err);
    }
  });
  res.send("Inserted");
});

app.delete("/delete", (req, res) => {
  User.destroy({ where: { id: 9 } });
  res.send("Deleted");
});

db.sequelize.sync().then((req) => {
  app.listen(2001, () => {
    console.log("Server Runing");
  });
});
